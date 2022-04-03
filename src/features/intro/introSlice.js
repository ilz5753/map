import { createSlice } from "@reduxjs/toolkit";
let intro = createSlice({
  name: "intro",
  initialState: {
    type: '',
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});
export let { setType } = intro.actions;
export let type = (state) => state.intro.type;
export default intro.reducer;
