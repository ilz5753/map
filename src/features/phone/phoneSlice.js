import { createSlice } from "@reduxjs/toolkit";
let phone = createSlice({
  name: "phone",
  initialState: {
    nodes: {
      value: { id: "0", title: "Root" },
      children: [
        { value: { id: "1", title: "Welcome" }, children: [] },
        { value: { id: "2", title: "Auth" }, children: [] },
        { value: { id: "3", title: "Home" }, children: [] },
        { value: { id: "4", title: "Settings" }, children: [] },
      ],
    },
  },
  reducers: {
    updateNodes: (state, action) => {
      state.nodes = action.payload;
    },
  },
});
export let { updateNodes } = phone.actions;
export let nodes = (state) => state.phone.nodes;
export default phone.reducer;
