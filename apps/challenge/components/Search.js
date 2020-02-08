/*
 * You can EDIT this FILE
 */

import React from "react";
import SearchConnector from "../connectors/Search";
import { Search, SVG, Input, Mag } from "./styles";

export default SearchConnector(({ searchArtworksByTitle }) => {
  const handleSearchKeyUp = event => {
    searchArtworksByTitle(event.target.value);
  };

  return (
    <Search>
      <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8">
        <g fill="none" fillRule="evenodd" stroke="#333" strokeLinecap="square">
          <path d="M1 0l7.071 7.071M8.5 7.5l7-7" />
        </g>
      </SVG>

      <Input
        type="text"
        placeholder="Search Artworks"
        onKeyUp={handleSearchKeyUp}
      />

      <Mag src="/img/mag.svg" />
    </Search>
  );
});
