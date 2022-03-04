import React from "react";

const SearchBar = ({
  handleInputChange,
  searchTerm
}) => {

  const onInputChange = e => {
    handleInputChange(e.target.value);
  }

  return (
    <div>
      <label htmlFor="search">Enter Text</label> <br></br>
      <div className="ui input top-space">
        <input id="search" onChange={onInputChange} value={searchTerm} type='search' placeholder="Hi there..."></input>
      </div>
    </div>
  );
}

export default SearchBar;
