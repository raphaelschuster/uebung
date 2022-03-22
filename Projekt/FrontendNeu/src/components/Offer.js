import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Offer = () => {
  return (
    <div className="section" id="offer">
      <div className="container">
        <div className="offer-wrapper">
          <Fade bottom>
            <h1>Artikel anbieten</h1>
          </Fade>

          
          <form action="/article" method="Post">
          <div className="uuid">
            <label for="Einzigartige ID">Einzigartige ID </label>
            <input type="number" placeholder="Einzigartige ID" name="uuid" id="uuid" required />
          </div>

          <div className="title">
            <label for="title">Titel</label>
            <input type="title" placeholder="Titel" name="title" id="title" required />
          </div>

          <div className="start_price">
            <label for="start_price">Startpreis</label>
            <input type="number" step="0.5" placeholder="Startpreis" name="start_price" id="start_price" required />
          </div>

          <div className="description">
            <label for="description">Artikelbeschreibung</label>
            <textarea name="description" placeholder="Beschreibung" cols="30" rows="5" id="description" required> </textarea>
          </div>

          <div className="timeslot">
            <label for="timeslot">Zeitraum (Datum und Uhrzeit)</label>
            <input type="datetime-local" name="timeslot" id="timeslot" required />
          </div>          

          <div className="submit">
            <input type="submit" value="Create article" />
          </div>

          </form>
        </div>
      </div>
     </div>
  )
}

export default Offer
