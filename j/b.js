import React, { useRef, useState } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { isNull, isEmpty } from "lodash";
import {
  A0,
  A1,
  A12,
  A13,
  A20,
  A204,
  A217,
  A22,
  A225,
  A24,
  A4,
  A58,
  A59,
  A60,
  A61,
  A62,
  A63,
  A64,
  A65,
  A94,
  A95,
  A221,
  A2,
  A136,
  A8,
  A223,
  A6,
  A5,
  A92,
} from "./a";
import { C0, C1, C2, C8 } from "./c";
import { D1, _0, _1, _2, _0000, _1000, _2000, _3, _3000 } from "./d";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { B100 } from "./e";
export default function B() {
  return (
    <SafeAreaProvider>
      <A204 store={D1}>
        <B100 />
      </A204>
    </SafeAreaProvider>
  );
}
function B0() {
  let F3 = useDispatch();
  let F0 = useSafeAreaInsets();
  let F4 = useSelector(_2);
  let F8 = useSelector(_0);
  let F9 = useSelector(_1);
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
      //   console.log(G2);
      F3(_0000(G2.G0));
      F3(_1000(G2.G1));
      F3(_2000(G2.G2));
    } catch (G1) {
      alert(G1);
    }
  };
  return (
    <>
      {!isNull(F4) && !isNull(F8) && !isNull(F9) && (
        <B100 {...{ F4, F8, F9 }} />
      )}
      <C0 E0={A217} E2={F0.top} E1={F1} />
    </>
  );
}
function B1({ F4, F8, F9 }) {
  let F13 = useDispatch();
  let F0 = useSelector(_3);
  let [F5, F6] = useState({
    AA0: false,
    AA1: false,
    AA2: false,
  });
  let { G0, G1, G3, G4, G5, G6 } = B3(F9);
  let F7 = (F7) =>
    F6((F6) => {
      switch (F7) {
        case "0":
          return { ...F6, AA0: !F6.AA0 };
        case "1":
          return { ...F6, AA1: !F6.AA1 };
        case "2":
          return { ...F6, AA2: !F6.AA2 };
        default:
          return F6;
      }
    });
  let F11 = () => F7("0");
  let F12 = (H0, H1) => {
    // console.log(H0, H1);
    let I0 = new Date().getTime();
    F13(
      _3000({
        AA4: C8(),
        AA7: I0,
        AA8: H0,
        AA9: H1,
      }),
    );
    F11();
  };
  let F3 = {
    AA5: [
      {
        AA0: A24,
        AA1: F11,
        AA2: F8.A1006,
      },
    ],
    AA6: [],
    AA7: F8.A1005,
  };
  let F10 = [
    {
      AA0: (
        <B11
          {...{
            AA0: {
              AA4: A20,
              AA5: F11,
              AA6: F8.A1008,
              AA8: F8.A1009,
            },
            AA1: {
              AA3: F8.A9,
              AA4: F8.A1010,
            },
            AA2: G4,
            AA4: F12,
            AA5: G5,
            AA6: G6,
            AA7: F8.A1011,
            AA8: F9.E7,
          }}
        />
      ),
      AA2: F5.AA0,
    },
  ];
  let F16 = (H0) => {
    console.log(H0);
  };
  return (
    <>
      <G0 AA2={F3}>
        <G1 AA4={F0} AA5={F16} />
      </G0>
      <G3 AA5={F10} />
    </>
  );
}
function B3(E0) {
  let G0 = B4(E0.E0),
    G1 = B6(E0.E1),
    // G2 = B7(E0.E2),
    G3 = B8(E0.E3),
    G4 = B9(E0.E4),
    G5 = B10(E0.E5),
    G6 = B12(E0.E6);
  return {
    G0,
    G1,
    // G2,
    G3,
    G4,
    G5,
    G6,
  };
}
let B4 =
  ({ AA0, AA1, AA3 = {} }) =>
  ({ children, AA2 }) => {
    let G0 = B5(AA3);
    return (
      <A1 entering={A94} exiting={A95} {...AA0}>
        {AA2 && <G0 {...AA2} />}
        <A1 entering={A58} exiting={A59} {...AA1}>
          {children}
        </A1>
      </A1>
    );
  };
let B5 =
  ({ AA0, AA1, AA2, AA3, AA4, AA8 }) =>
  ({ AA5, AA6, AA7 }) => {
    let F0 = AA6.length;
    return (
      <A1
        // entering={A60}
        // exiting={A61.duration(F0 * 150 + 500)}
        // layout={A136.springify()}
        {...AA1}
      >
        <A1
          //   entering={A62.duration(350)}
          //   exiting={A63.duration(F0 * 150 + 350)}
          //   layout={A136.springify()}
          {...AA3}
        >
          {AA6.map((E0, E1) => (
            <A13
              key={E1}
              onPress={E0.AA1}
              //   entering={A62.duration(E1 * 150 + 350)}
              //   exiting={A63.duration(E1 * 150 + 350)}
              //   layout={A136.springify()}
              {...AA2}
            >
              <E0.AA0 name={E0.AA2} {...AA0} />
            </A13>
          ))}
        </A1>
        <A0 {...AA8}>
          <A4 {...AA4}>{AA7}</A4>
        </A0>
        <A1
          //   entering={A64.duration(350)}
          //   exiting={A65.duration(F0 * 150 + 350)}
          //   layout={A136.springify()}
          {...AA3}
        >
          {AA5.map((E0, E1) => (
            <A13
              key={E1}
              onPress={E0.AA1}
              //   entering={A64.duration(E1 * 150 + 350)}
              //   exiting={A65.duration(E1 * 150 + 350)}
              //   layout={A136.springify()}
              {...AA2}
            >
              <E0.AA0 name={E0.AA2} {...AA0} />
            </A13>
          ))}
        </A1>
      </A1>
    );
  };
