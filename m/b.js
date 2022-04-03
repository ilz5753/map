import {
  TextInput,
  ActivityIndicator,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  Dimensions,
  SectionList,
  View,
  ScrollView,
  Text,
  Image,
  Keyboard,
} from "react-native";
import {
  AntDesign,
  createIconSet,
  createIconSetFromFontello,
  createIconSetFromIcoMoon,
  createMu,
  createMultiStyleIconSet,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";
import Animated, { Keyframe } from "react-native-reanimated";
// import {} from "react-native-gesture-handler";
import { configureStore, createSlice } from "@reduxjs/toolkit";
export let A0 = Animated.createAnimatedComponent(AntDesign),
  A1 = Animated.createAnimatedComponent(Entypo),
  A2 = Animated.createAnimatedComponent(EvilIcons),
  A3 = Animated.createAnimatedComponent(Feather),
  A4 = Animated.createAnimatedComponent(FontAwesome),
  A5 = Animated.createAnimatedComponent(FontAwesome5),
  A6 = Animated.createAnimatedComponent(Fontisto),
  A7 = Animated.createAnimatedComponent(Foundation),
  A8 = Animated.createAnimatedComponent(Ionicons),
  A9 = Animated.createAnimatedComponent(MaterialCommunityIcons),
  A10 = Animated.createAnimatedComponent(MaterialIcons),
  A11 = Animated.createAnimatedComponent(Octicons),
  A12 = Animated.createAnimatedComponent(SimpleLineIcons),
  A13 = Animated.createAnimatedComponent(Zocial),
  A14 = Animated.createAnimatedComponent(TextInput),
  A15 = Animated.createAnimatedComponent(ImageBackground),
  A16 = Animated.createAnimatedComponent(ActivityIndicator),
  A17 = Animated.createAnimatedComponent(TouchableHighlight),
  A18 = Animated.createAnimatedComponent(TouchableOpacity),
  A19 = Animated.createAnimatedComponent(Pressable),
  A20 = Animated.View,
  A21 = Animated.ScrollView,
  A22 = Animated.Text,
  A23 = Animated.Image,
  A24 = Animated.FlatList,
  A25 = Animated.createAnimatedComponent(SectionList),
  A26 = View,
  A27 = ScrollView,
  A28 = Text,
  A29 = TextInput,
  A30 = Image,
  A31 = ImageBackground,
  A32 = TouchableHighlight,
  A33 = TouchableOpacity,
  A34 = Pressable,
  A35 = Keyboard,
  A36 = AntDesign,
  A37 = Entypo,
  A38 = EvilIcons,
  A39 = Feather,
  A40 = FontAwesome,
  A41 = FontAwesome5,
  A42 = Fontisto,
  A43 = Foundation,
  A44 = Ionicons,
  A45 = MaterialCommunityIcons,
  A46 = MaterialIcons,
  A47 = Octicons,
  A48 = SimpleLineIcons,
  A49 = Zocial;
export let a0 = Dimensions.get("screen"),
  a1 = a0.width,
  a2 = a0.height,
  a3 = 48,
  a4 = "transparent",
  a5 = "#000000",
  a6 = "#ffffff",
  a7 = createSlice({
    name: "a7",
    initialState: {
      a0: null,
      a1: null,
      a2: false,
      a3: [],
      a4: null,
      a5: false,
      a6: null,
      a7: false,
      a8: false,
      a9: false,
      a10: null,
    },
    reducers: {
      a00(a0, { payload }) {
        a0.a0 = payload;
      },
      a10(a1, { payload }) {
        a1.a1 = payload;
      },
      a20(a2) {
        a2.a2 = !a2.a2;
      },
      a30(a3, { payload }) {
        a3.a3 = payload;
      },
      a31(a3, { payload }) {
        a3.a3.push(payload);
      },
      a32(a3, { payload }) {
        let { AA0 } = a3.a6;
        let b3 = a3.a3[AA0];
        let d3 = {
          ...b3,
          ...payload,
        };
        a3.a3.splice(AA0, 1, d3);
      },
      a40(a4, { payload }) {
        a4.a4 = payload;
      },
      a50(a5) {
        a5.a5 = !a5.a5;
      },
      a60(a6, { payload }) {
        a6.a6 = payload;
      },
      a70(a7) {
        a7.a7 = !a7.a7;
      },
      a80(a8) {
        a8.a8 = !a8.a8;
      },
      a90(a9) {
        a9.a9 = !a9.a9;
      },
      a100(a10, { payload }) {
        a10.a10 = payload;
      },
    },
  }),
  { a00, a10, a20, a30, a31, a32, a40, a50, a60, a70, a80, a90, a100 } = a7.actions,
  _a0 = ({ a7: { a0 } }) => a0,
  _a1 = ({ a7: { a1 } }) => a1,
  _a2 = ({ a7: { a2 } }) => a2,
  _a3 = ({ a7: { a3 } }) => a3,
  _a4 = ({ a7: { a4 } }) => a4,
  _a5 = ({ a7: { a5 } }) => a5,
  _a6 = ({ a7: { a6 } }) => a6,
  _a7 = ({ a7: { a7 } }) => a7,
  _a8 = ({ a7: { a8 } }) => a8,
  _a9 = ({ a7: { a9 } }) => a9,
  _a10 = ({ a7: { a10 } }) => a10,
  a8 = configureStore({
    reducer: {
      a7: a7.reducer,
    },
  }),
  a9 = "rgba(0,0,0,0.18)",
  // a10 = "#",
  a11 = "#12ffff",
  a12 = "#4d68f0";
export let B0 = {
  A0: {
    AA0: new Keyframe({
      0: {
        transform: [{ translateX: -a1 }, { scale: 0 }],
      },
      50: {
        transform: [{ translateX: 0 }, { scale: 0.6 }],
      },
      100: {
        transform: [{ translateX: 0 }, { scale: 1 }],
      },
    }),
    AA1: new Keyframe({
      100: {
        transform: [{ translateX: a1 }, { scale: 0 }],
      },
      50: {
        transform: [{ translateX: 0 }, { scale: 1.2 }],
      },
      0: {
        transform: [{ translateX: 0 }, { scale: 1 }],
      },
    }),
  },
  A1: {
    AB0: new Keyframe({
      from: {
        transform: [
          {
            scale: 0,
          },
          {
            rotate: `0deg`,
          },
        ],
      },
      to: {
        transform: [
          {
            scale: 1,
          },
          {
            rotate: `1080deg`,
          },
        ],
      },
    }),
    AB1: new Keyframe({
      from: {
        transform: [
          {
            scale: 1,
          },
          {
            rotate: `0deg`,
          },
        ],
      },
      to: {
        transform: [
          {
            scale: 0,
          },
          {
            rotate: `-540deg`,
          },
        ],
      },
    }),
  },
};
