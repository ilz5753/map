import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { isNull, isEmpty } from "lodash";
import {
  A204,
  A217,
  A200,
  A201,
  A221,
  A1,
  A4,
  A12,
  A24,
  A0,
  A2,
  A222,
  A136,
  A8,
  A223,
  A13,
  A58,
  A59,
  A66,
  A67,
  A94,
  A95,
  A20,
  A6,
  A5,
  A120,
  A121,
  A38,
  A78,
  A81,
  A62,
  A65,
} from "./a";
import { C0, C1, C2, C5 } from "./c";
import {
  D1,
  _0,
  _0000,
  _1,
  _1000,
  _2,
  _2000,
  _2001,
  _3,
  _3001,
  _4,
  _4000,
  _5,
  _5000,
} from "./d";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
export default function B1() {
  return (
    <SafeAreaProvider>
      <A204 store={D1}>
        <B0 />
      </A204>
    </SafeAreaProvider>
  );
}

function B0() {
  let F3 = useDispatch();
  let F0 = useSafeAreaInsets();
  let [F7, F8] = useState(false);
  let [F13, F14] = useState(false);
  let [F17, F18] = useState(false);
  let [F21, F22] = useState(false);
  let F4 = useSelector(_0);
  let F5 = useSelector(_1);
  let F12 = useSelector(_2);
  let F10 = useSelector(_3);
  let F24 = useSelector(_5);
  let F2 = { F0, ...A221 };
  let F1 = async (G0) => {
    try {
      let G2 = await fetch(G0, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(F2),
      }).then((G2) => G2.json());
      F3(_1000(G2.G1));
      F3(_0000(G2.G0));
    } catch (G1) {
      alert(G1);
    }
  };
  let F6 = () => F8((F8) => !F8);
  let F16 = () => F14((F14) => !F14);
  let F19 = () => F18((F18) => !F18);
  let F23 = () => F22((F22) => !F22);
  let F9 = (G0, G1) => {
    let G2 = new Date().getTime();
    F6();
    F3(
      _2001({
        AA0: F12.length,
        AA6: G1,
        AA8: G0,
        AA4: G2,
        AB0: G2,
        AB1: F4?.AA26,
        AB2: {
          AB0: {
            AA0: F4?.AA28,
            AA6: F4?.AA29,
            AA4: G2,
            AB0: G2,
            AA8: F4?.AA30,
            AB3: F4?.AA31,
            AB4: F4?.AA30,
          },
          AB1: [],
        },
      }),
    );
  };
  let F15 = (G0) => {
    F3(_3001(G0));
    F16();
  };
  let F20 = (G0) => {
    F3(_5000(G0));
    F23();
  };
  let F25 = B15({});
  return (
    <>
      {!isNull() && !isNull() && <B1 />}
      <C0 E0={A217} E2={F0.top} E1={F1} />
    </>
  );
}
function B1() {}
