// local host starten
'use strict';

const express = require('express');
const app = express();
const cors = require("cors");
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

//Erstellen des Arrays
const articles = [];

//tracking der Requests
const logger = (req, res, next) => {
    console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
    console.log('HTTP METHOD', req.method);
    console.log('HTTP BODY', req.body);
    console.log('URL PARAMETER', req.params);
    next();
}
app.use(logger);


//REST-API: Ausgabe aller Artikel
app.get('/articles', (req, res) => {
    if (articles.length === 0) {
        resolveNotFound(res, 'Keine Artikel gefunden' )
    } else {
        res.statusCode = 200;
        res.json(articles);
        res.end();
    }    
  });

//REST-API: Ausgabe eines bestimmten Artikels  
app.get('/article/:id', (req, res) => {
     const { id } = req.params;
     const article = getArticle(id);
    if (!article) {
           resolveNotFound(res, `${id} wurde nicht gefunden`)
    } else {
        res.statusCode = 200;
        res.json(article);
        res.end();
      }
 })  

//REST-API: Neuen Artikel anlegen 
app.post('/article', (req, res) => {
    if (!req.body.hasOwnProperty('id')) {
        resolveBadRequest(res, 'Fehlende "id"-Eigenschaft');
    }
    if (!req.body.hasOwnProperty('name')) {
        resolveBadRequest(res, 'Fehlende "name"-Eigenschaft');
    }
    articles.push(req.body);
    res.statusCode = 200;
    res.json(req.body);
});
     
//REST-API: Bestimmten Artikel löschen
app.delete('/article/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        resolveBadRequest(res, 'Fehlende "id"-Eigenschaft');
    }
    const articleIndex = getArticleIndex(id);
    if (articleIndex !== -1) {
        articles.splice(articleIndex, 1);
        res.statusCode = 200;
        res.send(`${id} entfernt!`);
    } else {
        resolveNotFound(res, `${id} wurde nicht gefunden`);
    }
})  
    
//REST-API: Bestimmten Artikel aktualisieren
app.put('/article/:id', (req, res) => {
    const { id } = req.params;
    if (!req.body.hasOwnProperty('name')) {
        resolveBadRequest(res, 'Fehlende "name"-Eigenschaft')
    }
    const articleIndex = getArticleIndex(id)
    if (articleIndex !== -1) {
        articles.splice(articleIndex, 1, {...getArticle(id), name: req.body.name});
        res.statusCode = 200;
        res.send(`${id} name wurde aktualisiert`);
    } else {
        resolveNotFound(res, `${id} wurde nicht gefunden`);
    }
})

app.listen(port, () => {
    console.log('Running...');
});

function getArticleIndex(id) {
    return articles.findIndex((article) => article.id === id);
}

function getArticle(id) {
    return articles.find((article) => article.id === id);
}

function resolveNotFound(res, message) {
    res.statusCode = 404;
    res.send(message);
    res.end();
    return;
}

function resolveBadRequest(res, message) {
    res.statusCode = 400;
    res.send(message);
    res.end();
    return;
}