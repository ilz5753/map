import { createSlice } from "@reduxjs/toolkit";
let apps = createSlice({
  name: "apps",
  initialState: {
    appsList: [],
    activeApp: {},
  },
  reducers: {
    addApp: (state, action) => {
      state.appsList.push(action.payload);
    },
    updateApp: (state, action) => {
      let { id, data } = action.payload;
      state.appsList = state.appsList.map((al) => {
        if (al?.id === id) return { ...data, id };
        return al;
      });
    },
    deleteApp: (state, action) => {
      let { id } = action.payload;
      state.appsList = state.appsList.filter((al) => al?.id !== id);
    },
    updateActiveApp: (state, action) => {
      state.activeApp = action.payload;
    },
  },
});
export let { addApp, updateApp, deleteApp, updateActiveApp } = apps.actions;
export let appsList = (state) => state.apps.appsList;
export let activeApp = (state) => state.apps.activeApp;
export default apps.reducer;
