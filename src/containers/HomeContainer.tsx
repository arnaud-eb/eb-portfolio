import { connect } from "react-redux";

import { Home } from "../pages";

import { AppDispatch } from "../store";
import { openIndex } from "../store/actions";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  openIndex: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    dispatch(openIndex(+(e.target as HTMLElement).dataset.idx!));
  },
});

const HomeContainer = connect(null, mapDispatchToProps)(Home);

export default HomeContainer;
