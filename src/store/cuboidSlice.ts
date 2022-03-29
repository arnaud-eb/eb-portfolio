import { createSlice } from "@reduxjs/toolkit";

import { RootState } from ".";
import { nextPage, prevPage } from "../utils";

interface CuboidState {
  current: number;
  next: number;
  outClass: "" | "rotateCubeBottomOut" | "rotateCubeTopOut";
  inClass: "" | "rotateCubeBottomIn" | "rotateCubeTopIn";
  onGoing: boolean;
}

export type IProps = Pick<CuboidState, "next">;

const initialState: CuboidState = {
  current: 1,
  next: 1,
  outClass: "",
  inClass: "",
  onGoing: false,
};

export const cuboidSlice = createSlice({
  name: "cuboid",
  initialState,
  reducers: {
    moveUp: (state) => {
      if (!state.onGoing) {
        state.onGoing = true;
        state.next = prevPage(state.current);
        state.outClass = "rotateCubeBottomOut";
        state.inClass = "rotateCubeBottomIn";
      }
    },
    moveDown: (state) => {
      if (!state.onGoing) {
        state.onGoing = true;
        state.next = nextPage(state.current);
        state.outClass = "rotateCubeTopOut";
        state.inClass = "rotateCubeTopIn";
      }
    },
    reset: (state) => {
      state.current = state.next;
      state.outClass = "";
      state.inClass = "";
      state.onGoing = false;
    },
    openIndex: (state, action) => {
      if (!state.onGoing && state.next !== action.payload) {
        state.onGoing = true;
        state.next = action.payload;
        state.inClass =
          state.current > action.payload
            ? "rotateCubeBottomIn"
            : "rotateCubeTopIn";
        state.outClass =
          state.current > action.payload
            ? "rotateCubeBottomOut"
            : "rotateCubeTopOut";
      }
    },
  },
});

export const { moveUp, moveDown, reset, openIndex } = cuboidSlice.actions;

export const selectCuboid = (state: RootState) => state.cuboid;

export default cuboidSlice.reducer;
