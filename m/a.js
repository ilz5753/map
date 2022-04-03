import React, { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  A14,
  A15,
  A16,
  A17,
  A18,
  A19,
  A20,
  A21,
  A22,
  A23,
  A24,
  A25,
  A26,
  A27,
  A28,
  A29,
  A30,
  A31,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a8,
  A32,
  a9,
  A1,
  a11,
  _a0,
  _a1,
  a00,
  a10,
  A0,
  A9,
  A3,
  a12,
  _a2,
  A33,
  A35,
  a30,
  _a3,
  B0,
  A10,
  a40,
  _a4,
  a20,
  a50,
  _a5,
  a60,
  _a6,
  a31,
  A5,
  A8,
  a70,
  _a7,
  a80,
  _a8,
  a32,
  A41,
  _a9,
  a90,
  _a10,
} from "./b";
import {
  FadeIn,
  FadeInUp,
  FadeOut,
  FadeOutUp,
  runOnJS,
  runOnUI,
  SlideInDown,
  SlideInUp,
  SlideOutDown,
  useAnimatedGestureHandler,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { isEmpty, isEqual, isNull } from "lodash";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
} from "react-native-gesture-handler";
import C120 from "./c";
let C16 = () => {
  let D0 = useSharedValue(0);
  let D1 = useAnimatedStyle(() => ({
    height: a2 - D0.value - 2 * a3,
  }));
  useEffect(() => {
    let F0 = A35.addListener(
      "keyboardDidShow",
      ({ endCoordinates: { height } }) => {
        D0.value = height;
      },
    );
    let F1 = A35.addListener("keyboardDidHide", () => {
      D0.value = 0;
    });
    return () => {
      F0.remove();
      F1.remove();
    };
  });
  return D1;
};
function C0({ D0, D1, D2 }) {
  return (
    <D1.Navigator {...D0}>
      {D2.map((D2, d2) => (
        <D1.Screen key={d2} {...D2} />
      ))}
    </D1.Navigator>
  );
}
let C1 = createStackNavigator();
let C2 = createMaterialTopTabNavigator();
let C3 = createMaterialBottomTabNavigator();
export default function A() {
  return (
    <Provider store={a8}>
      <NavigationContainer>
        <C4 />
      </NavigationContainer>
    </Provider>
  );
}
function C4() {
  let D0 = {
    D1: C1,
    D2: [
      {
        name: "a",
        component: C5,
        options: {},
      },
      {
        name: "b",
        component: C6,
        options: {},
      },
      {
        name: "c",
        component: C120,
        options: {},
      },
    ],
    D0: {
      // initialRouteName: "c",
      screenOptions: { headerShown: false },
    },
  };
  return <C0 {...D0} />;
}
function C5() {
  let D1 = useDispatch();
  let D2 = useSelector(_a1);
  let D5 = useSelector(_a2);
  let D17 = useSelector(_a3);
  let D9 = useSelector(_a4);
  let D6 = useSelector(_a5);
  let D8 = useSelector(_a6);
  let D13 = useSelector(_a7);
  let D18 = useSelector(_a8);
  let D15 = useSelector(_a9);
  let D0 = async (d0) => {
    try {
      let d2 = await fetch(`${d0}/${a1}/${a2}/${a3}`).then((d2) => d2.json());
      // console.log(d2.AB2);
      D1(a00(d2.A1));
      D1(a30(d2.AB0));
      D1(a40(d2.AB2));
      D1(a10(d2.A0));
    } catch (d1) {
      alert(d1);
    }
  };
  let D3 = !isNull(D2);
  let D4 = {
    AA0: [
      {
        AA0: A9,
        AA1: "newspaper",
      },
      {
        AA0: A0,
        AA1: "appstore-o",
      },
      {
        AA0: A3,
        AA1: "user",
      },
    ],
    AA1: [C6, C10, C11],
  };
  let D10 = () => D1(a20());
  let D12 = () => D1(a50());
  let D11 = () => D1(a70());
  let D14 = () => D1(a80());
  let D20 = () => D1(a90());
  let D16 = (E0) => {
    let [F0, F1] = E0;
    let E1 = new Date().getTime();
    D1(
      a31({
        AA0: D17.length,
        AA7: F1,
        AA4: false,
        AA2: E1,
        AA5: E1,
        AA1: 0,
        AA8: F0,
        AA6: [],
      }),
    );
    D10();
  };
  let D19 = (E0) => {
    let [F0, F1] = E0;
    D1(
      a32({
        AA7: F1,
        AA8: F0,
      }),
    );
    D14();
  };
  return (
    <>
      {D3 && (
        <>
          <C8 AA1={D2.A0} AA2={<C9 AA1={D2.A1} AA2={D4} AA3={D2.A1.AB5} />} />
          <C27
            AA0={[
              {
                AA11: D5,
                AA1: (
                  <C15
                    AA7={D16}
                    AA3={D9.AA8}
                    AA2={D9.AA4}
                    AA6={D9.AA3}
                    {...D2.AB8}
                  />
                ),
                AA6: D9.AA0,
                AA7: D10,
              },
              {
                AA11: D6,
                AA1: (
                  <C18
                    AA7={[
                      {
                        AA2: {
                          name: D9.AA25,
                          ...D2.AB16,
                        },
                        AA3: D9.AA21,
                        AA7: A41,
                        AA8: () => {
                          D12();
                          D20();
                        },
                      },
                      {
                        AA2: {
                          name: D9.AA18,
                          ...D2.AB16,
                        },
                        AA3: D9.AA20,
                        AA7: A8,
                        AA8: () => {
                          D12();
                          D11();
                        },
                      },
                      {
                        AA2: {
                          name: D9.AA24,
                          ...D2.AB16,
                        },
                        AA3: D9.AA26,
                        AA7: A0,
                        AA8: () => {
                          D12();
                          D14();
                        },
                      },
                    ]}
                    {...D2.AB11}
                  />
                ),
                AA6: D8?.AA7,
                AA7: D12,
              },
              {
                AA11: D13,
                AA1: <></>,
                AA6: D8?.AA7,
                AA7: D11,
              },
              {
                AA11: D18,
                AA1: (
                  <C15
                    AA7={D19}
                    AA3={D9.AA8}
                    AA2={D9.AA4}
                    AA6={D9.AA19}
                    AA9={D8?.AA8}
                    AA8={D8?.AA7}
                    {...D2.AB8}
                  />
                ),
                AA6: D9.AA16 + D9.AA15 + D8?.AA7,
                AA7: D14,
              },
            ]}
            AA1={D2.AB1}
            AA2={D9.AA1}
          />
          {D15 && <C23 {...D2.AB5} />}
        </>
      )}
      <C7 E0={a11} E1={D0} />
    </>
  );
}
function C6() {
  return (
    <>
      <A28>C6</A28>
      <A29 placeholder="C0123" />
    </>
  );
}
function C10() {
  let D5 = useDispatch();
  let D0 = useSelector(_a1);
  let D3 = useSelector(_a3);
  let D4 = useSelector(_a4);
  let D1 = () => D5(a20());
  let D2 = (E0) => {
    // console.log(E0);
    let F0 = D3.filter((G0) => G0.AA0 === E0)[0];
    D5(a60(F0));
    D5(a50());
  };
  return (
    <>
      <C12 AA5={A1} AA7={D1} AA0={D4.AA11} {...D0.AB7} />
      <A27 {...D0.AB3}>
        {D3.map((E0, E1) => (
          <A26 key={E0.AA0}>
            <C13 {...{ AA18: D4, AA19: () => D2(E0.AA0), ...E0, ...D0.AB12 }} />
            {D3.length - 1 !== E1 && <A26 {...D0.AB4} />}
          </A26>
        ))}
      </A27>
    </>
  );
}
function C11() {
  return (
    <>
      <A28>C11</A28>
      <A29 placeholder="C0123" />
    </>
  );
}

