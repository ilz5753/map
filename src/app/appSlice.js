import { createSlice } from "@reduxjs/toolkit";
let app = createSlice({
  name: "app",
  initialState: {
    apps: [
      {
        id: "first",
        name: "test",
        type: "Educational",
      },
    ],
    activeApp: {},
  },
  reducers: {
    addApp: (state, action) => {
      let { payload } = action;
      state.apps.push(payload);
      state.activeApp = payload;
    },
    delApp: (state, action) => {
      let { id } = action.payload;
      state.apps = state.apps.filter((a) => a?.id !== id);
    },
    updateApp: (state, action) => {
      let { payload } = action;
      let napps = state.apps.map((a) => {
        return a?.id === payload?.id ? payload : a;
      });
      state.apps = napps;
    },
    updateActiveApp: (state, action) => {
      let { payload } = action;
      state.activeApp = payload;
    },
  },
});
export let { addApp, updateApp, delApp, updateActiveApp } = app.actions;
export let apps = (state) => state.app.apps;
export let activeApp = (state) => state.app.activeApp;
export default app.reducer;
