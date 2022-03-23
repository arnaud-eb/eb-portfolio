import { connect } from "react-redux";

import Bullets from "../components/Bullets";

import { IState } from "../types";
import { AppDispatch } from "../store";
import { openIndex } from "../store/actions";

const mapStateToProps = (state: IState) => ({
  next: state.next,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  openIndex: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    dispatch(openIndex(+(e.target as HTMLElement).dataset.idx!));
  },
});

const BulletsContainer = connect(mapStateToProps, mapDispatchToProps)(Bullets);

export default BulletsContainer;
