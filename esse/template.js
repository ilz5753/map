import { useTheme } from "@react-navigation/native";
import * as React from "react";
import * as RN from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  bw1,
  height,
  margin,
  margin_top,
  padding,
  root,
  Root,
  width,
} from "../styles";
import { View, Text, ROOT, ScrollView, Sheet, SHEET } from "./components";
import { IOSHeader, MainHeader } from "./navHeader";
export let Template = ({ header, sheets, children }) => {
  let [Is, sIs] = React.useState(false);
  let hh = header.headerHeight;
  let { dark } = useTheme();
  let onScroll = (e) => sIs(e.nativeEvent.contentOffset.y > hh);
  return (
    <View style={[Root]}>
      <MainHeader Is={Is} {...header} />
      <ScrollView
        style={[margin("hb", hh / 3)]}
        scrollEventThrottle={10}
        onScroll={onScroll}
        nestedScrollEnabled
      >
        {header.isShown && <IOSHeader {...header} />}
        {children}
      </ScrollView>
      <StatusBar style={dark ? "light" : "dark"} />
      {sheets?.map((sheet, i) => (
        <SHEET key={i} {...sheet} />
      ))}
    </View>
  );
};
