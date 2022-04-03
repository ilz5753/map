import { useTheme } from "@react-navigation/native";
import * as React from "react";
import * as RN from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "../esse/nav";
import Intro from "./features/intro/intro";
import SP from "./features/intro/sp";
import Phone from "./features/phone/phone";
import Desktop from "./features/desktop/desktop";
import LetsGo from "./features/letsgo/letsGo";
import AppEditor from "./features/app/app";
import { Button, View } from "../esse/components";
import Home from "./features/app/app";

let SM = () => {
  let s = {
    navigatorOptions: {
      // initialRouteName: "sinfo",
      screenOptions: {
        // headerMode: "float",
        // presentation: "modal",
        headerShown: false,
        // gestureEnabled: false,
      },
    },
    data: [
      {
        name: "sinfo",
        component: Home,
        options: {},
      },
      {
        name: "letsgo",
        component: LetsGo,
        options: {},
      },
      {
        name: "appEditor",
        component: AppEditor,
        options: {},
      },
      {
        name: "intro",
        component: Intro,
        options: {},
      },
      {
        name: "sp",
        component: SP,
        options: {
          presentation: "modal",
          gestureEnabled: true,
        },
      },
      {
        name: "phone",
        component: Phone,
        options: {},
      },
      {
        name: "desktop",
        component: Desktop,
        options: {},
      },
    ],
  };
  let { dark } = useTheme();
  return (
    <>
      <StatusBar style={dark ? "light" : "dark"} />
      <Stack {...s} />
    </>
  );
};
export default SM;
