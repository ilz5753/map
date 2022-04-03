import { createSlice } from "@reduxjs/toolkit";

let _ = createSlice({
  name: "_",
  initialState: {
    a: null,
    b: null,
  },
  reducers: {
    a_(s, { payload }) {
      s.b = payload;
    },
    b_(s, { payload }) {
      s.a = payload;
    },
  },
});
export default _.reducer;
export let { a_, b_ } = _.actions;
export let _a = ({ _: { a } }) => a;
export let _b = ({ _: { b } }) => b;
