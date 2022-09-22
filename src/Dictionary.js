import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001719f82c1a95d49beb3471ca302a51236";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="search-bar">
        <h1>Dictionary</h1>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word..."
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">E.g: yoga, happy, rainbow, ocean...</div>
      </section>
      <Results results={results} />
    </div>
  );
}
