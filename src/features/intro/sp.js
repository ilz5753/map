import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import * as React from "react";
import { PanResponder } from "react-native";
import { Text, View, TextInput, Button } from "../../../esse/components";
import { Template } from "../../../esse/template";
import {
  backgroundColor,
  bgct,
  border,
  borderColor,
  borderRadius,
  bw1,
  center,
  co,
  dim,
  flex,
  fontSize,
  height,
  justify_content,
  margin,
  margin_top,
  padding,
  root,
  Root,
  row,
  tbc,
  width,
} from "../../../styles";
import { useSelector } from "react-redux";
import { type } from "./introSlice";
export default function SP() {
  let { navigate, goBack } = useNavigation();
  let { colors, dark } = useTheme();
  let title = useSelector(type);
  let [appName, setAppName] = React.useState("");
  let [appDetail, setAppDetail] = React.useState("");
  let header = {
    title,
    headerHeight: margin_top,
    isShown: true,
    isModal: true,
    btns: {
      left: [],
      right: [],
    },
    back: {
      text: "Platform",
      onPress: goBack,
    },
  };
  let lct = title.toLowerCase();
  let create = () => {
    navigate(lct);
  };
  let w = [width(dim.width - 30), margin("bl", 10)];
  let fw = [
    w,
    height(margin_top),
    border("", 1),
    borderRadius("", 10),
    tbc,
  ];
  let aw = [padding("h", 10), row];
  return (
    <Template header={header}>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={[fw, aw, backgroundColor("white")]}>
        <View style={[flex(1), justify_content(""), bgct]}>
          <Text style={[fontSize(18)]}>name</Text>
        </View>
        <View
          style={[
            width(1),
            height("100%"),
            border("", 0.5),
            borderColor(colors.border),
          ]}
        />
        <View style={[flex(3), justify_content(""), bgct, padding("h", 10)]}>
          <TextInput
            placeholder="todo"
            value={appName}
            onChangeText={setAppName}
            style={[fontSize(21)]}
          />
        </View>
      </View>
      <View style={[fw, aw, backgroundColor("white")]}>
        <View
          style={[flex(1), justify_content("fs"), padding("t", 12.5), bgct]}
        >
          <Text style={[fontSize(18)]}>Detail</Text>
        </View>
        <View
          style={[
            width(1),
            height("100%"),
            border("", 0.5),
            borderColor(colors.border),
          ]}
        />
        <View style={[flex(3), justify_content(""), bgct, padding("h", 10)]}>
          <TextInput
            placeholder="todo list app"
            value={appDetail}
            onChangeText={setAppDetail}
            style={[fontSize(21)]}
          />
        </View>
      </View>
      <Button onPress={create} style={[fw, center]}>
        <Text>Create</Text>
      </Button>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>

      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View><View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>

      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View><View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
      <View style={w}>
        <Text style={[fontSize(17)]}>
          Fill out fields for creating new {lct} app!
        </Text>
      </View>
    </Template>
  );
}
