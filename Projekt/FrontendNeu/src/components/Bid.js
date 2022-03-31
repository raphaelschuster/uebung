// import Card from "./atoms/Card"
// import Fade from "react-reveal/Fade"
// import React, {useState } from "react";
// import data from "../yourdata"



// const Bid = () => {

//   const [startpreis, setStartpreis] = useState("");
//   const [id, setID] = useState(""); //vom Artikel die ID nehmen


  
//   const onSubmitForm = async e => {
//     e.preventDefault();
//     try {
//       console.log(e);
//       const body = {
//         id:id,
//         startpreis:startpreis

//       }
//       const response = await fetch(`http://localhost:1001/articles/${id}`,{method:'PUT',headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
      

//       //const parseResponse = await response.json();

//       //setArticles(parseResponse);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
  
//   return (
//     <div className="section" id="bid">
//       <div className="container">
//         <div className="offer-wrapper">
//           <Fade bottom>
//             <h2>Gebot abgeben</h2>
//           </Fade>

          
//           <form onSubmit={onSubmitForm}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Neues Gebot"
//             className="Bid"
//             value={startpreis}
//             onChange={e => setStartpreis(e.target.value)}
//           />
          
//           <input
//             type="text"
//             name="name"
//             placeholder="Neues für Artikelnr"
//             className="Bid"
//             value={id}
//             onChange={e => setID(e.target.value)}
//           />
        
//           <button className="button">Gebot abgeben</button>
          
//           </form>
//         </div>
//       </div>
//      </div>
//   )
// }

// export default Bid