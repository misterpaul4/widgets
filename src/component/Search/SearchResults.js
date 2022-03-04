import React from "react";

const SearchResults = ({
  searchResult
}) => {

  const renderSearchResults = searchResult.map(item => {
  return (
    <a target="_blank" href={`https://en.wikipedia.org?curid=${item.pageid}`} className="search-result-card" key={item.pageid} rel="noreferrer">
      <div className="ui message">
        <div className="header">
          {item.title}
        </div>
        <p dangerouslySetInnerHTML={{__html: item.snippet}}></p>
      </div>
    </a>
    )
  });

  return (
    <div className="search-result">
      {renderSearchResults}
    </div>
  );
}

export default SearchResults;
