import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  Dimensions,
  Platform,
  PlatformColor,
  Image,
  ImageBackground,
  FlatList,
  SectionList,
  Keyboard,
} from "react-native";
import {
  AntDesign,
  // createIconSet,
  // createIconSetFromFontello,
  // createIconSetFromIcoMoon,
  // createMu,
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
import Animated, {
  SlideInDown,
  SlideOutDown,
  SlideInLeft,
  SlideOutLeft,
  SlideInRight,
  SlideOutRight,
  SlideInUp,
  SlideOutUp,
  FadeInDown,
  FadeOutDown,
  FadeInLeft,
  FadeOutLeft,
  FadeInRight,
  FadeOutRight,
  FadeInUp,
  FadeOutUp,
  StretchInX,
  StretchOutX,
  StretchInY,
  StretchOutY,
  BounceInDown,
  BounceOutDown,
  BounceInLeft,
  BounceOutLeft,
  BounceInRight,
  BounceOutRight,
  BounceInUp,
  BounceOutUp,
  FadeIn,
  FadeOut,
  BounceIn,
  BounceOut,
  FlipInEasyX,
  FlipOutEasyX,
  FlipInEasyY,
  FlipOutEasyY,
  FlipInXDown,
  FlipOutXDown,
  FlipInXUp,
  FlipOutXUp,
  FlipInYLeft,
  FlipOutYLeft,
  FlipInYRight,
  FlipOutYRight,
  LightSpeedInLeft,
  LightSpeedOutLeft,
  LightSpeedInRight,
  LightSpeedOutRight,
  PinwheelIn,
  PinwheelOut,
  RollInLeft,
  RollOutLeft,
  RollInRight,
  RollOutRight,
  RotateInDownLeft,
  RotateOutDownLeft,
  RotateInDownRight,
  RotateOutDownRight,
  RotateInUpLeft,
  RotateOutUpLeft,
  RotateInUpRight,
  RotateOutUpRight,
  ZoomIn,
  ZoomOut,
  ZoomInDown,
  ZoomOutDown,
  ZoomInUp,
  ZoomOutUp,
  ZoomInLeft,
  ZoomOutLeft,
  ZoomInRight,
  ZoomOutRight,
  ZoomInEasyDown,
  ZoomOutEasyDown,
  ZoomInEasyUp,
  ZoomOutEasyUp,
  ZoomInRotate,
  ZoomOutRotate,
  Layout,
  LayoutAnimation,
  LayoutAnimationFunction,
  LayoutAnimationsValues,
  AnimatedStyleProp,
  AnimateProps,
  AnimateStyle,
  Keyframe,
} from "react-native-reanimated";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { GestureDetector, PanGestureHandler } from "react-native-gesture-handler";
export let $ = Animated.createAnimatedComponent,
  A0 = View,
  A1 = Animated.View,
  A2 = ScrollView,
  A3 = Animated.ScrollView,
  A4 = Text,
  A5 = Animated.Text,
  A6 = TextInput,
  A7 = $(TextInput),
  A8 = Image,
  A9 = Animated.Image,
  A10 = ImageBackground,
  A11 = $(ImageBackground),
  A12 = TouchableHighlight,
  A13 = $(TouchableHighlight),
  A14 = TouchableOpacity,
  A15 = $(TouchableOpacity),
  A16 = ActivityIndicator,
  A17 = $(ActivityIndicator),
  A18 = Pressable,
  // A19 = $(Pressable),
  A20 = AntDesign,
  A21 = $(AntDesign),
  A22 = createMultiStyleIconSet,
  // A23 = $(createMultiStyleIconSet),
  A24 = Entypo,
  A25 = $(Entypo),
  A26 = EvilIcons,
  A27 = $(EvilIcons),
  A28 = Feather,
  A29 = $(Feather),
  A30 = FontAwesome,
  A31 = $(FontAwesome),
  A32 = FontAwesome5,
  // A33 = $(FontAwesome5),
  A34 = Fontisto,
  A35 = $(Fontisto),
  A36 = Foundation,
  A37 = $(Foundation),
  A38 = Ionicons,
  A39 = $(Ionicons),
  A40 = MaterialCommunityIcons,
  A41 = $(MaterialCommunityIcons),
  A42 = MaterialIcons,
  A43 = $(MaterialIcons),
  A44 = Octicons,
  A45 = $(Octicons),
  A46 = SimpleLineIcons,
  A47 = $(SimpleLineIcons),
  A48 = Zocial,
  A49 = $(Zocial),
  A50 = SectionList,
  A51 = $(SectionList),
  A52 = FlatList,
  A53 = Animated.FlatList,
  A54 = Platform.OS,
  A55 = A54 === "android",
  A56 = A54 === "ios",
  A57 = A54 === "web",
  A58 = SlideInDown,
  A59 = SlideOutDown,
  A60 = SlideInUp,
  A61 = SlideOutUp,
  A62 = SlideInLeft,
  A63 = SlideOutLeft,
  A64 = SlideInRight,
  A65 = SlideOutRight,
  A66 = FadeInDown,
  A67 = FadeOutDown,
  A68 = FadeInUp,
  A69 = FadeOutUp,
  A70 = FadeInLeft,
  A71 = FadeOutLeft,
  A72 = FadeInRight,
  A73 = FadeOutRight,
  A74 = BounceInDown,
  A75 = BounceOutDown,
  A76 = BounceInUp,
  A77 = BounceOutUp,
  A78 = BounceInLeft,
  A79 = BounceOutLeft,
  A80 = BounceInRight,
  A81 = BounceOutRight,
  A82 = ZoomInDown,
  A83 = ZoomOutDown,
  A84 = ZoomInUp,
  A85 = ZoomOutUp,
  A86 = ZoomInLeft,
  A87 = ZoomOutLeft,
  A88 = ZoomInRight,
  A89 = ZoomOutRight,
  A90 = ZoomIn,
  A91 = ZoomOut,
  A92 = BounceIn,
  A93 = BounceOut,
  A94 = FadeIn,
  A95 = FadeOut,
  A96 = FlipInXUp,
  A97 = FlipOutXUp,
  A98 = FlipInXDown,
  A99 = FlipOutXDown,
  A100 = StretchInX,
  A101 = StretchOutX,
  A102 = StretchInY,
  A103 = StretchOutY,
  A104 = FlipInYLeft,
  A105 = FlipOutYLeft,
  A106 = FlipInYRight,
  A107 = FlipOutYRight,
  A108 = FlipInEasyX,
  A109 = FlipOutEasyX,
  A110 = FlipInEasyY,
  A111 = FlipOutEasyY,
  A112 = ZoomInEasyUp,
  A113 = ZoomOutEasyUp,
  A114 = ZoomInEasyDown,
  A115 = ZoomOutEasyDown,
  A116 = LightSpeedInLeft,
  A117 = LightSpeedOutLeft,
  A118 = LightSpeedInRight,
  A119 = LightSpeedOutRight,
  A120 = PinwheelIn,
  A121 = PinwheelOut,
  A122 = RollInLeft,
  A123 = RollOutLeft,
  A124 = RollInRight,
  A125 = RollOutRight,
  A126 = RotateInDownLeft,
  A127 = RotateOutDownLeft,
  A128 = RotateInUpLeft,
  A129 = RotateOutUpLeft,
  A130 = RotateInDownRight,
  A131 = RotateOutDownRight,
  A132 = RotateInUpRight,
  A133 = RotateOutUpRight,
  A134 = ZoomInRotate,
  A135 = ZoomOutRotate,
  A136 = Layout,
  A137 = PanGestureHandler,
  A138 = GestureDetector,
  A200 = 48,
  A201 = Dimensions.get("screen"),
  A202 = A201.width,
  A203 = A201.height,
  A204 = Provider,
  A205 = createStackNavigator,
  A206 = createMaterialBottomTabNavigator,
  A207 = createMaterialTopTabNavigator,
  A208 = createDrawerNavigator,
  A209 = NavigationContainer,
  A210 = configureStore,
  A211 = createSlice,
  A212 = Keyboard,
  A213 = Keyframe,
  A222 = {
    AA0: {
      AA0: new A213({
        from: {
          transform: [{ translateX: -A202 }, { scale: 0 }],
          opacity: 0,
        },
        to: {
          transform: [{ translateX: 0 }, { scale: 1 }],
          opacity: 1,
        },
      }),
      AA1: new A213({
        from: {
          transform: [{ translateX: 0 }, { scale: 1 }],
          opacity: 1,
        },
        to: {
          transform: [{ translateX: A202 }, { scale: 0 }],
          opacity: 0,
        },
      }),
    },
    AA1: {
      AA0: new Keyframe({
        from: {
          transform: [
            {
              scale: 0,
            },
          ],
          opacity: 0,
        },
        to: {
          transform: [
            {
              scale: 1,
            },
          ],
          opacity: 1,
        },
      }),
      AA1: new Keyframe({
        from: {
          transform: [
            {
              scale: 1,
            },
          ],
          opacity: 1,
        },
        to: {
          transform: [
            {
              scale: 0,
            },
          ],
          opacity: 0,
        },
      }),
    },
  },
  A214 = new A213({
    from: {},
    to: {},
  }),
  A224 = (B0) => ({ duration: B0 }),
  A215 = A224(330),
  A216 = "rgba(0,0,0,0.177)",
  A217 = "rgba(167, 46, 240, 1)",
  A218 = "#ffffff",
  A219 = "#000000",
  A220 = "rgba(0,0,0,0.57)",
  A221 = { A200, A201 },
  A223 = (B0) => (B0 ? { uri: B0 } : require("../assets/adaptive-icon.png")),
  A225 = 60,
  A226 = A224(A225),
  A400 = (E0, E1) => {
    switch (E0) {
      case E1.AA1:
        return A1;
      case E1.AA2:
        return A2;
      case E1.AA3:
        return A3;
      case E1.AA4:
        return A4;
      case E1.AA5:
        return A5;
      case E1.AA6:
        return A6;
      case E1.AA7:
        return A7;
      case E1.AA8:
        return A8;
      case E1.AA9:
        return A9;
      case E1.AA10:
        return A10;
      case E1.AA11:
        return A11;
      case E1.AA12:
        return A12;
      case E1.AA13:
        return A13;
      case E1.AA14:
        return A14;
      case E1.AA15:
        return A15;
      case E1.AA16:
        return A16;
      case E1.AA17:
        return A17;
      case E1.AA18:
        return A18;
      case E1.AA50:
        return A50;
      case E1.AA51:
        return A51;
      case E1.AA52:
        return A52;
      case E1.AA53:
        return A53;
      case E1.AA0:
      default:
        return A0;
    }
  };
