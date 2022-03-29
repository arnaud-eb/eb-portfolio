import { configureStore } from "@reduxjs/toolkit";

import CuboidReducer from "./cuboidSlice";
import sidebarReducer from "./sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    cuboid: CuboidReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
