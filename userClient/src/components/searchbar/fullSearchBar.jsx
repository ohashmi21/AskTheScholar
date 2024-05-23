import { useState } from "react";

import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";
function FullSearchBar() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default FullSearchBar;