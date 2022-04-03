/**
 * @typedef {Object} AA
 * @property {number} a
 * @property {number} b
 * @property {number} c
 * @property {number} d
 * @property {number} e
 * @property {number} f
 * @property {number} g
 * @property {number} h
 *
 * @typedef {Object} AB
 * @property {AA[]} children
 */

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  SectionList,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useDispatch, useSelector } from "react-redux";
import { isEmpty, isEqual } from "lodash";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import { a, b, d as aD, e, f, g, i, j, k, l, o, p } from "./ffff/a";
import C from "./ffff/a/a";
import { isNull } from "lodash";
// import { aa, ab, ac, ae, _a, _b, _c, _e } from "./ffff/b/a/a";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  FadeOutRight,
  FadeOutUp,
  SlideInDown,
  SlideInLeft,
  SlideInUp,
  SlideInRight,
  SlideOutDown,
  SlideOutLeft,
  SlideOutRight,
  SlideOutUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  Keyframe,
  runOnJS,
  useAnimatedGestureHandler,
  useDerivedValue,
} from "react-native-reanimated";
import { a_, _b, _a } from "./n/n";
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
} from "react-native-gesture-handler";

let { width, height } = a;
let __ = (a, b, c) => {
  "worklet";
  return Math.min(c, Math.max(a, b));
};
let Y = () => {
  let a = useSharedValue(0);
  let b = useAnimatedStyle(() => ({
    height: withSpring(height - 1.15 * a.value),
  }));
  useEffect(() => {
    let c = Keyboard.addListener("keyboardDidShow", (d) => {
      a.value = d.endCoordinates.height;
    });
    let d = Keyboard.addListener("keyboardDidHide", (d) => {
      a.value = 0;
    });
    return () => {
      c.remove();
      d.remove();
    };
  });
  return b;
};
function B({ A, a, b }) {
  return (
    <A.Navigator screenOptions={b}>
      {a.map((a, i) => (
        <A.Screen key={i} {...a} />
      ))}
    </A.Navigator>
  );
}
let Z = Animated.createAnimatedComponent(TouchableHighlight);
let Z1 = Animated.createAnimatedComponent(Entypo);
let S = createStackNavigator();
let MTT = createMaterialTopTabNavigator();
let MBT = createMaterialBottomTabNavigator();
export default function A() {
  return (
    <Provider store={C}>
      <NavigationContainer>
        <F />
      </NavigationContainer>
    </Provider>
  );
}
function F() {
  let b = {
    A: S,
    a: [
      {
        name: "a",
        component: E,
        options: {},
      },
      {
        name: "b",
        component: G,
        options: {},
      },
    ],
    b: {
      headerShown: false,
    },
  };
  return <B {...b} />;
}
function E() {
  let h = useDispatch();
  let d = useSelector(_b);
  let e = !isNull(d);
  let [y, u] = useState(false);
  let [t, v] = useState(false);
  let [l, o] = useState("");
  let [m, n] = useState({ m: 0, n: 0, a: "" });
  let ia = async (r) => {
    try {
      let a = await fetch(`${r}/${width}/${height}/${b}`).then((a) => a.json());
      h(a_(a));
    } catch (e) {
      alert(e);
    }
  };
  let z = (i, a, b) => {
    let { pageX, pageY } = i;
    if (isEqual(a, m.a)) {
    }
    q();
    // console.log(pageX);
    // console.log(pageY);
    n({ n: pageX, m: pageY, a });
  };
  let x = () => u((u) => !u);
  let q = () => v((v) => !v);
  return (
    <>
      <H
        w={ia}
        // q="#FECBCB"
        // q="#12ffff"
        q={aD}
      />
    </>
  );
}
function G() {
  return (
    <View style={[{ marginTop: b, marginLeft: b / 2 }]}>
      <R
        {...{
          m: 120,
          k: 120,
          o: [{ width: 100, height: 100, backgroundColor: "white" }, j({})],
        }}
      />
    </View>
  );
}
let H = ({ w, q }) => {
  let [x, y] = useState(true);
  let [t, u] = useState("");
  let a = useSharedValue(0);
  let d = useSharedValue(1);
  let l = useSharedValue(2);
  let e = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(a.value, { duration: 330 }) }],
  }));
  let f = useAnimatedStyle(() => ({
    opacity: withSpring(d.value),
  }));
  let v = useAnimatedStyle(() => ({
    opacity: withSpring((d.value + 1) / 2),
  }));
  let h = useAnimatedStyle(() => ({
    transform: [{ rotate: `${l.value}deg` }],
  }));
  let m = () => y((_) => !_);
  let c = () => {
    a.value = x ? -b * 1.5 : 0;
    d.value = x ? 0 : 1;
    l.value = withTiming((x ? 1 : 2) * 180, { duration: 330 });
    m();
  };
  let n = () => {
    c();
    w(t);
  };
  return (
    <Animated.View
      style={[
        {
          width: "100%",
          height: b * 3,
          position: "absolute",
          zIndex: 1,
          top: 0,
          right: 0,
          left: 0,
        },
        // o(),
        // l,
        e,
      ]}
    >
      <Animated.View
        style={[
          {
            width: "100%",
            height: b * 2.1,
            paddingTop: b * 0.75,
            justifyContent: "center",
            alignItems: "center",
          },
          //   l,
          o(q),
          f,
        ]}
      >
        <View
          style={[
            {
              width: "92%",
              height: b * 1.1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            },
            // l,
            j({}),
            o(),
          ]}
        >
          <TextInput
            value={t}
            onChangeText={u}
            style={[
              {
                width: "80%",
                height: "90%",
                fontSize: 21,
                paddingHorizontal: 6,
              },
            ]}
            placeholder="(: - | - (:) - | - :)"
          />
          <TouchableHighlight
            style={[
              {
                width: "15%",
                height: "90%",
                justifyContent: "center",
                alignItems: "center",
              },
              j({}),
              //   o("#91C0FD"),
              o(q),
            ]}
            underlayColor={k}
            onPress={n}
          >
            <Text style={{ fontSize: 24 }}>🖐</Text>
          </TouchableHighlight>
        </View>
      </Animated.View>
      <View
        style={[
          {
            width: "100%",
            height: b * 0.9,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
          },
          // j({ c: "black" }),
        ]}
      >
        <Z
          onPress={c}
          underlayColor={k}
          style={[
            {
              width: b * 0.75,
              height: b * 0.75,
              justifyContent: "center",
              alignItems: "center",
            },
            o(q),
            j({
              c: "black",
            }),
            v,
          ]}
        >
          <Z1
            style={[h]}
            name="chevron-up"
            size={b * 0.5}
            //   color={N}
          />
        </Z>
      </View>
    </Animated.View>
  );
};