let B6 =
  ({ AA0, AA1, AA2, AA3 }) =>
  ({ AA4, AA5 }) => {
    let F0 = B7(AA3);
    return (
      <A2 {...AA1}>
        {AA4.map((E0, E1) => (
          <A0 key={E0.AA4} {...AA2}>
            <F0 AA6={() => AA5(E0)} {...E0} />
            {E1 !== AA4.length - 1 && (
              <A1
                entering={A64}
                exiting={A65}
                layout={A136.springify()}
                {...AA0}
              />
            )}
          </A0>
        ))}
      </A2>
    );
  };
let B7 =
  ({ AA0, AA1, AA2, AA3, AA4, AA5 }) =>
  ({ AA6, AA7, AA8, AA9 }) => {
    let F0 = A223(AA8);
    return (
      <A13
        onPress={AA6}
        entering={A62}
        exiting={A65}
        layout={A136.springify()}
        {...AA0}
      >
        <>
          <A0 {...AA2}>
            <A8 source={F0} {...AA4} />
          </A0>
          <A0 {...AA1}>
            <A4 {...AA3}>{AA9}</A4>
            <A4 {...AA5}>{C2(AA7)}</A4>
          </A0>
        </>
      </A13>
    );
  };
let B8 =
  ({ AA0 }) =>
  ({ AA5 }) => {
    // console.log(AA0);
    let G0 = B4(AA0);
    return AA5.map((E0, E1) => E0.AA2 && <G0 key={E1}>{E0.AA0}</G0>);
  };
let B9 =
  ({ AA0, AA1, AA2, AA3 }) =>
  ({ AA4, AA5, AA6, AA8 }) => {
    let F0 = (
      <A12 onPress={AA5} {...AA1}>
        <AA4 name={AA6} {...AA3} />
      </A12>
    );
    return (
      <A0 {...AA2}>
        <A4 {...AA0}>{AA8}</A4>
        {F0}
      </A0>
    );
  };
let B10 =
  ({ AA0, AA1, AA2 }) =>
  ({ AA3, AA4 }) => {
    let F0 = () => C1(AA3),
      F1 = A223(AA4);
    return (
      <A0 {...AA1}>
        <A12 onPress={F0} {...AA0}>
          <A8 source={F1} {...AA2} />
        </A12>
      </A0>
    );
  };
let B12 =
  ({ AA0, AA1, AA2 }) =>
  ({ AA3, AA4, AA5, AA6 }) => {
    let F12 = useRef();
    let [F1, F2] = useState(AA6 ?? "");
    let F6 = AA3 * 1.5;
    let F16 = F6 / 2.7;
    let F0 = useSharedValue(0);
    let F5 = useSharedValue(1);
    let F10 = useAnimatedStyle(() => ({
      transform: [{ translateY: withSpring(F0.value) }],
    }));
    let F11 = useAnimatedStyle(() => ({
      fontSize: withSpring(F16 * F5.value),
    }));
    let F7 = () => {
      F0.value = -F6 * 0.45;
      F5.value = 0.77;
      F12.current.focus();
    };
    let F9 = () => {
      if (!F1) {
        F0.value = 0;
        F5.value = 1;
      }
    };
    let F8 = (E0) => {
      F2(E0);
      AA5(E0);
    };
    return (
      <A0 style={[AA2, { height: F6 }]}>
        <A6
          ref={F12}
          value={F1}
          onChangeText={F8}
          onFocus={F7}
          onBlur={F9}
          style={[AA0, { height: F6 * 0.9, fontSize: F16 * 0.88 }]}
        />
        {AA4 && (
          <A5 onPress={F7} style={[AA1, F10, F11]}>
            {AA4}
          </A5>
        )}
      </A0>
    );
  };
let B13 =
  ({ AA0, AA1, AA2 }) =>
  ({ AA3, AA4, AA5 }) => {
    return (
      <A0 {...AA2}>
        <A12 disabled={AA4} onPress={AA5} {...AA0}>
          {AA3}
        </A12>
        {AA4 && <A1 entering={A94} exiting={A95} layout={A92} {...AA1} />}
      </A0>
    );
  };
let B11 = ({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8 }) => {
  let [F0, F1] = useState("");
  let [F2, F3] = useState("");
  let F5 = () => AA4(F0, F2);
  let F6 = B13(AA8.AA0);
  return (
    <>
      <AA2 {...AA0} />
      <AA5 AA3={F1} AA4={F0} />
      <AA6 AA5={F3} AA6={F2} {...AA1} />
      <F6 AA3={<A4 {...AA8.AA1}>{AA7}</A4>} AA4={isEmpty(F2)} AA5={F5} />
    </>
  );
};
