import { connect } from "react-redux";

import Footer from "../components/Footer";

import { IState } from "../types";
import { AppDispatch } from "../store";
import { moveUp, moveDown } from "../store/actions";

const mapStateToProps = ({ next }: Pick<IState, "next">) => ({
  next,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  moveDown: () => dispatch(moveDown()),
  moveUp: () => dispatch(moveUp()),
});

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer;
