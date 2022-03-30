import React, { Fragment, useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

const Article = ({history}) => {

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
      <div className="container text-center">
        <h1 className="my-5">Alle Artikel</h1>
<Grid container spacing="2">
                {articles.length ? articles.map((article) => (
                    <Grid item xs="14" sm="4" md="3">
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
                        </CardContent>
                        <CardActions>
                          {/* <Button size="small">Share</Button> */}
                          <Button size="small">Genauer Ansehen</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                )): <p>Keine Artikel vorhanden</p>}
                </Grid>
      </div>
    </Fragment>
  );
}

export default Article