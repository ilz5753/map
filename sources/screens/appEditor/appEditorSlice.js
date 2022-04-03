import { createSlice } from "@reduxjs/toolkit";
import { uuid } from "../../../styles";
let editor = createSlice({
  name: "editor",
  initialState: {
    data: {},
    activeData: {
      id: uuid(),
      name: "ROOT",
      device: "Mobile",
      path: "",
    },
  },
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload;
    },
    updateActiveData: (state, action) => {
      state.activeData = action.payload;
    },
  },
});
export let { updateActiveData, updateData } = editor.actions;
export let data = (state) => state.editor.data;
export let activeData = (state) => state.editor.activeData;
export default editor.reducer;
