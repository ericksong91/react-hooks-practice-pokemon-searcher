import React from "react";

function Search({ onSearch, search }) {


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          placeholder="Search..."
          type="text"
          value={search}
          onChange={onSearch}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
