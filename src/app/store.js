import { configureStore } from "@reduxjs/toolkit";
import intro from "../features/intro/introSlice";
import phone from "../features/phone/phoneSlice";
import app from "./appSlice";
let store = configureStore({
  reducer: {
    intro,
    app,
    phone,
  },
});
export default store;
