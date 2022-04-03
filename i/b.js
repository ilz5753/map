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
      {!isNull(F5) && !isNull(F4) && (
        <>
          <B9
            AA0={[
              {
                AA1: F6,
                AA4: A24,
                AA6: F4?.AA5,
                AA5: <B4 AA3={F15} {...F5.F1} />,
              },
            ]}
            AA1={F5.F0}
            AA2={F4?.AA22}
          />
          <B9
            AA0={[
              {
                G0: F7,
                // AA6: F5.AA8,
                AA5: (
                  <>
                    <B3 AA1={F4?.AA8} AA6={F6} AA0={A20} {...F5.F6} />
                    <A2 {...F5.F7}>
                      <B8
                        AA0=""
                        AA1=""
                        AA9={F4?.AA20}
                        AA7={F4?.AA21}
                        AA10={F4?.AA12}
                        AA8={F9}
                        {...F5.F4}
                      />
                    </A2>
                  </>
                ),
              },
              {
                G0: F13,
                AA5: (
                  <>
                    <B3 AA1={F10?.AA6} AA6={F16} AA0={A20} {...F5.F6} />
                    <A2 {...F5.F7}>
                      <B11
                        AA1={[
                          {
                            AA0: A38,
                            AA4: F4?.AA14,
                            AA8: () => {},
                            AA9: F4?.AA15,
                          },
                          {
                            AA0: A20,
                            AA4: F4?.AA16,
                            AA8: () => {
                              F16();
                              F3(_4000());
                              setTimeout(F19, 250);
                            },
                            AA9: F4?.AA17,
                          },
                          {
                            AA0: A38,
                            AA4: F4?.AA18,
                            AA8: () => {},
                            AA9: F4?.AA19,
                          },
                        ]}
                        {...F5.F5}
                      />
                    </A2>
                  </>
                ),
              },
            ]}
            AA1={F5.F2}
            AA2={F4?.AA22}
          />
          <B9
            AA0={[
              {
                G0: F17,
                AA1: F19,
                AA4: A20,
                AA6: F4?.AA25,
                AA5: <B12 AA5={F20} {...F5.F9} />,
              },
            ]}
            AA1={F5.F8}
            AA2={F4?.AA24}
          />
          <B9
            AA0={[
              {
                G0: F21,
                AA5: (
                  <>
                    <B3 AA1={F24?.AB0.AA6} AA6={F23} AA0={A20} {...F5.F6} />
                    <F25 />
                  </>
                ),
              },
            ]}
            AA1={F5.F2}
            AA2={F4?.AA22}
          />
        </>
      )}
      <C0 E0={A217} E2={F0.top} E1={F1} />
    </>
  );
}
function B2({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7 }) {
  let F0 = C5(AA7);
  return (
    <A1
      entering={A94.duration(250)}
      exiting={A95.duration(500)}
      layout={A136.springify()}
      {...AA0}
    >
      {AA3 && <B3 AA6={AA1} AA0={AA4} AA1={AA6} {...AA3} />}
      <A1
        entering={A58.duration(500)}
        exiting={A59.duration(250)}
        layout={A136.springify()}
        style={[AA2, F0]}
      >
        {AA5}
      </A1>
    </A1>
  );
}
function B3({ AA0, AA1, AA2, AA3, AA4, AA5, AA6 }) {
  return (
    <A0 {...AA2}>
      <A4 {...AA4}>{AA1}</A4>
      <A12 onPress={AA6} {...AA3}>
        <AA0 {...AA5} />
      </A12>
    </A0>
  );
}
function B4({ AA0, AA1, AA3, AA7, AA8 }) {
  let F0 = useSelector(_2);
  return (
    <A2 {...AA1}>
      {F0.map((G0, G1) => (
        <A0 key={G0.AA0} {...AA7}>
          <B5 AA9={() => AA3(G0.AA0)} {...{ ...AA0, ...G0 }} />
          {F0.length - 1 !== G1 && <A0 {...AA8} />}
        </A0>
      ))}
    </A2>
  );
}
function B5({ AA10, AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8, AA9 }) {
  let F0 = A223(AA8);
  return (
    <A13
      entering={A222.AA0.AA0}
      exiting={A222.AA0.AA1}
      layout={A136.springify()}
      onPress={AA9}
      {...AA10}
    >
      <>
        <A0 {...AA1}>
          <A8 source={F0} {...AA2} />
        </A0>
        <A0 {...AA5}>
          <A4 {...AA7}>{AA6}</A4>
          <A4 {...AA3}>{C2(AA4)}</A4>
        </A0>
      </>
    </A13>
  );
}
function B6({ AA0, AA1, AA2, AA3, AA4 }) {
  let F0 = A223(AA2);
  let F1 = () => C1(AA0);
  return (
    <A0 {...AA4}>
      <A12 onPress={F1} {...AA3}>
        <A8 source={F0} {...AA1} />
      </A12>
    </A0>
  );
}
function B7({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8 }) {
  let [F0, F1] = useState(AA8 ?? "");
  let F11 = useRef();
  let F6 = 1.5 * AA4;
  let F4 = useSharedValue(1);
  let F5 = useSharedValue(0);
  let F7 = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(F5.value) }],
  }));
  let F8 = useAnimatedStyle(() => ({
    fontSize: withSpring((F6 * F4.value) / 3),
  }));
  let F2 = () => {
    if (!F0) {
      F4.value = 1;
      F5.value = 0;
    }
  };
  let F3 = () => {
    F4.value = 0.8;
    F5.value = -F6 * 0.45;
    F11.current.focus();
  };
  let F9 = (G0) => {
    F1(G0);
    AA7(G0);
  };
  return (
    <A0 style={[AA2, { height: F6 }]}>
      <A6
        ref={F11}
        onChangeText={F9}
        value={F0}
        onBlur={F2}
        onFocus={F3}
        {...AA3}
      />
      {AA0 && (
        <A5 onPress={F3} style={[{ top: F6 / 6 }, AA1, F7, F8]}>
          {AA0}
        </A5>
      )}
    </A0>
  );
}
function B8({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8, AA9, AA10 }) {
  let [F0, F1] = useState(AA0 ?? "");
  let [F2, F3] = useState(AA1 ?? "");
  let F4 = () => AA8(F0, F2);
  return (
    <>
      <B6 AA0={F1} AA2={F0} {...AA2} />
      <B7 AA8={F2} AA7={F3} AA4={AA9} AA0={AA10} {...AA3} />
      <A0 {...AA4}>
        <A12 onPress={F4} disabled={isEmpty(F2)} {...AA5}>
          <A4 {...AA6}>{AA7}</A4>
        </A12>
      </A0>
    </>
  );
}
function B9({ AA0, AA1, AA2 }) {
  return AA0.map((G0, G1) => {
    let G2 = G0.G0 ?? true;
    return (
      G2 && (
        <B2
          key={G1}
          AA7={AA2}
          {...{
            ...AA1,
            ...G0,
          }}
        />
      )
    );
  });
}
function B10({ AA0, AA1, AA2, AA3, AA4, AA5, AA8, AA9 }) {
  return (
    <A13
      entering={A62.duration(600)}
      exiting={A65.duration(250)}
      layout={A136.springify()}
      onPress={AA8}
      {...AA3}
    >
      <>
        <A0 {...AA2}>
          <AA0 name={AA9} {...AA5} />
        </A0>
        <A4 {...AA1}>{AA4}</A4>
      </>
    </A13>
  );
}
function B11({ AA0, AA1, AA3, AA4, AA5 }) {
  return (
    <A2 {...AA4}>
      {AA1.map((G0, G1) => (
        <A0 key={G1} {...AA3}>
          <B10
            {...{
              ...G0,
              ...AA0,
            }}
          />
          {G1 !== AA1?.length - 1 && <A0 {...AA5} />}
        </A0>
      ))}
    </A2>
  );
}
function B12({ AA0, AA1, AA2, AA3, AA4, AA5 }) {
  let F0 = useSelector(_4);
  return (
    <A2 {...AA1}>
      <A2 {...AA2}>
        <B13 AA0={AA4} AA10={AA5} {...F0} />
      </A2>
    </A2>
  );
}
function B13({ AB0, AB1, AA0, AA10 }) {
  let { AA1, AA2, AA3, AA4 } = AA0;
  return (
    <A0 {...AA1}>
      <A0 {...AA2}>
        <B14
          {...{
            AB0,
            AA4,
            AA10,
          }}
        />
      </A0>
      {AB1.length !== 0 && (
        <A0 {...AA3}>
          {AB1?.map((E0) => (
            <B13 key={E0.AB0.AA0} AA0={AA0} AA10={AA10} {...E0} />
          ))}
        </A0>
      )}
    </A0>
  );
}
function B14({ AB0, AA4: { AA0, AA1, AA2, AA5 }, AA10 }) {
  let F0 = () => AA10(AB0.AB4);
  return (
    <A1 entering={A94} exiting={A95} layout={A136.springify()} {...AA0}>
      <A12 onPress={F0} {...AA1}>
        <>
          {AB0.AA8 ? (
            <A8 source={{ uri: AB0.AA8 }} {...AA2} />
          ) : (
            <A0 {...AA2} />
          )}
          <A4 {...AA5}>{AB0.AA6}</A4>
        </>
      </A12>
    </A1>
  );
}
let B15 =
  ({ AA4, AA1, AA3 }) =>
  ({ AA0, AA2, AA5 }) =>
    (
      <A0 {...AA4}>
        <A0 {...AA1}>
          <A4 {...AA3}>{AA5}</A4>
        </A0>
        <A0 {...AA0}>{AA2}</A0>
      </A0>
    );
