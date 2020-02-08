import { connect } from "react-redux";
import { filterArtworksByTitle } from "../../../helpers";
import { fetchArtworksData, fetchFavoritesData } from "../../../actions";

const mapStateToProps = ({ artworks, search }) => ({
  artworks: filterArtworksByTitle(artworks, search)
});

const mapDispatchToProps = dispatch => ({
  fetchArtworksData: () => dispatch(fetchArtworksData()),
  fetchFavoritesData: () => dispatch(fetchFavoritesData())
});

export default connect(mapStateToProps, mapDispatchToProps);
