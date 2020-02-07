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
