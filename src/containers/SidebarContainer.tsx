import { connect } from "react-redux";

import Sidebar from "../components/Sidebar";

import { closeSidebar, openIndex } from "../store/actions";
import { IState } from "../types";
import { AppDispatch } from "../store";

const mapStateToProps = (state: IState) => ({
  next: state.next,
  isSidebarOpen: state.isSidebarOpen,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    closeSidebar: () => dispatch(closeSidebar()),
    openIndex: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      dispatch(openIndex(+(e.target as HTMLElement).dataset.idx!));
    },
  };
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
