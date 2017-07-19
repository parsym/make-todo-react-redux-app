import { connect } from 'react-redux';
import App from '../components/App';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/todoActionCreators';

function mapStateToProps(state) {
  console.log("app container")
  console.log(state)
  return state
}
// const mapStateToProps = (state) => (state);

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
