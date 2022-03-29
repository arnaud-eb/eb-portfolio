import { createSlice } from "@reduxjs/toolkit";

import { RootState } from ".";
import { moveDown, moveUp, openIndex } from "./cuboidSlice";

interface SidebarState {
  isSidebarOpen: boolean;
}

const initialState: SidebarState = {
  isSidebarOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(moveUp, (state) => {
        state.isSidebarOpen = false;
      })
      .addCase(moveDown, (state) => {
        state.isSidebarOpen = false;
      })
      .addCase(openIndex, (state) => {
        state.isSidebarOpen = false;
      });
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export const selectSidebar = (state: RootState) => state.sidebar.isSidebarOpen;

export default sidebarSlice.reducer;
