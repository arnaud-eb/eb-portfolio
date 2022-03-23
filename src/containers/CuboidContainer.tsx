import { connect } from "react-redux";

import Cuboid from "../components/Cuboid";

import { IState } from "../types";

const mapStateToProps = (state: IState) => ({
  current: state.current,
  next: state.next,
  outClass: state.outClass,
  inClass: state.inClass,
});

const CuboidContainer = connect(mapStateToProps)(Cuboid);

export default CuboidContainer;
