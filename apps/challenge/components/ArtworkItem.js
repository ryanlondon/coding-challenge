/*
 * You can EDIT this FILE
 */

import React from "react";
import ArtworkItemConnector from "../connectors/ArtworkItem";

import {
  ArtworkItem,
  Column,
  Favicon,
  ImageWrapper,
  Info,
  Row,
  SubText,
  Title
} from "./styles/artworkItem";

export default ArtworkItemConnector(({ data, isFavorited, toggleFavorite }) => {
  if (!data) {
    return <p>Please set ArtworkItems into a attribute of `data`</p>;
  }
  const {
    artId,
    artworkTitle,
    artworkUrl,
    imageUrl,
    profileUrl,
    subject,
    artist,
    dimensions,
    category,
    product
  } = data;

  const handleFavoriteClick = () => {
    toggleFavorite(artId);
  };

  return (
    <ArtworkItem>
      <ImageWrapper>
        <img src={imageUrl} />
        <Favicon
          onClick={handleFavoriteClick}
          isFavorited={isFavorited}
          className="fa fa-heart"
        />
      </ImageWrapper>
      <Info>
        <Title>
          <a href={artworkUrl}>{artworkTitle}</a>
        </Title>

        <SubText>
          {category}, {dimensions.width}W x {dimensions.height}H x{" "}
          {dimensions.depth}cm
        </SubText>

        <Row>
          <Column>
            <Title>
              <a href={artist.profileUrl}>
                {artist.firstName} {artist.lastName}
              </a>
            </Title>
            <SubText>{artist.country}</SubText>
          </Column>

          <Column right>
            {product.originalStatus === "avail" && (
              <Title>${(product.originalPrice / 100).toLocaleString()}</Title>
            )}
            <div>
              {product.printsAvailable && (
                <span>Prints from ${product.printsPrice.toLocaleString()}</span>
              )}
            </div>
          </Column>
        </Row>
      </Info>
    </ArtworkItem>
  );
});
