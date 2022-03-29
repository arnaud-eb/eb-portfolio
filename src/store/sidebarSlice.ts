import { createSlice } from "@reduxjs/toolkit";

import { RootState } from ".";

interface SidebarState {
  isSidebarOpen: boolean;
}

const initialState: SidebarState = {
  isSidebarOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {},
});

export const selectSidebar = (state: RootState) => state.sidebar.isSidebarOpen;

export default sidebarSlice.reducer;
