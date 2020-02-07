import { connect } from "react-redux";
import { fetchArtworksData } from "../../../actions";

const mapStateToProps = ({ artworks }) => ({
  artworks
});

const mapDispatchToProps = dispatch => ({
  fetchArtworksData: () => dispatch(fetchArtworksData())
});

export default connect(mapStateToProps, mapDispatchToProps);
