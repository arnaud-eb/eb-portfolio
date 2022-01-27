import { nextPage, prevPage } from "./utils";
import { initialState } from "./App";
import { ActionTypes } from "./types";

type IState = typeof initialState;

const reducer = (state: IState, action: ActionTypes): IState => {
  switch (action.type) {
    case "OPEN_INDEX":
      if (!state.onGoing && state.next !== action.payload) {
        return {
          ...state,
          isSidebarOpen: false,
          onGoing: true,
          next: action.payload,
          inClass:
            state.current > action.payload
              ? "rotateCubeBottomIn"
              : "rotateCubeTopIn",
          outClass:
            state.current > action.payload
              ? "rotateCubeBottomOut"
              : "rotateCubeTopOut",
        };
      }
      return state;
    case "TRANS":
      if (!state.onGoing) {
        if (action.payload.direction === "up") {
          return {
            ...state,
            isSidebarOpen: false,
            onGoing: true,
            next: prevPage(state.current),
            outClass: "rotateCubeBottomOut",
            inClass: "rotateCubeBottomIn",
          };
        } else {
          return {
            ...state,
            isSidebarOpen: false,
            onGoing: true,
            next: nextPage(state.current),
            outClass: "rotateCubeTopOut",
            inClass: "rotateCubeTopIn",
          };
        }
      }
      return state;
    case "RESET":
      return {
        ...state,
        current: state.next,
        outClass: "",
        inClass: "",
        onGoing: false,
      };
    case "SIDEBAR_OPEN":
      return { ...state, isSidebarOpen: true };
    case "SIDEBAR_CLOSE":
      return { ...state, isSidebarOpen: false };
    default:
      return state;
  }
};

export default reducer;
