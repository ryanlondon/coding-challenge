export const filterArtworksByTitle = (artworks = [], search) => {
  if (!search) return artworks;
  const upperCaseSearch = search.toUpperCase();
  return artworks.filter(
    artwork =>
      artwork.artworkTitle.toUpperCase().indexOf(upperCaseSearch) !== -1
  );
};

export const getFavoritesMapFromLocalStorage = () => {
  const favoritesString = localStorage.getItem("favorites") || "";
  return favoritesString.split(",").reduce((map, favorite) => {
    if (favorite) {
      map[favorite] = true;
    }
    return map;
  }, {});
};

export const writeFavoritesToLocalStorage = favoritesMap => {
  const favoritesArray = Object.keys(favoritesMap).reduce((array, favorite) => {
    if (favoritesMap[favorite] === true) {
      array.push(favorite);
    }
    return array;
  }, []);
  localStorage.setItem("favorites", favoritesArray.join(","));
};
