import { connect } from "react-redux";
import { toggleFavorite } from "../../../actions";

const mapStateToProps = ({ favorites }, { data }) => ({
  isFavorited: favorites[data.artId] === true
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: artId => dispatch(toggleFavorite(artId))
});

export default connect(mapStateToProps, mapDispatchToProps);
