import * as React from "react";
import * as RN from "react-native";
import { useTheme } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import {
  align_items,
  backgroundColor,
  bgct,
  black,
  border,
  borderColor,
  bw1,
  center,
  co,
  color,
  dim,
  display,
  flex,
  flex_direction,
  fontSize,
  font_weight,
  height,
  hexToRGB,
  isAndroid,
  justify_content,
  margin,
  margin_top,
  opacity,
  overlay,
  padding,
  position,
  row,
  white,
  width,
  zIndex,
} from "../styles";
import { Text, View, Button, Chevron, DetailToast } from "./components";

export let IOSHeader = ({ morePadding, headerHeight, title }) => {
  // let iBtns = [...btns.right, ...btns.left];
  let hh = headerHeight;
  let { dark, colors } = useTheme();
  let same = [display(true), flex_direction("r"), align_items("")];
  let mv = dim.width * 0.05;
  return (
    <View
      style={[
        width("100%"),
        height(hh),
        same,
        margin("b", hh / 2),
        align_items("fe"),
        // backgroundColor(dark ? black : white),
      ]}
    >
      <View style={[flex(1), bgct, morePadding && margin("h", mv)]}>
        <Text
          style={[fontSize(32), font_weight("b")]}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};
export let MainHeader = ({ title, isModal, Is, headerHeight, btns }) => {
  let same = [display(true), flex_direction("r"), align_items("")];
  let cSame = [...same, height("100%")];
  let V = isAndroid ? View : BlurView;
  let { dark, colors } = useTheme();
  let hh = headerHeight;
  let pt = padding("t", hh);
  let compare = (and, oth) => (isAndroid ? and : !isModal ? and : oth);
  let brs = 1.5;
  return (
    <V
      style={[
        same,
        width("100%"),
        height(headerHeight * compare(2, 1) + (Is ? brs : 0)),
        compare(pt, null),
        Is && [border("b", 1), borderColor(colors.border)],
        // padding("h", headerHeight / 6),
        // overlay,
        !Is && bgct,
      ]}
      tint={dark ? "dark" : "light"}
      intensity={Is ? 70 : 1}
    >
      <View style={[width("35%"), cSame, bgct]}>
        {btns.left &&
          btns.left.map((bl, i) => (
            <View
              key={i}
              style={[
                width(hh / 1.5),
                height(hh / 1.5),
                margin("l", hh / 6),
                // bw1,
                bgct,
              ]}
            >
              <Button onPress={bl.onPress} detail={bl.detail} riprad={hh / 3}>
                {bl.icon}
              </Button>
            </View>
          ))}
      </View>
      <View
        style={[
          width("30%"),
          height("80%"),
          // align_items(""),
          // justify_content("fe"),
          center,
          bgct,
        ]}
      >
        {Is && (
          <Text
            style={[fontSize(20), font_weight("6")]}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {title}
          </Text>
        )}
      </View>
      <View style={[cSame, width("35%"), flex_direction("rr"), bgct]}>
        {btns.right &&
          btns.right.map((br, i) => (
            <View
              key={i}
              style={[
                width(hh / 1.5),
                height(hh / 1.5),
                margin("r", hh / 6),
                bgct,
              ]}
            >
              <Button onPress={br.onPress} detail={br.detail} riprad={hh / 3}>
                {br.icon}
              </Button>
            </View>
          ))}
      </View>
    </V>
  );
};