//  II
let AA = ({ a, b }) => {
  let [f, e] = useState(false);
  let d = useSelector(_a);
  let c = d.map(() => ({
    o: useSharedValue(0),
    w: useSharedValue(0),
    h: useSharedValue(0),
    x: useSharedValue(0),
    y: useSharedValue(0),
    ox: useSharedValue(0),
    oy: useSharedValue(0),
  }));
  let y = useDerivedValue(() => true);
  let z = useAnimatedGestureHandler({
    onStart() {},
    onActive({ translationX, translationY }, _) {},
    onEnd() {},
  });
  return (
    <Animated.View
      entering={FadeIn.duration(315)}
      exiting={FadeOut.duration(549)}
      {...a}
    >
      <Animated.View
        entering={SlideInDown.duration(549)}
        exiting={SlideOutDown.duration(315)}
        {...b}
      >
        <PanGestureHandler onGestureEvent={z}></PanGestureHandler>
      </Animated.View>
    </Animated.View>
  );
};

/**
 *
 * @param {AB} a
 */
let AB = (a) => {};

let I = ({ a }) => {
  let [c, f] = useState("");
  let i = () => a(c);
  return (
    <View
      style={[
        {
          width: "92%",
          height: b * 1.1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        },
        // l,
        j({}),
        o(),
      ]}
    >
      <TextInput
        value={c}
        onChangeText={f}
        style={[
          { width: "80%", height: "90%", fontSize: 21, paddingHorizontal: 6 },
        ]}
        placeholder="(: - | - (:) - | - :)"
      />
      <TouchableHighlight
        style={[
          {
            width: "15%",
            height: "90%",
            justifyContent: "center",
            alignItems: "center",
          },
          j({}),
          //   o("#91C0FD"),
          o("#FECBCB"),
        ]}
        underlayColor={k}
        onPress={i}
      >
        <Text style={{ fontSize: 24 }}>🖐</Text>
      </TouchableHighlight>
    </View>
  );
};
let J = ({ a, b, n, children }) => {
  let m = Y();
  return (
    <Animated.View
      entering={FadeIn.duration(315)}
      exiting={FadeOut.duration(549)}
      {...a}
    >
      <Animated.View
        entering={SlideInDown.duration(549)}
        exiting={SlideOutDown.duration(315)}
        style={[b, m]}
      >
        {/* {children} */}
        <ScrollView {...n}>{children}</ScrollView>
      </Animated.View>
    </Animated.View>
  );
};
let K = ({ a, c, z, b, d, f, m, s }) => {
  return (
    <Animated.View
      entering={SlideInLeft.duration(1000)}
      exiting={SlideOutLeft.duration(500)}
      {...a}
    >
      <ScrollView {...m}>
        {c.sections.map(({ a, b, data }) => (
          <View key={b}>
            <M {...a} />
            {data.map((d) => (
              <L key={d.a} z={z} s={s} {...d} />
            ))}
          </View>
        ))}
      </ScrollView>
      <TouchableHighlight onPress={b} {...d}>
        <Entypo {...f} />
      </TouchableHighlight>
    </Animated.View>
  );
};
let L = ({ a, b, c, s, d, z }) => {
  return (
    <Z onLongPress={(i) => z(i.nativeEvent, a, b)} {...d.a}>
      <Text {...d.b}>{c}</Text>
    </Z>
  );
};
let M = ({ a, b, c }) => {
  return (
    <View {...a}>
      <Text {...b}>{c}</Text>
    </View>
  );
};
let N = ({ a, b }) => {
  return (
    <Animated.View
      entering={SlideInRight.duration(1000)}
      exiting={SlideOutRight.duration(500)}
      {...a}
    >
      <O {...b} />
    </Animated.View>
  );
};
let O = ({}) => {
  return <View>{/* <TextInput placeholder="A0123456789" /> */}</View>;
};
let P = ({ a, b, c, d, e, h }) => {
  return (
    <View {...a}>
      <TouchableHighlight onPress={h} {...b}>
        <AntDesign {...c} />
      </TouchableHighlight>
      <TouchableHighlight onPress={e} {...b}>
        <AntDesign {...d} />
      </TouchableHighlight>
    </View>
  );
};
let Q = ({ a, b, d, f }) => {
  let i = useRef();
  let o = () => {
    i.current.focus();
  };
  return (
    <View {...a}>
      <TouchableHighlight onPress={o} {...f}>
        <Ionicons {...d} />
      </TouchableHighlight>
      <TextInput ref={i} {...b} />
    </View>
  );
};
let T = ({ a, b, c, d, e, f, g, h, children }) => {
  let z = useSharedValue(0);
  let x = useSharedValue(0);
  let y = useSharedValue(0);
  let w = useSharedValue(0);
  let u = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: x.value,
      },
      {
        translateY: y.value,
      },
    ],
  }));
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);
  // console.log(e);
  // console.log(f);
  let t = c - a,
    s = b - 2 * a;
  let v = Gesture.Pan()
    .onUpdate((v) => {
      x.value = __(v.translationX + w.value, -t, d - t - e);
      y.value = __(v.translationY + z.value, -s, f - s - 4 * a - g);
    })
    .onEnd(() => {
      z.value = y.value;
      w.value = x.value;
    });
  return (
    <GestureDetector gesture={v}>
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        style={[
          h,
          {
            width: e,
            height: g,
            top: b,
            left: t,
            // top: 0,
            // left: 0,
          },
          u,
        ]}
      >
        {children}
      </Animated.View>
    </GestureDetector>
  );
};
let R = ({ m, k, o, p, q, children }) => {
  let x = useSharedValue(0);
  let u = useSharedValue(0);
  let _x = useSharedValue(0);
  let _u = useSharedValue(0);
  let s = k - b / 2;
  let r = m - b;
  console.log("k: ", k);
  console.log("m: ", m);
  console.log("s: ", s);
  console.log("r: ", r);
  let t = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: u.value }],
    };
  });
  let e = Gesture.Pan()
    .onUpdate((e) => {
      x.value = __(
        e.translationX + _x.value,
        // -b / 2.7,
        -b / 2,
        width -
          // 2.55 * b,
          b,
      );
      u.value = __(
        e.translationY + _u.value,
        // -b / 2.7,
        -r,
        // (-3 / 2) * b,
        height -
          // 3.3 * b
          // m,
          r,
      );
    })
    .onEnd((e) => {
      // if (e.absoluteX >= b * 1.5 && e.absoluteX <= width - b / 2) {
      //   runOnJS(p)(q);
      // }
      _x.value = x.value;
      _u.value = u.value;
    });
  //   let d = Gesture.Exclusive(e);
  return (
    <GestureDetector gesture={e}>
      <Animated.View
        entering={
          // new Keyframe({
          //   from: {
          //     transform: [{ scale: 0 }],
          //   },
          //   to: {
          //     transform: [{ scale: 1.32 }],
          //   },
          // })
          FadeIn
        }
        exiting={FadeOut}
        style={[{ top: m, left: k - b / 2 }, o, t]}
      >
        {children}
      </Animated.View>
    </GestureDetector>
  );
};
