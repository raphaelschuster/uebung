import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CountryList from './CountryList';


const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  //Hier Fehler zieht falsche Daten
  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setCountryList(data) 
         setCountryListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCountryList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <div className="searchpage-wrapper">
    <>
      <h1>Artikelliste</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <CountryList countryList={countryList}/>
    </>
    </div>
   );
}

export default SearchPage