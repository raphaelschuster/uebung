import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <div className="searchpage-wrapper">
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Suche Artikel"}
     onChange={(e) => setKeyword(e.target.value)}
    />
    </div>
  );
}

export default SearchBar