
import Fade from "react-reveal/Fade"
import React, {useState } from "react";
import ReactDOM from 'react-dom';
 
import FileBase64 from 'react-file-base64';



const Offer = () => {
  const [name, setName] = useState("");
  const [beschreibung, setBeschreibung] = useState("");
  const [startpreis, setStartpreis] = useState("");
  const [image, setImage] = useState("");
  const [startdatum, setStartdatum] = useState("")
  
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      console.log(e);
      const body = {
        name:name,
        beschreibung:beschreibung,
        startpreis:startpreis,
        bild: image,
        startdatum:startdatum

      }
      const response = await fetch(`http://localhost:1001/articles`,{method:'POST',headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
      

     
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
            placeholder="Artikelname eingeben"
            className="Suchleiste"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <textarea
            type="text"
            name="name"
            placeholder="Beschreibung des Artikels"
            className="beschreibung"
            value={beschreibung}
            onChange={e => setBeschreibung(e.target.value)}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Startpreis"
            className="Suchleiste"
            value={startpreis}
            onChange={e => setStartpreis(e.target.value)}
            required
          />
          
            <input
            type="datetime-local"
            name="startdatum"
            placeholder="Startdatum"
            className="Suchleiste"
            value={startdatum}
            onChange={e => setStartdatum(e.target.value)}
            required
          />
          <FileBase64 multiple="false" type="image" onDone={(base64)=> setImage(base64)}/>

          
          <button className="button">Erstellen</button>
        

          </form>
        </div>
      </div>
     </div>
  )
}

export default Offer