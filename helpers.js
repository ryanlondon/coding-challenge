export const filterArtworksByTitle = (artworks = [], search) => {
  if (!search) return artworks;
  const upperCaseSearch = search.toUpperCase();
  return artworks.filter(
    artwork =>
      artwork.artworkTitle.toUpperCase().indexOf(upperCaseSearch) !== -1
  );
};
