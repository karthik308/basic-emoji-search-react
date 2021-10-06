import React from "react";
import "./SearchInput.css";

function SearchInput(props) {

  function handleChange(e) {
    props.textChange(e);
  }

  return (
    <div className="search-input-component">
      <div>
        <input placeholder="search" onChange={handleChange}/>
      </div>
    </div>
  );
}

export default SearchInput;