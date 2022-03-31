import React, { Fragment, useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea'

const AllArticles = ({history}) => {

    const [articles, setArticles] = useState([]);


    useEffect(() => {
        const getArticles = async () => {
            try {
                console.log("useEffect")
                const response = await fetch(`http://localhost:1001/articles/`)
                console.log(response)
                setArticles(await response.json())
            } catch (error) {
                console.log("error")
                console.log(error)
            }

        }; getArticles();
    }, [])



  return (
<Fragment>
      <div className="container text-center" id="allarticles">
        <h1 className="my-5">Alle Artikel</h1>
<Grid container spacing="2">
                {articles.length ? articles.map((article) => (
                    <Grid item xs="14" sm="4" md="3">
                      <CardActionArea
                      // className= {classes.card} 
                      //     component={RouterLink}
                      //     to={'/articles/${article.id}'}
                          >
<Card id={article.id} sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://cdn.mdr.de/ratgeber/fahrrad-reisen-104-resimage_v-variantBig16x9_w-1280.jpg?version=26444"
                          alt="Fahrrad"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {article.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          {article.beschreibung}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {article.startpreis}€
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          {article.startdatum}
                          </Typography>
                        </CardContent>
                        <CardActions>
                         
                          {/* <Button size="small">Share</Button> */}
                          <Button size="small">Genauer Ansehen</Button>
                        </CardActions>
                      </Card>
                      </CardActionArea>
                    </Grid>
                )): <p>Keine Artikel vorhanden</p>}
                </Grid>
      </div>
    </Fragment>
  );
}


// var startdatum = (article.startdatum);
// var date = new Date(startdatum);

//  startdatum = date.getTime();
// const miliseconds = date.getTime();
// const newMiliseconds = miliseconds + (900000);

// const newDate = new Date(newMiliseconds);
// const newTimestamp = newDate.toLocaleString();

// var timestamp = startdatum;
// var date2 = new Date(timestamp);
// timestamp = date.toLocaleString();


// let status = "DEMNÄCHST VERFÜGBAR!";
// let isSold ="";
// // const Verkauft = "VERKAUFT !";

// const jetzt = Date.now();

// const differenz = jetzt - startdatum;  // differenz zeit zwischen start und jezt

// //console.log (differenz);



// //console.log(jetzt);
// //console.log(timestamp);

// // wenn differenz zwischen jetzt und startpunkt des angebots länger als 15 min ist, wechselt Status zu : NICHT MEHR VERFÜGBAR
// if(differenz >= 900000) {
// status = "NICHT MEHR VERFÜGBAR";
// }


// // wenn differenz zwischen jetzt und startpunkt des Angebots zwieschen 0 und 15miin ist, wechselt status zu : VERFÜGBAR
//  if (differenz  > 0 && differenz < 900000) {
//     status = "VERFÜGBAR ";
//   }




// var diff2 = differenz;

// // Zeit in Sekunden zwischen jetzt und dem ende des angebots
// var timenew = Math.floor(differenz / 3600000 )+'h'+Math.floor((differenz / 60000 )/60)+'min'+Math.floor( (differenz % 1000) / 60 )+'sec.';
// var status2 = "";
// // status 2 gibt die Zeit in Minuten an seitdem das Produkt verfügbar ist
// //console.log(differenz);
// let isDisabled = true

// // wenn die differenz kleiner als 15minuten (900000 ms) ist button aktiv
// if (differenz < 900000){
//   isDisabled = false
//   isSold="";
//   // wenn differenz kleiner 0 ist button nicht aktiv
// }
// if (differenz < 0){
//   isDisabled = true
// }
// // wenn die differenz größer als 15 minuten ist button nicht aktiv
// if (differenz > 900000) {
//   isDisabled = true
// }
export default AllArticles

