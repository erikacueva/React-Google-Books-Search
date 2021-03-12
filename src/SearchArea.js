// this component contains the search box and button

import React from "react";

const SearchArea = (props) => {
   

  return (
    <div className="search-area">
      <form onSubmit={props.searchBookMethod} action="">
        <input onChange={props.handleSearch} type="text" />
        <button type="submit">Search</button>
      </form>
    </div> 
  );
};

export default SearchArea;