function C7({ E0, E1 }) {
  let [D0, D1] = useState(false);
  let [D2, D3] = useState("");
  let D14 = -a3 * 1.5;
  let D4 = useSharedValue(0);
  let D5 = useSharedValue(0);
  let D6 = useSharedValue(D14);
  let D7 = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(D6.value, { duration: 330 }) }],
  }));
  let D8 = useAnimatedStyle(() => ({ opacity: withSpring(D4.value) }));
  let D9 = useAnimatedStyle(() => ({
    opacity: withSpring((D4.value + 1) / 2),
  }));
  let D10 = useAnimatedStyle(() => ({
    transform: [{ rotate: `${D5.value * 180}deg` }],
  }));
  let D11 = () => D1((_) => !_);
  let D12 = () => {
    D6.value = D0 ? D14 : 0;
    D4.value = D0 ? 0 : 1;
    D5.value = withTiming(D5.value + 1, { duration: 330 });
    D11();
  };
  let D13 = () => {
    D12();
    E1(D2);
  };
  return (
    <A20
      style={[
        {
          width: "100%",
          height: a3 * 3,
          position: "absolute",
          zIndex: 1,
          top: 0,
          right: 0,
          left: 0,
        },
        D7,
      ]}
    >
      <A20
        style={[
          {
            width: "100%",
            height: a3 * 2.1,
            paddingTop: a3 * 0.6,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: E0,
          },
          D8,
        ]}
      >
        <A26
          style={[
            {
              width: "92%",
              height: a3 * 1.1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: a6,
              borderRadius: 12,
            },
          ]}
        >
          <A29
            value={D2}
            onChangeText={D3}
            style={[
              {
                width: "80%",
                height: "84%",
                fontSize: 21,
                paddingHorizontal: 6,
              },
            ]}
            placeholder="(: - | - (:) - | - :)"
          />
          <A32
            style={[
              {
                width: "15%",
                height: "84%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: E0,
                borderRadius: 12,
              },
            ]}
            underlayColor={a9}
            onPress={D13}
          >
            <A28 style={{ fontSize: 24 }}>🖐</A28>
          </A32>
        </A26>
      </A20>
      <A26
        style={[
          {
            width: "100%",
            height: a3 * 0.9,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          },
        ]}
      >
        <A17
          onPress={D12}
          underlayColor={a9}
          style={[
            {
              width: a3 * 0.75,
              height: a3 * 0.75,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: E0,
              borderRadius: 12,
            },
            D9,
          ]}
        >
          <A1 style={[D10]} name="chevron-down" size={a3 * 0.5} />
        </A17>
      </A26>
    </A20>
  );
}
function C8({ AA1, AA2 }) {
  let D0 = C16();
  return (
    <A20
      entering={SlideInDown.duration(540)}
      exiting={SlideOutDown.duration(270)}
      style={[D0, AA1]}
    >
      {AA2}
    </A20>
  );
}
function C9({ AA1: { AB0, AB1, AB3 }, AA2, AA3 }) {
  let [D0, D1] = useState(0);
  return (
    <>
      <A20 {...AB3}>
        {AA2.AA1.map((E0, E1) => E1 === D0 && <E0 key={E1} />)}
      </A20>
      <A20 style={[AB0]}>
        {AA2.AA0.map((E0, E1) => (
          <A32 key={E1} onPress={() => D1(E1)} {...AB1}>
            <E0.AA0
              name={E0.AA1}
              color={D0 === E1 ? a12 : "black"}
              style={[D0 === E1 && { transform: [{ scale: 1.26 }] }]}
              {...AA3}
            />
          </A32>
        ))}
      </A20>
    </>
  );
}
function C12({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7 }) {
  return (
    <A20 {...AA3}>
      {!isEmpty(AA0) && (
        <A26 {...AA1}>
          <A28 {...AA4}>{AA0}</A28>
        </A26>
      )}
      <A17
        // entering={FadeIn.duration(300)}
        // exiting={FadeOut.duration(300)}
        onPress={AA7}
        {...AA2}
      >
        <AA5 {...AA6} />
      </A17>
    </A20>
  );
}
function C13({
  AA1,
  AA2,
  AA3,
  AA4,
  AA5,
  AA6,
  AA7,
  AA8,
  AA9,
  AA10,
  AA11,
  AA12,
  AA13,
  AA14,
  AA15,
  AA16,
  AA17,
  AA18,
  AA19,
}) {
  let D0 = !isEmpty(AA8) ? { uri: AA8 } : require("../assets/icon.png");
  let D1 = new Date(AA2).toLocaleDateString();
  return (
    <A17 onPress={AA19} {...AA10}>
      <>
        <A26 {...AA14}>
          <A30 source={D0} {...AA13} />
        </A26>
        <A26 {...AA11}>
          <A28 {...AA12}>{AA7}</A28>
          <A28 {...AA17}>
            {AA18.AA5} {D1}
          </A28>
        </A26>
        <A26 {...AA15}>
          <A10
            name={AA4 ? AA18.AA9 : AA18.AA2}
            color={AA4 ? AA18.AA6 : AA18.AA17}
            {...AA16}
          />
        </A26>
      </>
    </A17>
  );
}
function C14({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8, AA9 }) {
  return (
    <A20 entering={FadeIn} exiting={FadeOut} {...AA2}>
      <C8
        AA1={AA0}
        AA2={
          <>
            <A26 {...AA8}>
              <A28 {...AA5}>{AA6}</A28>
              <A32 onPress={AA7} {...AA3}>
                <A0 name={AA9} {...AA4} />
              </A32>
            </A26>
            {AA1}
          </>
        }
      />
    </A20>
  );
}
function C15({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8, AA9 }) {
  let [D3, D5] = useState(AA9 ?? "");
  let [D0, D6] = useState(AA8 ?? "");
  let D1 = () => AA7([D3, D0]);
  return (
    <>
      <C19 AA0={D5} AA8={AA9} {...AA0} />
      <C17 AA1={D6} AA3={AA2} AA9={AA8} AA0={AA3} {...AA1} />
      <A32 disabled={isEmpty(D0)} onPress={D1} {...AA5}>
        <A28 {...AA4}>{AA6}</A28>
      </A32>
    </>
  );
}
function C19({ AA0, AA1, AA2, AA3, AA8 }) {
  let [D2, D7] = useState(AA8 ?? "");
  let D0 = async () => {
    let E0 = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!E0.cancelled) {
      D7(E0.uri);
      AA0(E0.uri);
    }
  };
  let D4 = isEmpty(D2) ? require("../assets/icon.png") : { uri: D2 };
  return (
    <A26 {...AA2}>
      <A32 onPress={D0} {...AA3}>
        <A30 source={D4} {...AA1} />
      </A32>
    </A26>
  );
}
function C17({ AA3, AA7, AA1, AA4, AA0, AA5, AA9 }) {
  let [D1, D3] = useState(AA9 ?? "");
  let D6 = AA0 * 1.5;
  let D10 = -0.45 * D6;
  let D12 = 0.75;
  let D7 = useRef();
  let D0 = useSharedValue(AA9 ? D12 : 1);
  let D2 = useSharedValue(AA9 ? D10 : 0);
  let D8 = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(D2.value) }],
  }));
  let D5 = useAnimatedStyle(() => ({
    fontSize: withSpring((D6 * D0.value) / 3),
  }));
  let D13 = () => {
    if (isEmpty(D1)) {
      D2.value = 0;
      D0.value = 1;
    }
  };
  let D4 = () => {
    D2.value = D10;
    D0.value = D12;
    D7.current.focus();
  };
  let D9 = (E0) => {
    D3(E0);
    AA1(E0);
  };
  return (
    <A26 style={[{ height: D6 }, AA5]}>
      <A22 onPress={D4} style={[AA7, D5, D8, { top: D6 * 0.1 }]}>
        {AA3}
      </A22>
      <A29
        ref={D7}
        value={D1}
        onChangeText={D9}
        onFocus={D4}
        onBlur={D13}
        style={[{ height: D6 * 0.9 }, AA4]}
      />
    </A26>
  );
}
function C18({ AA0, AA3, AA7 }) {
  return (
    <A27 {...AA3}>
      {AA7.map((E0, E1) => (
        <C20 key={E1} {...{ ...E0, ...AA0 }} />
      ))}
    </A27>
  );
}
function C20({ AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8 }) {
  return (
    <A32 onPress={AA8} {...AA1}>
      <>
        <A20 {...AA4}>
          <AA7 {...AA2} />
        </A20>
        <A26 {...AA6}>
          <A28 {...AA5}>{AA3}</A28>
        </A26>
      </>
    </A32>
  );
}
function C27({ AA0, AA1, AA2 }) {
  return AA0.map(
    (E0, E1) => E0.AA11 && <C14 key={E1} AA9={AA2} {...{ ...E0, ...AA1 }} />,
  );
}
function C23({ AA0, AA1, AA2, AA3, AA5, AA6, AA7, AA8, AA9 }) {
  let [D6, D2] = useState(AA5);
  let D3 = useSelector(_a10);
  let D1 = () => {};
  return (
    <A20 entering={B0.A1.AB0} exiting={B0.A1.AB1} {...AA3}>
      <A26 {...AA7}>
        <A26 {...AA2}></A26>
      </A26>
    </A20>
  );
}

