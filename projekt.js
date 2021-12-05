// local host starten
'use strict';

const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
server.listen(8080, () => {console.log('Server is listening on port 8080.');}); 

app.use(express.urlencoded({extended: true}));
app.use(express.json());


const articles = [];


const logger = (req, res, next) => {
    console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
    console.log('HTTP METHOD', req.method);
    console.log('HTTP BODY', req.body);
    console.log('URL PARAMETER', req.params);
    next();
}
app.use(logger);


//artikel definieren

app.get('/articles', (req, res) => {

    if (articles.length === 0) {
        resolveNotFound(res, 'Keine Artikel gefunden' )
    } else {
        res.statusCode = 200;
        res.json(articles);
        res.end();
    }    
  });

app.get('/article/:id', (req, res) => {
     const { id } = req.params;
     const article = getArticle(id);
    if (!article) {
           resolveNotFound(res, `${id} not found`)
    } else {
        res.statusCode = 200;
        res.json(article);
         res.end();
      }
 })  

 app.post('/article', (req, res) => {
    if (!req.body.hasOwnProperty('id')) {
        resolveBadRequest(res, 'Missing "id" property');
    }
    if (!req.body.hasOwnProperty('name')) {
        resolveBadRequest(res, 'Missing "name" property');
    }
    articles.push(req.body);
    res.statusCode = 200;
    res.json(req.body);
});
   /* app.post('/articles', (req, res) => {
   articles.push(req.body);
   res.statusCode = 200;
   res.json(req.body);
    
    }); 
    */
    
    app.put('/articles/:articleId', (req, res) => {
    
    return res.send(
    
    `PUT HTTP method on user/${req.params.userId} resource`,
    
    );
    
    });
    
    app.delete('/articles/:articleId', (req, res) => {
    
    return res.send(
    
    `DELETE HTTP method on user/${req.params.userId} resource`,
    
    );
    
    });
   
    

/* MIddleware: egal welche route , es funktioniert

app.use(req, res, next) => {

});

//logger
app.use(logger);

app.use(req, res, next)=> {

});
return res.send(Object.values(articles));
app.post
*/