import { useTheme } from "@react-navigation/native";
import * as React from "react";
import * as RN from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "../esse/nav";
import Apps from "./screens/apps/apps";
import AppTree from "./screens/appTree/aTree";
import AppEditor from "./screens/appEditor/appEditor";
import Run from "./screens/run/run";
import Test from "./test";

let SM = () => {
  let s = {
    navigatorOptions: {
      // initialRouteName: "test",
      screenOptions: {
        // headerMode: "float",
        // presentation: "modal",
        headerShown: false,
        // gestureEnabled: false,
      },
    },
    data: [
      {
        name: "apps",
        component: Apps,
        options: {},
      },
      {
        name: "appTree",
        component: AppTree,
        options: {},
      },
      {
        name: "appEditor",
        component: AppEditor,
        options: {},
      },
      {
        name: "run",
        component: Run,
        options: {},
      },
      {
        name: "test",
        component: Test,
        options: {},
      },
    ],
  };
  //   let { dark } = useTheme();
  return <Stack {...s} />;
};
export default SM;
