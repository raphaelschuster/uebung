import React, { Fragment, useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function App() {

  const [name, setName] = useState("");
  const [articles, setArticles] = useState([]);
  const [open, setOpen] = React.useState(false);


  const [startpreis, setStartpreis] = useState("");
  const [id, setID] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  useEffect(() => {
    const getArticles = async () => {
        try {
            console.log("useEffect")
            const response = await fetch(`http://localhost:1001/articles/?name=`)
            console.log(response)
            setArticles(await response.json())
        } catch (error) {
            console.log("error")
            console.log(error)
        }
        
    }; getArticles();
}, [])

const onSubmitBid = async e => {
  e.preventDefault();
  try {
    console.log(e);
    const body = {
      id:id,
      startpreis:startpreis

    }
    const response = await fetch(`http://localhost:1001/articles/${id}`,{method:'PUT',headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
    
    setOpen(false)
    //const parseResponse = await response.json();

    //setArticles(parseResponse);
  } catch (err) {
    console.error(err.message);
  }
};

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:1001/articles/?name=${name}`);

      const parseResponse = await response.json();

      setArticles(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  return (


    
    <Fragment>
      <div className="container text-center">
        <h1 className="my-5">Artikelsuche</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
          <input
            type="text"
            name="name"
            placeholder="Artikel eingeben ..."
            className="Suchleiste"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button className="button">Suchen</button>
        </form>
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
                          Beschreibung: {article.beschreibung}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          aktueller Preis: {article.startpreis} EUR
                          </Typography>
                        </CardContent>
                        <CardActions>
                        
                            <Button variant="outlined" onClick={handleClickOpen}>
                              Auf den Artikel bieten
                            </Button>
                                  <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="Bieten"
                                    aria-describedby="Hier dein Gebot eingeben"
                                  >
                                    <DialogTitle id="alert-dialog-title">
                                      {"Jetzt auf den Artikel bieten"}
                                    </DialogTitle>
                                        <DialogContent>
                                        <form onSubmit={onSubmitForm}>
                                            <input
                                              type="text"
                                              name="name"
                                              placeholder="Neues Gebot"
                                              className="Bid"
                                              value={startpreis}
                                              onChange={e => setStartpreis(e.target.value)}
                                            />
                                            
                                            <input
                                              type="text"
                                              name="name"
                                              placeholder="Neues für Artikelnr"
                                              className="Bid"
                                              value={id}
                                              onChange={e => setID(e.target.value)}
                                            />
                                          </form>
                                        </DialogContent>
                                        <DialogActions>
                                          <Button onClick={handleClose}>Abbrechen</Button>
                                          <Button onClick={onSubmitBid} autoFocus>
                                            Gebot bestätigen
                                          </Button>
                                        </DialogActions>
                                          </Dialog>
      
                        </CardActions>
                        
                      </Card>
                    </Grid>
                )): <p>Keine Artikel vorhanden</p>}
                </Grid>
      </div>
        {articles.length === 0 && <p>Keine Artikel gefunden</p>}
      </div>
    </Fragment>
  );
}

export default App;

