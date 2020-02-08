/*
 * You can EDIT this FILE
 */

import React, { useEffect } from "react";
import ArtworksConnector from "../connectors/Artworks";
import { ArtworkList, ListItems } from "./styles";
import ArtworkItem from "./ArtworkItem";

export default ArtworksConnector(
  ({ artworks, fetchArtworksData, fetchFavoritesData }) => {
    useEffect(() => {
      fetchArtworksData();
      fetchFavoritesData();
    }, []);

    return (
      <ArtworkList>
        <h1>Original Art for Sale</h1>
        <span>{`(${artworks ? artworks.length : 0} Artworks)`}</span>
        <ListItems>
          {artworks &&
            artworks.map(artwork => (
              <ArtworkItem key={artwork.artId} data={artwork} />
            ))}
        </ListItems>
      </ArtworkList>
    );
  }
);