function C33({}) {
  return <A17></A17>;
}

function C29({ AA0, AA1, AA2, AA3 }) {
  return (
    <A26 {...AA2}>
      {/* {AA0.map((E0, E1) => (
        <C30 key={E1} AA0={E1} AA1={E0} AA3={AA3} />
      ))} */}
      {AA0.map((E0, E1) => (
        <C22 key={E1} AA0={E0} AA1={AA3} AA2={E1} />
      ))}
    </A26>
  );
}

function C30({ AA0, AA1, AA3 }) {
  let D1 = useSharedValue(false);
  let D3 = useSharedValue(0);
  let D4 = useSharedValue(0);
  let D9 = useSelector(_a4);
  let [D5, D6] = useState(false);
  let D7 = () => D6((E6) => !E6);
  let D8 = useAnimatedGestureHandler({
    onStart(E0, E1) {
      D1.value = true;
      E1.D3 = D3.value;
      E1.D4 = D4.value;
    },
    onActive({ translationX, translationY }, E1) {
      D3.value = translationX + E1.D3;
      D4.value = translationY + E1.D4;
    },
    onEnd(E0, E1) {
      E1.D3 = D3.value;
      E1.D4 = D4.value;
      D1.value = false;
    },
  });
  // let D0 = useDerivedValue(() => ())
  let D0 = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: D3.value,
      },
      {
        translateY: D4.value,
      },
    ],
    zIndex: D1.value ? D9.AA14 : D9.AA22,
    top: AA0 * (D9.AA23 + D9.AA22),
  }));
  return (
    <A20 style={[D0, AA3]}>
      <PanGestureHandler onGestureEvent={D8}>
        <A20 style={StyleSheet.absoluteFill}>{AA1}</A20>
      </PanGestureHandler>
    </A20>
  );
}

