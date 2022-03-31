const client = require('./database.js')
const express = require('express');
const app = express();
const cors = require("cors");


app.use(cors());
//app.use(express.json());


app.listen(1001, ()=>{
    console.log("Sever is now listening at port 1001");
})

client.connect();

const logger = (req, res, next) => {
    console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
    console.log('HTTP METHOD', req.method);
    console.log('HTTP BODY', req.body);
    console.log('URL PARAMETER', req.params);
    next();
}
app.use(logger);


const bodyParser = require("body-parser");

//Anpassung der Dateigröße die erlaubt ist
app.use(bodyParser.json({limit: '10mb', extended: true}))

//app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
// app.use(bodyParser.json({limit: "50mb"}));

//GET-MEthode von laufenden Auctionen mit Suchfunktion
app.get("/articles", async (req, res) => {    
    try {
        
        const { name } = req.query;

        const articles = await client.query("SELECT * FROM articles WHERE name ILIKE $1 AND startdatum > NOW()- INTERVAL '15 MINUTE'", [`%${name}%`]);
        res.json(articles.rows);
    } catch (err) {
        console.error(err.message);
    }
});
    

//Artikel hinzufügen
app.post('/articles', (req, res)=> {
 
   const article = req.body;
    console.log(req.body);
    let insertQuery = `insert into articles(name, beschreibung, startpreis, bild, startdatum) 
                       values('${article.name}', '${article.beschreibung}', '${article.startpreis}', '${article.bild[0].base64}', '${article.startdatum}')RETURNING id`
    client.query(insertQuery, (err, result)=>{
        
        if(err){ 
        resolveBadRequest(res, 'Etwas ist schiefgelaufen' )          

     }
    else{
            res.send('Erfolgreich neuer Artikel erstellt')
        }
    })
    client.end;
});

//Preis des Artikel updaten

app.put('/articles/:id', (req, res)=> {
    let article = req.body;
    console.log(req.body);
    let updateQuery = `update articles
                set startpreis = '${article.startpreis}'
                where id = ${article.id} AND  startpreis < '${article.startpreis}' `
                       
    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update war erfolgreich')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


//Administrativer Delete 
app.delete('/articles/:id', (req, res)=> {
    let insertQuery = `delete from articles where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Artikel wurde erfolgreich gelöscht')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


function resolveNotFound(res, message) {        //Funktion die bei Fehler 404 ausgegeben wird
    res.statusCode = 404;
    res.send(message);
    res.end();
    return;
}
function resolveBadRequest(res, message) {       //Funktion die bei Fehler 400 ausgegeben wird
    res.statusCode = 400;
    res.send(message);
    res.end();
    return;
}
