import { connect } from 'react-redux';
import { actionFetchSpecie } from 'redux-flow/actions/Specie';
import Details from 'components/Details';

const mapStateToProps = state => ({
  details: state.details,
  specie: state.specie,
});

const mapDispatchToProps = dispatch => ({
  fetchSpecie: params => dispatch(actionFetchSpecie(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
