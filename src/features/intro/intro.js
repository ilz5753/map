import { useNavigation, useTheme } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import * as React from "react";
import * as RN from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Grid,
  IOSRow,
  ROOT,
  Text,
  View,
} from "../../../esse/components";
import { Template } from "../../../esse/template";
import {
  backgroundColor,
  bgct,
  black,
  border,
  borderColor,
  borderRadius,
  bw1,
  dim,
  display,
  flex_direction,
  fontSize,
  height,
  hexToRGB,
  light_placeholder,
  margin,
  margin_top,
  padding,
  tr,
  white,
  width,
} from "../../../styles";
import { type, setType } from "./introSlice";

let RenderIntro = ({ text, icon, w }) => {
  let { navigate } = useNavigation();
  let dis = useDispatch();
  let goto = () => {
    dis(setType(text));
    navigate("sp");
  };
  return (
    <View
      style={[width(w), height(w), margin("v", 12.5), borderRadius("", 10)]}
    >
      <Button onPress={goto}>
        <Text style={[fontSize(15)]}>{text}</Text>
      </Button>
    </View>
  );
};

export default function Intro() {
  let { navigate } = useNavigation();
  let { colors, dark } = useTheme();
  let header = {
    title: "Platform",
    isShown: true,
    headerHeight: margin_top,
    btns: {
      left: [],
      right: [],
    },
  };
  let intros = [
    {
      text: "Phone",
      icon: {
        type: "",
        name: "",
        color: "",
      },
    },
    {
      text: "Desktop",
      icon: {
        type: "",
        name: "",
        color: "",
      },
    },
    {
      text: "MultiPlatform",
      icon: {
        type: "",
        name: "",
        color: "",
      },
    },
    {
      text: "Design",
      icon: {
        type: "",
        name: "",
        color: "",
      },
    },
  ];
  return (
    <Template header={header}>
      <View
        style={[
          width(dim.width - 30),
          // height(il * margin_top),
          margin("bl", 10),
        ]}
      >
        <Text style={[fontSize(17)]}>Select your Platform for start :)</Text>
      </View>
      <View
        style={[
          width(dim.width - 30),
          // height(il * margin_top),
          margin("l", 10),
          border("", 1),
          borderColor(tr),
          borderRadius("", 10),
          backgroundColor(dark ? colors.border : white),
          padding('', 10)
        ]}
      >
        <Grid data={intros} numOfColumns={1} RenderItem={RenderIntro} />
      </View>
    </Template>
  );
}
