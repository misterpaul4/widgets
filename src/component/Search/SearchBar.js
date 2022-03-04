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
      <div className="ui form">
        <div className="field">
          <br></br>
          <input onChange={onInputChange} value={searchTerm} type='search' placeholder="search here"></input>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
