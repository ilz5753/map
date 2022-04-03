import { configureStore } from "@reduxjs/toolkit";
import apps from "./screens/apps/appsSlice";
import editor from "./screens/appEditor/appEditorSlice";
import appTree from "./screens/appTree/appTreeSlice";
import sm from "./smSlice";
let store = configureStore({
  reducer: {
    sm,
    apps,
    appTree,
    editor,
  },
});
export default store;
