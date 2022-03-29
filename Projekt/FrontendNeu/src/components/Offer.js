import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import React, {useState } from "react";
import data from "../yourdata"



const Offer = () => {
  const [name, setName] = useState("");
  const [beschreibung, setBeschreibung] = useState("");
  const [startprice, setStartprice] = useState("");
  const [bild, setBild] = useState("");

  
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      console.log(e);
      const body = {
        name:name,
        beschreibung:beschreibung,
        startprice:startprice,
        bild:bild
      }
      const response = await fetch(`http://localhost:1001/articles`,{method:'POST',headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
      

      //const parseResponse = await response.json();

      //setArticles(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  return (
    <div className="section" id="offer">
      <div className="container">
        <div className="offer-wrapper">
          <Fade bottom>
            <h2>Artikel anbieten</h2>
          </Fade>

          
          <form onSubmit={onSubmitForm}>
          <input
            type="text"
            name="name"
            placeholder="Artikel eingeben ..."
            className="Suchleiste"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            name="name"
            placeholder="Beschreibung"
            className="Suchleiste"
            value={beschreibung}
            onChange={e => setBeschreibung(e.target.value)}
          />
          <input
            type="text"
            name="name"
            placeholder="Startpreis"
            className="Suchleiste"
            value={startprice}
            onChange={e => setStartprice(e.target.value)}
          />
          <input
            type="text"
            name="name"
            placeholder="Bildtext"
            className="Suchleiste"
            value={bild}
            onChange={e => setBild(e.target.value)}
          />
          <button className="button">Suchen</button>
          {/* <div className="uuid">
            <label for="Einzigartige ID">Einzigartige ID </label>
            <input type="number" placeholder="Einzigartige ID" name="uuid" id="uuid"  />
          </div>

          <div className="title">
            <label for="title">Titel</label>
            <input type="title" placeholder="Titel" name="title" id="title"  />
          </div>

          <div className="start_price">
            <label for="start_price">Startpreis</label>
            <input type="number" step="0.5" placeholder="Startpreis" name="start_price" id="start_price"  />
          </div>

          <div className="description">
            <label for="description">Artikelbeschreibung</label>
            <textarea name="description" placeholder="Beschreibung" cols="30" rows="5" id="description" > </textarea>
          </div>

          <div className="timeslot">
            <label for="timeslot">Zeitraum (Datum und Uhrzeit)</label>
            <input type="datetime-local" name="timeslot" id="timeslot"  />
          </div>          

          <div className="submit">
            <input type="submit" />
          </div> */}

          </form>
        </div>
      </div>
     </div>
  )
}

export default Offer
