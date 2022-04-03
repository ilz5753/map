import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { a, b } from "../../a";
let { width, height } = a;
// export let A = createAsyncThunk(
//   "T",
//   async (a) =>
//     await fetch(`${a}/${width}/${height}/${b}`).then((a) => a.json()),
// );
let B = createSlice({
  name: "B",
  initialState: {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  reducers: {
    aa: (a, { payload }) => {
      a.a = payload;
    },
    ab: (a, { payload }) => {
      a.b = payload;
    },
    ac: (a, { payload }) => {
      a.c = payload;
    },
    ad: (a, { payload }) => {
      a.d = payload;
    },
    ae: (a, { payload }) => {
      a.e = payload;
    },
  },
  // extraReducers: (b) => {
  //   b.addCase(A.pending, (a) => {
  //     a.a = "a";
  //   });
  //   b.addCase(A.fulfilled, (a, { payload }) => {
  //     let { b, c } = payload;
  //     console.log(b);
  //     console.log(c);
  //     a.a = null;
  //     a.d = [b];
  //     a.e = c;
  //   });
  //   b.addCase(A.rejected, (a) => {
  //     a.a = null;
  //     a.b = "b";
  //   });
  // },
});
export default B.reducer;
export let { aa, ab, ac, ad, ae } = B.actions;
export let _a = ({ B }) => B.a;
export let _b = ({ B }) => B.b;
export let _c = ({ B }) => B.c;
export let _d = ({ B }) => B.d;
export let _e = ({ B }) => B.e;