function C22({ AA0, AA1, AA2 }) {
  let D8 = useSharedValue(false);
  let D0 = useSharedValue(0);
  let D4 = useSharedValue(0);
  let D2 = useSharedValue(0);
  let D9 = useSharedValue(0);
  let D7 = useSelector(_a4);
  let D1 = Gesture.LongPress()
    .minDuration(1000)
    .onStart(() => {
      D8.value = true;
      // runOnJS(Alert.alert)("fine");
    });
  let D3 = Gesture.Pan()
    .manualActivation(true)
    .onTouchesMove((E0, E1) => {
      if (D8.value) E1.activate();
      else E1.fail();
    })
    .onUpdate(({ translationX, translationY }) => {
      D0.value = translationY + D9.value;
      D4.value = translationX + D2.value;
    })
    .onEnd((E0) => {
      D2.value = D4.value;
      D9.value = D0.value;
    })
    .onTouchesUp(() => {
      D8.value = false;
    });
  let D6 = useAnimatedStyle(() => ({
    transform: [{ translateX: D4.value }, { translateY: D0.value }],
    zIndex: D8.value ? D7.AA14 : D7.AA22,
    top: AA2 * (D7.AA23 + D7.AA22),
  }));
  let D5 = Gesture.Simultaneous(D1, D3);
  return (
    <GestureDetector gesture={D5}>
      <A20 style={[AA1, D6]}>{AA0}</A20>
    </GestureDetector>
  );
}
// 32 => 29 => 202
