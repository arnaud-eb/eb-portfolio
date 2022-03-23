import { connect } from "react-redux";

import Navbar from "../components/Navbar";

import { IState } from "../types";
import { openSidebar, openIndex } from "../store/actions";
import { AppDispatch } from "../store";
// import { handleOpenIndex } from "../utils";

const mapStateToProps = (state: IState) => ({
  next: state.next,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    openSidebar: () => dispatch(openSidebar()),
    openIndex: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      dispatch(openIndex(+(e.target as HTMLElement).dataset.idx!));
    },
    // (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // if (!(e.target instanceof HTMLElement)) {
    //   return;
    // }
    // if (e.target.dataset.idx) {
    //   dispatch(openIndex(+e.target.dataset.idx));
    // }
    // },
  };
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
