import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { uuid } from "../style";
import { a1, a2, a3 } from "./b";
import { isNull, isEmpty } from "lodash";

let initData = [
  {
    id: uuid(),
    text: "Sara",
  },
  {
    id: uuid(),
    text: "Suzan",
  },
  {
    id: uuid(),
    text: "Selena",
  },
  {
    id: uuid(),
    text: "Cris",
  },
  {
    id: uuid(),
    text: "MM",
  },
  {
    id: uuid(),
    text: "Messi",
  },
];
export default function SimpleSwitchableAndDDP() {
  let [data, setData] = useState(initData);
  let [nw, setNW] = useState({
    value: {
      text: "hello world",
      data: {},
      location: {},
      path: "",
    },
    children: [
      {
        value: {
          text: "1",
        },
        children: [],
      },
      {
        value: {
          text: "2",
        },
        children: [],
      },
      {
        value: {
          text: "3",
        },
        children: [],
      },
      {
        value: {
          text: "4",
        },
        children: [],
      },
    ],
  });
  return (
    <>
      <View style={{ marginTop: a3 }} />
      <View
        style={{
          width: a1,
          height: a2 - 1.315 * a3,
          //   borderWidth: 0.6,
          //   borderRadius: 18,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            width: 1.75 * a3,
            height: a2 - 1.5 * a3,
            // borderWidth: 0.6,
            borderRadius: 18,
            alignItems: "center",
          }}
        >
          {/* <ScrollView> */}
          {data.map((D, i) => (
            <NI key={i} index={i}>
              <Text>{D.text}</Text>
            </NI>
          ))}
          {/* </ScrollView> */}
        </View>
        <View
          style={{
            width: a1 - 2.1 * a3,
            height: a2 - 1.5 * a3,
            borderWidth: 0.6,
            borderRadius: 18,
            // backgroundColor: 'blue'
          }}
        >
          <NW {...nw} />
        </View>
      </View>
    </>
  );
}
let NI = ({ index, children }) => {
  let isActive = useSharedValue(0);
  let x = useSharedValue(0);
  let y = useSharedValue(0);

  let gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      isActive.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (_) => {
      x.value = withSpring(0);
      y.value = withSpring(0);
      isActive.value = false;
    },
  });

  let animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
        {
          translateY: y.value,
        },
      ],
      zIndex: isActive.value ? 100 : 10,
    };
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[
          {
            width: 60,
            height: 60,
            // borderWidth: 0.6,
            borderRadius: 12,
            marginBottom: 4.5,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: index * 64.5,
            backgroundColor: "#ffffff",
          },
          animatedStyle,
        ]}
      >
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};
let NW = ({ value = {}, children = [] }) => {
  return (
    <View>
      <Text>{value.text}</Text>
      {children.map((ch, i) => (
        <NW key={i} {...ch} />
      ))}
    </View>
  );
};
