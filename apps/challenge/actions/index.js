import * as helpers from "./helpers";

export const fetchArtworksData = () => async dispatch => {
  const url = `${process.env.APP_DOMAIN}/api/data`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data && data.success) {
      dispatch({ type: "SET_ARTWORKS_DATA", payload: data.payload });
    }
  } catch (err) {
    console.error("Error while fetching artworks data:", err.message);
  }
};

export const searchArtworksByTitle = searchText => ({
  type: "SEARCH_ARTWORKS_BY_TITLE",
  payload: searchText
});

export const fetchFavoritesData = () => async dispatch => {
  const favoritesMap = helpers.getFavoritesMapFromLocalStorage();
  dispatch({
    type: "SET_FAVORITES_DATA",
    payload: favoritesMap
  });
};

export const toggleFavorite = artId => ({
  type: "TOGGLE_FAVORITE",
  payload: artId
});
