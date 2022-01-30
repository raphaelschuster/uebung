const client = require('./database.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
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
app.use(bodyParser.json());
app.get('/articles', (req, res)=>{
    client.query(`Select * from articles`, (err, result)=>{
       
        if (err) {
                    resolveNotFound(res, 'Keine Artikel gefunden' )
                } else {
                    res.statusCode = 200;
                    res.send(result.rows);
                    res.end();
                }    
    });
    client.end;
})
app.get('/article/:id', (req, res)=>{           //
    client.query(`Select * from articles where id=${req.params.id}`, (err, result)=>{
        //const { id } = req.params;
         //const article = getArticle(id);
       if (req.params.id.length === 0) {            // alle gegeben trz gescheitert , paramenter finden sodass leerer DB eintrag erkannt wird
            resolveNotFound(res, '${id} wurde nicht gefunden' )
        }
        else {
            res.statusCode = 200;
            res.send(result.rows);
            res.end();
        }    
    });
    client.end;
})
app.post('/articles', (req, res)=> {
 
    if (!req.body.hasOwnProperty('id')) {
        resolveBadRequest(res, 'Fehlende "id"-Eigenschaft');
    }
    if (!req.body.hasOwnProperty('name')) {
        resolveBadRequest(res, 'Fehlende "name"-Eigenschaft');
    }
   const article = req.body;
    let insertQuery = `insert into articles(id, name) 
                       values(${article.id}, '${article.name}')`
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
    let updateQuery = `update articles
                       set name = '${article.name}'
                       where id = ${article.id}`

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
function getArticle(id) {                       //Funktion holt artikel ID
    return articles.find((article) => article.id === id);
}