import React, { Fragment, useState } from "react";



function App() {
  const [name, setName] = useState("");
  const [articles, setArticles] = useState([]);

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
        <table className="table my-5">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {articles.map(articles => (
              <tr key={articles.id}>
                <td>{articles.name}</td>
                <td>{articles.preis}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {articles.length === 0 && <p>Keine Artikel gefunden</p>}
      </div>
    </Fragment>
  );
}

export default App;

