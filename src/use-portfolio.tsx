import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "./actions";
import { initialState } from "./reducer";

type IState = typeof initialState;

const usePortfolio = () => {
  const state = useSelector((state: IState) => state);
  const dispatch = useDispatch();
  const dispatchedActions = bindActionCreators(actions, dispatch);

  const handleOpenIndex = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    if (e.target.dataset.idx) {
      dispatchedActions.openIndex(+e.target.dataset.idx);
    }
  };
  return { ...state, ...dispatchedActions, handleOpenIndex };
};

export default usePortfolio;
