import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchResult, updateSearchResult] = useState(null);
  const [searchTerm, updateSearchTerm] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get('https://en.wikipedia.org/w/api.php', 
      {params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: searchTerm
      }});

      updateSearchResult(response.data.query.search);
    };

    const delayID = setTimeout(() => {
      if (searchTerm) { fetchAPI() }
      else { updateSearchResult(null) }
    }, 800);

    return () => clearTimeout(delayID);

  }, [searchTerm]);

  const renderSearchResults = searchResult ? <SearchResults searchResult={searchResult} /> : null;

  const loading = (!searchResult && searchTerm) ? 
    <div className="ui segment expand top-space-2">
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
    </div>
    : null

  return (
    <div>
      <h1 className="text-center">WIKIPEDIA</h1>
      <SearchBar searchTerm={searchTerm} handleInputChange={updateSearchTerm} />
  
      {loading}
      {renderSearchResults}
    </div>
  );
};

export default Search;
