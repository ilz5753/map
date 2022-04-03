import { A210, A211 } from "./a";

let C0 = A211({
  name: "_",
  initialState: {
    a000: null,
    a001: null,
    a002: null,
    a003: null,
  },
  reducers: {
    A000(a000, { payload }) {
      a000.a000 = payload;
    },
    A001(a001, { payload }) {
      a001.a001 = payload;
    },
    A002(a002, { payload }) {
      a002.a002 = payload;
    },
    A003(a003, { payload }) {
      a003.a003 = payload;
    },
  },
});
export let C1 = A210({
  reducer: {
    _: C0.reducer,
  },
});
export let { A000, A001, A002, A003 } = C0.actions;
export let C2 = ({ _: { a000 } }) => a000,
  C3 = ({ _: { a001 } }) => a001,
  C4 = ({ _: { a002 } }) => a002,
  C5 = ({ _: { a003 } }) => a003;
