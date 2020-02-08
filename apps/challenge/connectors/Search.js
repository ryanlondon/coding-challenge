import { connect } from "react-redux";
import { searchArtworksByTitle } from "../../../actions";

const mapDispatchToProps = dispatch => ({
  searchArtworksByTitle: text => dispatch(searchArtworksByTitle(text))
});

export default connect(null, mapDispatchToProps);
