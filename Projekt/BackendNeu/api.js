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
app.use(bodyParser.json({limit: '10mb', extended: true}))
//app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
// app.use(bodyParser.json({limit: "50mb"}));

// app.get('/articles', (req, res)=>{
//     client.query(`Select * from articles`, (err, result)=>{
       
//         if (err) {
//                     resolveNotFound(res, 'Keine Artikel gefunden' )
//                 } else {
//                     res.statusCode = 200;
//                     res.send(result.rows);
//                     res.end();
//                 }    
//     });
//     client.end;
// })
// app.get('/article/:id', (req, res)=>{    
//     // const { id } = req.params;
//         //  const article = getArticle(id);
// //   if (res === "[]") {           
// //             resolveNotFound(res, '${id} wurde nicht gefunden' )
// //         } 

//     client.query(`Select * from articles where id=${req.params.id}`, (err, result)=>{
        
//         // alle gegeben trz gescheitert , paramenter finden sodass leerer DB eintrag erkannt wird
// //result.hasOwnProperty('id')
//         if(err){
//             resolveNotFound(res, 'Keine Artikel mit dieser ID gefunden' )
//         }
//         else {
//             res.statusCode = 200;
//             res.send(result.rows);
//             res.end();
//         }    
//     });
//     client.end;
// })

app.get("/articles", async (req, res) => {    
    try {
        
        const { name } = req.query;

        const articles = await client.query("SELECT * FROM articles WHERE name ILIKE $1 AND startdatum > NOW()- INTERVAL '15 MINUTE'", [`%${name}%`]);
        res.json(articles.rows);
    } catch (err) {
        console.error(err.message);
    }
});
    
//     app.get("/articles/images/:id"), (req, res) =>{
// const { id } = req.params;
     

//     client.query(`Select * from articles where id=${req.params.id}`, (err, result)=>{
        
//         if(err){
//             resolveNotFound(res, 'Keine Artikel mit dieser ID gefunden' )
//         }
//         else {
//             res.statusCode = 200;
//             res.send(result.rows);
//             res.end();
//         }    
//     });
//     client.end;
//  }
    //client.query(`Select * from articles where name=${req.params.name}`, (err, result)=>{
        
        // alle gegeben trz gescheitert , paramenter finden sodass leerer DB eintrag erkannt wird

    //     if(err){
    //         resolveNotFound(res, 'Keine Artikel mit diesem Namen gefunden' )
    //     }
    //     else {
    //         res.statusCode = 200;
    //         res.send(result.rows);
    //         res.end();
    //     }    
    // });
    // client.end;


app.post('/articles', (req, res)=> {
 
    // if (!req.body.hasOwnProperty('id')) {
    //     resolveBadRequest(res, 'Fehlende "id"-Eigenschaft');            // wenn dieser Fehler auftritt muss die api.js neu gestartet werden
    // }
    // if (!req.body.hasOwnProperty('first_name')) {
    //     resolveBadRequest(res, 'Fehlende "first_name"-Eigenschaft');
    // }
    // if (!req.body.hasOwnProperty('last_name')) {
    //     resolveBadRequest(res, 'Fehlende "last_name"-Eigenschaft');
    // }
    // if (!req.body.hasOwnProperty('preis')) {
    //     resolveBadRequest(res, 'Fehlende "preis"-Eigenschaft');
    // }
   const article = req.body;
   //const id = uuidv4();   // zum einfügen einer einmaligen ID wahrscheinlich unnötig
   
    console.log(req.body);
    let insertQuery = `insert into articles(name, beschreibung, startpreis, bild, startdatum) 
                       values('${article.name}', '${article.beschreibung}', '${article.startpreis}', '${article.bild[0].base64}', '${article.startdatum}')RETURNING id`
    client.query(insertQuery, (err, result)=>{
        
        if(err){ //console.log(err.message)
       // res.send('Artikel konnte nicht angelegt werden, bitte überprüfen Sie Ihre Eingabe')
        resolveBadRequest(res, 'ID ist bereits vergeben' )          

     }
    else{
            res.send('Erfolgreich neuer Artikel erstellt')
        }
    })
    client.end;
});
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
// function getArticle(id) {                       //Funktion holt artikel ID
//     return articles.find((article) => article.id === id);
// }