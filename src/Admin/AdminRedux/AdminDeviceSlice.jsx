import { createSlice } from "@reduxjs/toolkit";




export const AdminDeviceSlice = createSlice({
  name : "AdminDevice",
  initialState : {
    selectedSideBarTab : 0,
    isSidebarOpen : true,
  },
  reducers : {
    SET_SELECTED_SIDEBAR_TAB : (state, action) => {
      state.selectedSideBarTab = action.payload;
    },
    TOGGLE_SIDEBAR : (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
  },
})

export const {SET_SELECTED_SIDEBAR_TAB, TOGGLE_SIDEBAR} = AdminDeviceSlice.actions;

export default AdminDeviceSlice.reducer;