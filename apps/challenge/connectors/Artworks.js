import { connect } from "react-redux";
import { filterArtworksByTitle } from "../../../helpers";
import { fetchArtworksData } from "../../../actions";

const mapStateToProps = ({ artworks, search }) => ({
  artworks: filterArtworksByTitle(artworks, search)
});

const mapDispatchToProps = dispatch => ({
  fetchArtworksData: () => dispatch(fetchArtworksData())
});

export default connect(mapStateToProps, mapDispatchToProps);
