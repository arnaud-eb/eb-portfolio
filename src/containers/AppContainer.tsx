import { connect } from "react-redux";

import App from "../components/App";

import { reset, moveUp, moveDown } from "../store/actions";
import { IState } from "../types";

const mapStateToProps = (state: IState) => ({
  next: state.next,
});

const mapDispatchToProps = {
  reset,
  moveUp,
  moveDown,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
