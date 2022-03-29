import { createSlice } from "@reduxjs/toolkit";

import { RootState } from ".";

interface CuboidState {
  current: number;
  next: number;
  outClass: "" | "rotateCubeBottomOut" | "rotateCubeTopOut";
  inClass: "" | "rotateCubeBottomIn" | "rotateCubeTopIn";
  onGoing: boolean;
}

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
  reducers: {},
});

export const selectCuboid = (state: RootState) => state.cuboid;

export default cuboidSlice.reducer;
