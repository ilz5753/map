import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { isNull, isEmpty } from "lodash";
import {
  A0,
  A1,
  A12,
  A13,
  A136,
  A137,
  A138,
  A2,
  A20,
  A217,
  A221,
  A222,
  A223,
  A225,
  A24,
  A25,
  A28,
  A38,
  A39,
  A4,
  A400,
  A5,
  A58,
  A59,
  A6,
  A60,
  A61,
  A62,
  A63,
  A64,
  A65,
  A66,
  A67,
  A68,
  A69,
  A7,
  A8,
  A90,
  A92,
  A93,
  A94,
  A95,
} from "./a";
import { C0, C1, C10, C11, C12, C2, C5, C8, C9 } from "./c";
import {
  D1,
  _0,
  _1,
  _2,
  _0000,
  _1000,
  _2000,
  _3,
  _3000,
  _4,
  _4000,
  _5,
  _5000,
  _6,
  _6000,
  _6001,
  _5001,
  _7,
  _7001,
  _7000,
  _8000,
  _8,
  _9,
  _9000,
  _10,
  _10000,
  _8001,
  _10001,
  _10005,
  _10004,
  _11000,
  _11001,
} from "./d";
import React, { useEffect, useRef, useState } from "react";
import B10000 from "./f";
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
} from "react-native-gesture-handler";
export function B100() {
  let F0 = useSafeAreaInsets();
  let F3 = useDispatch();
  let F4 = useSelector(_2);
  let F8 = useSelector(_0);
  let F9 = useSelector(_1);
  let F14 = useSelector(_4);
  let F16 = useSelector(_3);
  let F21 = useSelector(_6);
  let F26 = useSelector(_5);
  let F34 = useSelector(_7);
  let F37 = useSelector(_8);
  let F39 = useSelector(_9);
  let F38 = useSelector(_10);
  let [F5, F6] = useState({
    AA0: false,
    AA1: false,
    AA2: false,
    AA3: false,
    AA4: false,
    AA5: false,
    AA6: false,
    AA7: false,
    AA8: false,
    AA9: false,
    AA10: false,
    AA11: false,
  });
  let F10 = (F10) =>
    F6((F6) => {
      switch (F10) {
        case "0":
          return { ...F6, AA0: !F6.AA0 };
        case "1":
          return { ...F6, AA1: !F6.AA1 };
        case "2":
          return { ...F6, AA2: !F6.AA2 };
        case "3":
          return { ...F6, AA3: !F6.AA3 };
        case "4":
          return { ...F6, AA4: !F6.AA4 };
        case "5":
          return { ...F6, AA5: !F6.AA5 };
        case "6":
          return { ...F6, AA6: !F6.AA6 };
        case "7":
          return { ...F6, AA7: !F6.AA7 };
        case "8":
          return { ...F6, AA8: !F6.AA8 };
        case "9":
          return { ...F6, AA9: !F6.AA3 };
        case "10":
          return { ...F6, AA10: !F6.AA10 };
        case "11":
          return { ...F6, AA11: !F6.AA11 };
        default:
          return F6;
      }
    });
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
      F3(_9000(G2.G9));
      F3(_0000(G2.G0));
      F3(_1000(G2.G1));
      F3(_2000(G2.G2));
    } catch (G1) {
      alert(G1);
    }
  };
  let F11 = () => F10("0");
  let F15 = () => F10("1");
  let F17 = () => F10("2");
  let F20 = () => F10("3");
  let F18 = () => F10("4");
  let F23 = () => F10("5");
  let F27 = () => F10("6");
  let F29 = () => F10("7");
  let F33 = () => F10("8"); //  other bools
  let F28 = () => F10("9");
  let F31 = () => F10("10");
  let F32 = () => F10("11");
  let F12 = (H0, H1) => {
    // console.log(H0, H1);
    let I0 = new Date().getTime();
    F11();
    F3(
      _3000({
        AA4: C8(),
        AA7: I0,
        AA8: H0,
        AA9: H1,
        AA11: {
          AA0: {
            AA5: C8(),
            AA3: I0,
            AA6: F8?.A1022,
            AA1: F8?.A33,
            AA0: F8?.A1023,
            AA2: F8?.A1023,
            AA4: F8?.A1036,
            AA7: {
              AA2: C8(),
              AA8: {
                AA4: {
                  AA3: C8(),
                  AA7: F8?.A1041,
                  AA1: F8?.A1041,
                  AA4: [
                    {
                      AA0: F8?.A1200,
                      AA1: C8(),
                    },
                    {
                      AA0: F8?.A1201,
                      AA1: [],
                    },
                  ],
                  AA5: F8?.A1023,
                },
                AA6: [],
              },
              AA1: {
                AA2: [
                  {
                    AA1: F8?.A1400,
                    AA6: F8?.A33,
                    AA3: F8?.A30,
                  },
                ],
                AA0: [
                  {
                    AA1: F8?.A1401,
                    AA6: [],
                    AA5: F8?.A1023,
                    AA3: F8?.A29,
                  },
                ],
              },
            },
          },
          AA1: [],
        },
      }),
    );
  };
  let F13 = (H0) => {
    F3(_4000(H0));
    F15();
  };
  let F19 = (H0) => {
    F3(_6000(H0));
    F23();
  };
  let F24 = ({ F1, AA1, AA2, F6, F7 }) => {
    F20();
    let { E0, E1 } = F7;
    let I0 = new Date().getTime(),
      I1 = F21.AA0.AA2,
      I2 = isEmpty(I1),
      I3 = `${I1}${I2 ? "" : "."}`;
    let G0 = AA1.AA3 !== AA2.AA3,
      G1 = G0
        ? E1.concat(
            E0.map(({ AA0 }, E2) => ({
              AA0: {
                AA5: C8(),
                AA3: I0,
                AA6: AA0,
                AA1: F8?.A33,
                AA0: F8?.A1023,
                AA2: `${I3}AA1[${E2 + E1.length}]`,
                AA4: F8?.A1036,
              },
              AA1: [],
            })),
          )
        : [];
    setTimeout(
      () =>
        F3(
          _6001({
            AA0: {
              AA6: F1,
              AA4: AA1.AA3,
            },
            AA1: G1,
          }),
        ),
      A225 * 3,
    );
  };
  let F30 = () => {
    F17();
    setTimeout(() => F3(_5001()), A225 * 3);
  };
  let F35 = (H0) => {
    alert(H0);
    F3(_7001(H0));
    // F3(_11000(F8?.A1201));
    F29();
  };
  let F36 = (H0) => {
    // console.log(H0);
    F3(_8000(H0));
    F3(_10000());
    setTimeout(F33, A225);
  };
  let F40 = (H0) => {
    console.log(H0);
    F3(_10004(H0));
    F33();
  };
  let F41 = () => {
    F3(_10005(F8?.A1201));
    F3(_11001());
    F29();
  };
  return (
    <>
      {!isNull(F4) && !isNull(F8) && !isNull(F9) && (
        <>
          <B108
            AA5={[
              {
                AA0: <B109 AA5={F13} AA4={F16} {...F9.F4} />,
                AA1: {
                  AA5: [
                    {
                      AA0: A24,
                      AA1: F11,
                      AA2: F8?.A1006,
                    },
                  ],
                  AA6: [],
                  AA7: F8?.A1005,
                },
                AA2: F8?.A2000,
                AA3: F8?.A11,
              },
              {
                AA0: <B114 AA4={F19} {...F9.F6} />,
                AA1: {
                  AA5: [],
                  AA6: [
                    {
                      AA0: A24,
                      AA1: F30,
                      AA2: F8?.A1021,
                    },
                  ],
                  AA7: F8?.A1020,
                },
                AA2: F5.AA2,
                AA3: F8?.A11,
              },
              {
                AA0: (
                  <B124
                    AA0={F5.AA6}
                    AA2={{
                      AA5: F35,
                      AA7: F9.F8,
                      ...F34,
                    }}
                  />
                ),
                AA1: {
                  AA5: [
                    {
                      AA0: A24,
                      AA1: F27,
                      AA2: F8?.A1600,
                    },
                  ],
                  AA6: [
                    {
                      AA0: A24,
                      AA1: F18,
                      AA2: F8?.A1021,
                    },
                  ],
                  AA7: F21?.AA0?.AA6,
                },
                AA2: F5.AA4,
                AA3: F8?.A11,
              },
            ]}
            AA7={F9.F0}
          />
          <B108
            AA5={[
              {
                AA0: (
                  <>
                    <B103
                      AA2={F9.F2}
                      AA3={{
                        AA5: [
                          {
                            AA0: A20,
                            AA1: F11,
                            AA2: F8?.A1008,
                          },
                        ],
                        AA6: [],
                        AA7: F8?.A1009,
                      }}
                    />
                    <B107
                      AA0={F8?.A1010}
                      AA2={F8?.A9}
                      AA4={F12}
                      AA7={F8?.A1011}
                      {...F9.F3}
                    />
                  </>
                ),
                AA2: F5.AA0,
                AA3: F8?.A11,
              },
              {
                AA0: (
                  <>
                    <B103
                      AA2={F9.F2}
                      AA3={{
                        AA5: [
                          {
                            AA0: A20,
                            AA1: F15,
                            AA2: F8?.A1008,
                          },
                        ],
                        AA6: [],
                        AA7: F14?.AA9,
                      }}
                    />
                    <B111
                      AA3={[
                        {
                          AA0: A38,
                          AA3: F8?.A1014,
                          AA6: F8?.A1015,
                          AA7: () => {
                            F15();
                            setTimeout(F18, A225);
                          },
                        },
                        {
                          AA0: A28,
                          AA3: F8?.A1016,
                          AA6: F8?.A1017,
                          AA7: () => {
                            F15();
                            F3(_5000());
                            setTimeout(F17, A225);
                          },
                        },
                        {
                          AA0: A38,
                          AA3: F8?.A1018,
                          AA6: F8?.A1019,
                          AA7: () => {},
                        },
                      ]}
                      {...F9.F5}
                    />
                  </>
                ),
                AA2: F5.AA1,
                AA3: F8?.A11,
              },
              {
                AA0: (
                  <>
                    <B103
                      AA2={F9.F2}
                      AA3={{
                        AA5: [
                          {
                            AA0: A20,
                            AA1: F23,
                            AA2: F8?.A1008,
                          },
                        ],
                        AA6: [],
                        AA7: F21?.AA0?.AA6,
                      }}
                    />
                    <B111
                      AA3={[
                        {
                          AA0: A28,
                          AA3: F8?.A1016,
                          AA6: F8?.A1017,
                          AA7: () => {
                            F23();
                            F3(_7000());
                            setTimeout(F18, A225);
                          },
                          // AA9: F21?.AA0?.AA4 !== F8?.A1036,
                        },
                        {
                          AA0: A38,
                          AA3: F8?.A1018,
                          AA6: F8?.A1019,
                          AA7: () => {
                            F23();
                            setTimeout(F20, A225);
                          },
                        },
                      ]}
                      {...F9.F5}
                    />
                  </>
                ),
                AA2: F5.AA5,
                AA3: F8?.A11,
              },
              {
                AA0: (
                  <>
                    <B103
                      AA2={F9.F2}
                      AA3={{
                        AA5: [
                          {
                            AA0: A20,
                            AA1: F20,
                            AA2: F8?.A1008,
                          },
                        ],
                        AA6: [],
                        AA7: F21?.AA0?.AA6,
                      }}
                    />
                    {/* todo: fix here */}
                    <B118
                      AA4={{
                        AA1: [
                          {
                            AA3: F8?.A1036,
                            AA6: F8?.A1035,
                          },
                          {
                            AA3: F8?.A1028,
                            AA6: F8?.A1027,
                          },
                          {
                            AA3: F8?.A1030,
                            AA6: F8?.A1029,
                          },
                          {
                            AA3: F8?.A1032,
                            AA6: F8?.A1031,
                          },
                          {
                            AA3: F8?.A1034,
                            AA6: F8?.A1033,
                          },
                        ],
                        AA2: F8?.A9,
                        AA3: F8?.A1025,
                        AA4: F8?.A1010,
                        AA5: F8?.A1026,
                        AA6: F21?.AA0?.AA6,
                        AA7: F8?.A1024,
                        AA8: F21?.AA0?.AA4,
                        AA9: F8?.A1038,
                        AA10: F8?.A1020,
                        AA11: F8?.A1039,
                        AA12: F8?.A1006,
                        AA13: F21?.AA1,
                        AA14: A24,
                      }}
                      AA6={F24}
                      AA7={F9.F7}
                    />
                  </>
                ),
                AA2: F5.AA3,
                AA3: F8?.A11,
              },
              {
                AA0: (
                  <>
                    <B103
                      AA2={F9.F2}
                      AA3={{
                        AA5: [
                          {
                            AA0: A20,
                            AA1: F29,
                            AA2: F8?.A1008,
                          },
                        ],
                        AA6: [],
                        AA7: F34?.AA4?.AA1,
                      }}
                    />
                    <B126
                      AA0={F4}
                      AA1={{
                        AA1: F8?.A1073,
                        AA2: F8?.A9,
                        AA4: F8?.A1010,
                        AA5: F8?.A1064 + F8?.A1065 + F8?.A1026,
                        AA7: F8?.A1024,
                      }}
                      AA4={F34}
                      AA2={F9.F10}
                      AA7={F36}
                      AA5={
                        F34?.AA4?.AA7 === F8?.A1041
                          ? null
                          : F34?.AA4?.AA7 === F8?.A1043
                      }
                      AA3={F41}
                    />
                  </>
                ),
                AA2: F5.AA7,
                AA3: F8?.A11,
              },
              {
                AA0: (
                  <>
                    <B103
                      AA2={F9.F2}
                      AA3={{
                        AA5: [
                          {
                            AA0: A20,
                            AA1: F33,
                            AA2: F8?.A1008,
                          },
                        ],
                        AA6: [],
                        AA7: F37?.AA2,
                      }}
                    />
                    <B130
                      AA0={F37}
                      AA1={F39}
                      AA2={F9.F9}
                      AA3={{
                        AA0: F8?.A1083,
                        AA1: F8?.A1024,
                        AA2: {
                          AA1: F8?.A1013,
                          AA2: F8?.A1079,
                          AA3: F8?.A37,
                        },
                        AA3: F8?.A1080,
                        AA4: F8?.A1077,
                        AA5: F8?.A1081,
                        AA6: F8?.A10,
                        AA7: F8?.A1076,
                        AA8: F8?.A1006,
                        AA9: F8?.A1084,
                        AA10: F8?.A1082,
                        AA11: F8?.A1087,
                      }}
                      AA4={F38}
                      AA5={F40}
                    />
                  </>
                ),
                AA2: F5.AA8,
                AA3: F8?.A11,
              },
            ]}
            AA7={F9.F1}
          />
        </>
      )}
      <C0 E0={A217} E2={F0.top} E1={F1} />
    </>
  );
}
function B101({ AA0, AA1, AA2, AA3, AA4, children }) {
  let F0 = C5(AA4);
  return (
    <A1 entering={A94} exiting={A95} {...AA0}>
      {AA2 && <B103 {...{ AA2, AA3 }} />}
      <A1 entering={A58} exiting={A59} style={[AA1, F0]}>
        {children}
      </A1>
    </A1>
  );
}
function B102({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8 }) {
  let F0 = AA6.length,
    F1 = AA5.length;
  return (
    <A1
      entering={A60}
      exiting={A61.duration(F0 * 150 + 500)}
      layout={A136.springify()}
      {...AA1}
    >
      <A1
        entering={A62.duration(350)}
        exiting={A63.duration(F0 * 150 + 350)}
        layout={A136.springify()}
        {...AA3}
      >
        {AA6.map((E0, E1) => (
          <A13
            key={E1}
            onPress={E0.AA1}
            disabled={E0.AA3 ?? false}
            entering={A62.duration(E1 * 150 + 350)}
            exiting={A63.duration(E1 * 150 + 350)}
            layout={A136.springify()}
            {...AA2}
          >
            <E0.AA0 name={E0.AA2} {...AA0} />
          </A13>
        ))}
      </A1>
      <A1
        entering={A68}
        exiting={A69.duration(F0 * 150 + 500)}
        layout={A136.springify()}
        {...AA8}
      >
        <A4 {...AA4}>{AA7}</A4>
      </A1>
      <A1
        entering={A64.duration(350)}
        exiting={A65.duration(F1 * 150 + 350)}
        layout={A136.springify()}
        {...AA3}
      >
        {AA5.map((E0, E1) => (
          <A13
            key={E1}
            onPress={E0.AA1}
            disabled={E0.AA3 ?? false}
            entering={A64.duration(E1 * 150 + 350)}
            exiting={A65.duration(E1 * 150 + 350)}
            layout={A136.springify()}
            {...AA2}
          >
            <E0.AA0 name={E0.AA2} {...AA0} />
          </A13>
        ))}
      </A1>
    </A1>
  );
}

let B103 = ({ AA2, AA3 }) => <B102 {...{ ...AA2, ...AA3 }} />;

function B108({ AA5, AA7 }) {
  // console.log(AA0);
  return AA5.map(
    (E0, E1) =>
      E0.AA2 && (
        <B101 key={E1} AA3={E0.AA1} AA4={E0.AA3} {...AA7}>
          {E0.AA0}
        </B101>
      ),
  );
}
function B104({ AA0, AA1, AA2, AA3, AA4 }) {
  let F0 = () => C1(AA3),
    F1 = A223(AA4);
  return (
    <A0 {...AA1}>
      <A12 onPress={F0} {...AA0}>
        <A8 source={F1} {...AA2} />
      </A12>
    </A0>
  );
}
function B105({ AA0, AA1, AA2, AA3, AA4, AA5, AA6 }) {
  let F12 = useRef();
  let [F1, F2] = useState(AA6 ?? "");
  let F6 = AA3 * 1.5;
  let F16 = F6 / 2.7;
  let F17 = -F6 * 0.45;
  let F18 = 0.77;
  let F0 = useSharedValue(AA6 ? F17 : 0);
  let F5 = useSharedValue(AA6 ? F18 : 1);
  let F10 = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(F0.value) }],
  }));
  let F11 = useAnimatedStyle(() => ({
    fontSize: withSpring(F16 * F5.value),
  }));
  let F7 = () => {
    F0.value = F17;
    F5.value = F18;
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
}

function B106({ AA0, AA1, AA2, AA3, AA4, AA5 }) {
  return (
    <A0 {...AA2}>
      <A12 disabled={AA4} onPress={AA5} {...AA0}>
        {AA3}
      </A12>
      {AA4 && <A1 entering={A94} exiting={A95} layout={A92} {...AA1} />}
    </A0>
  );
}
function B107({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8 }) {
  let [F0, F1] = useState("");
  let [F2, F3] = useState("");
  let F5 = () => AA4(F0, F2);
  return (
    <A2 {...AA6}>
      <B104 AA3={F1} AA4={F0} {...AA3} />
      <B105 AA3={AA2} AA4={AA0} AA5={F3} AA6={F2} {...AA1} />
      <B106 AA3={<A4 {...AA8}>{AA7}</A4>} AA4={isEmpty(F2)} AA5={F5} {...AA5} />
    </A2>
  );
}

function B109({ AA0, AA1, AA2, AA3, AA4, AA5 }) {
  return (
    <A2 {...AA1}>
      {AA4.map((E0, E1) => (
        <A0 key={E0.AA4} {...AA2}>
          <B110 AA6={() => AA5(E0.AA4)} {...{ ...E0, ...AA3 }} />
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
}
function B110({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8, AA9 }) {
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
}
function B111({ AA0, AA1, AA2, AA3 }) {
  return (
    <A2 {...AA1}>
      {AA3.map(
        (E0, E1) =>
          !E0.AA9 && (
            <A0 key={E1}>
              <B112 {...{ ...E0, ...AA2 }} />
              {E1 !== AA3.length - 1 && (
                <A1
                  entering={A64}
                  exiting={A65}
                  layout={A136.springify()}
                  {...AA0}
                />
              )}
            </A0>
          ),
      )}
    </A2>
  );
}
function B112({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7 }) {
  return (
    <A12 onPress={AA7} {...AA1}>
      <>
        <A0 {...AA5}>
          <AA0 name={AA3} {...AA4} />
        </A0>
        <A4 {...AA2}>{AA6}</A4>
      </>
    </A12>
  );
}
function B113({ AA0, AA1, children }) {
  return (
    <A2 {...AA1}>
      <A2 {...AA0}>{children}</A2>
    </A2>
  );
}
function B114({ AA1, AA2, AA4 }) {
  let F0 = useSelector(_5);
  return (
    <B113 {...AA2}>
      <B115 AA2={AA1} AA3={AA4} {...F0} />
    </B113>
  );
}
function B115({ AA0, AA1, AA2, AA3 }) {
  return (
    <A0 {...AA2.AA0}>
      <A0 {...AA2.AA4}>
        <B117
          AA0={{
            AA4: AA3,
            AA0,
          }}
          AA1={AA2.AA1}
        />
      </A0>
      <A0 {...AA2.AA3}>
        {AA1.map((E0) => (
          <B115 key={E0.AA0.AA5} {...{ AA2, AA3, ...E0 }} />
        ))}
      </A0>
    </A0>
  );
}

function B116({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8 }) {
  let F0 = A223(AA0.AA2);
  return (
    <A13
      onPress={() => AA4(AA0.AA2)}
      entering={A92}
      exiting={A93}
      layout={A90}
      {...AA5}
    >
      <>
        <A0 {...AA7}>
          {!isEmpty(AA0.AA2) ? <A8 source={F0} {...AA2} /> : <A0 {...AA1} />}
        </A0>
        <A0 {...AA6}>
          <A4 {...AA3}>{AA0.AA6}</A4>
          <A4 {...AA8}>{AA0.AA1}</A4>
        </A0>
      </>
    </A13>
  );
}
let B117 = ({ AA0, AA1 }) => <B116 {...{ ...AA0, ...AA1 }} />;

function B118({ AA4, AA6, AA7 }) {
  let [F1, F2] = useState(AA4?.AA6 ?? "");
  let F4 = AA4?.AA1.findIndex((E0) => E0.AA3 === AA4?.AA8);
  let [F0, F3] = useState(F4 ?? 0);
  let F11 = AA4?.AA13?.map((E0) => ({ AA0: E0.AA0.AA6, AA2: E0.AA0.AA5 })) ?? [
    { AA0: "", AA2: C8() },
  ];
  let [F6, F7] = useState(F11);
  let F9 = () => F7((F7) => [...F7, { AA0: "", AA2: C8() }]);
  let F8 = (E0) => F7((F7) => F7.filter((G0) => G0.AA2 !== E0));
  let F10 = (E0, E1) => {
    F7((F7) => {
      let G0 = F7.findIndex((H0) => H0.AA2 === E1),
        G1 = F7[G0];
      F7.splice(G0, 1, { ...G1, AA0: E0 });
      return F7;
    });
  };
  let F5 = () => {
    // console.log("AA4?.AA13 : ");
    // console.log(AA4?.AA13);
    let G1 = C9(AA4?.AA13, F6);
    let G0 = {
      F1,
      AA1: AA4?.AA1[F0],
      AA2: AA4?.AA1[0],
      F6,
      F7: G1,
    };
    // console.log(G0);
    AA6(G0);
  };
  return (
    <A2 {...AA7.AA1}>
      <B119
        AA2={AA4?.AA5}
        AA1={
          <B105 AA6={F1} AA5={F2} AA3={AA4?.AA2} AA4={AA4?.AA4} {...AA7.AA8} />
        }
        {...AA7.AA2}
      />
      <B119
        AA2={AA4?.AA3}
        AA1={<B120 AA4={AA4?.AA1} AA2={F3} AA3={F0} {...AA7.AA4} />}
        {...AA7.AA2}
      />
      {F0 !== 0 && (
        <A1 entering={A68} exiting={A69} layout={A136.springify()} {...AA7.AA6}>
          <B119
            AA2={AA4?.AA10}
            AA1={
              <>
                {F6.map((E0) => (
                  <B123
                    key={E0.AA2}
                    AA5={(G0) => F10(G0, E0.AA2)}
                    AA8={AA4?.AA9}
                    AA0={F6.length === 1}
                    AA3={E0.AA0}
                    AA2={() => F8(E0.AA2)}
                    {...AA7.AA10}
                  />
                ))}
                <B106
                  AA3={
                    <>
                      <AA4.AA14 name={AA4?.AA12} {...AA7.AA7} />
                      <A4 {...AA7.AA9}>{AA4?.AA11}</A4>
                    </>
                  }
                  AA4={F6.length === 10}
                  AA5={F9}
                  {...AA7.AA0}
                />
              </>
            }
            {...AA7.AA2}
          />
        </A1>
      )}
      <B106
        AA3={<A4 {...AA7.AA3}>{AA4?.AA7}</A4>}
        AA4={isEmpty(F1)}
        AA5={F5}
        {...AA7.AA5}
      />
    </A2>
  );
}
function B119({ AA0, AA1, AA2, AA3 }) {
  return (
    <>
      <A0 {...AA3}>
        <A4 {...AA0}>{AA2}</A4>
      </A0>
      {AA1}
    </>
  );
}
function B120({ AA1, AA2, AA3, AA4, AA5 }) {
  return (
    <A2 {...AA5}>
      {AA4.map((E0, E1) => (
        <B121
          key={E1}
          {...{ ...E0, ...AA1, AA8: AA3 === E1, AA10: () => AA2(E1) }}
        />
      ))}
    </A2>
  );
}
function B121({
  AA0,
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
}) {
  let F0 = A223(AA6);
  return (
    <A12 onPress={AA10} style={[AA9, AA8 && AA4]} {...AA12}>
      <>
        <A0 {...AA1}>
          <A8 source={F0} {...AA2} />
        </A0>
        <A4 style={[AA0, AA8 && AA11]}>{AA3}</A4>
      </>
    </A12>
  );
}
// todo:  fix here
function B122({ AA0 }) {
  let [F0, F1] = useState([{ 0: "" }]);
  let F2 = () => F1((F1) => [...F1, { [F0.length]: "" }]);
  let F3 = (E0) =>
    F1((F1) => F1.filter((G0, G1) => Object.keys(G0)[0] !== G1.toString()));
  let F4 = (E0, E1) =>
    F1((F1) => {
      F1.splice(E0, 1, { [E0]: E1 });
      return F1;
    });
  return (
    <A1>
      <B119
        AA2
        AA1={
          <>
            {F0.map((E0, E1) => (
              <B123
                key={E0[`${E1}`]}
                AA5={(G0) => F4(G0, E1)}
                AA8
                AA0={F0.length === 1}
                AA2={() => F3(E1)}
              />
            ))}
            <B109 />
          </>
        }
      />
    </A1>
  );
}
function B123({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8 }) {
  let [F0, F1] = useState(AA3 ?? "");
  let F2 = (E0) => {
    F1(E0);
    AA5(E0);
  };
  return (
    <A1 entering={A62} exiting={A65} layout={A136.springify()} {...AA4}>
      <A6 value={F0} onChangeText={F2} {...AA1} />
      <B106 AA3={<A38 name={AA8} {...AA6} />} AA4={AA0} AA5={AA2} {...AA7} />
    </A1>
  );
}

function B124({ AA0, AA1, AA2 }) {
  return AA0 ? (
    <>
      <A4>A4</A4>
    </>
  ) : (
    <B125 {...AA2} />
  );
}
function B125({ AA4, AA5, AA6, AA7 }) {
  let F0 = A400(AA4?.AA7, AA7?.AA7),
    F1 = C10(AA4?.AA4),
    F2 = <F0 {...F1} />;
  if (!isEmpty(AA6))
    F2 = (
      <F0 {...F1}>
        {AA6.map((E0) => (
          <B125 key={E0.AA4.AA3} {...{ AA7, AA5, ...E0 }} />
        ))}
      </F0>
    );
  return (
    <A13 onPress={() => AA5(AA4?.AA5)} {...AA7.AA4}>
      {F2}
    </A13>
  );
}
function B126({ AA0, AA1, AA2, AA3, AA4, AA5, AA7 }) {
  let [F1, F2] = useState(AA4?.AA4?.AA1 ?? "");
  let F3 = () => {};
  return (
    <A0 {...AA2.AA8}>
      <B119
        AA2={AA1?.AA5}
        AA1={
          <B105 AA6={F1} AA5={F2} AA3={AA1?.AA2} AA4={AA1?.AA4} {...AA2.AA1} />
        }
        {...AA2.AA4}
      />
      <B127
        AA13={AA7}
        AA7={AA4?.AA4?.AA4}
        AA5={AA0}
        AA11={AA1?.AA1}
        AA9={AA2.AA0}
        AA2={AA5}
      />
      <B106
        AA3={<A4 {...AA2.AA3}>{AA1?.AA7}</A4>}
        AA4={isEmpty(F1)}
        AA5={AA3}
        {...AA2.AA5}
      />
    </A0>
  );
}
function B127({ AA2, AA5, AA7, AA9, AA11, AA13 }) {
  let [F0, F1] = useState(0);
  return (
    <A0 {...AA9.AA9}>
      <A0 {...AA9.AA1}>
        <A2 {...AA9.AA6}>
          {AA5?.map((E0) => E0.AA0)?.map((E0, E1) => (
            <A0 key={E1} style={[AA9.AA7, F0 === E1 && AA9.AA8]}>
              <A12 onPress={() => F1(E1)} {...AA9.AA10}>
                <A4 style={[AA9.AA2, F0 === E1 && AA9.AA5]}>{E0}</A4>
              </A12>
            </A0>
          ))}
        </A2>
      </A0>
      <A2 {...AA9.AA3}>
        {AA5?.map((E0) => E0.AA1)?.map(
          (E0, E1) =>
            F0 === E1 &&
            E0.map((H0, H1) => (
              <B128
                key={H1}
                {...{ ...H0, AA9: AA13, AA7: AA11, AA11: AA2, ...AA9.AA4 }}
              />
            )),
        )}
      </A2>
    </A0>
  );
}
function B128({
  AA0,
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
}) {
  let [F5, F6] = useState(false);
  let [F9, F10] = useState(false);
  let F0 = useSharedValue(0);
  let F2 = useSharedValue(0);
  let F1 = useAnimatedStyle(() => ({
    // height: withTiming(F0.value, A225 * 3),
    transform: [{ scaleY: withTiming(F0.value, A225 * 4) }],
  }));
  let F3 = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${F2.value * 90}deg`,
      },
    ],
  }));
  let [F7, F8] = useState(0);
  let F4 = () => {
    F0.value = F5 ? 1 : 0;
    F2.value = withTiming(F5 ? 0 : 1, A225 * 4);
    setTimeout(() => F6((F6) => !F6), A225 * 3);
  };
  let F11 = AA5?.map(
    (E0, E1) =>
      E0.AA13 === AA11 && (
        <B129 key={E1} AA4={() => AA9(E0)} {...{ AA9: E0, ...AA4 }} />
      ),
  );
  if (!F9)
    return (
      <A0
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => {
          F8(height);
          setTimeout(() => F10(true), A225);
        }}
        style={[AA10]}
        {...AA1}
      >
        {F5 && F11}
      </A0>
    );
  return (
    <A0 {...AA2}>
      <A12 onPress={F4} {...AA0}>
        <>
          <A25 name={AA7} style={[F3]} {...AA6} />
          <A4 {...AA8}>{AA3}</A4>
        </>
      </A12>
      <A1 style={[AA10, F1]} layout={A136.springify()} {...AA1}>
        {F5 && F11}
      </A1>
    </A0>
  );
}
function B129({
  AA0,
  AA1,
  AA2,
  AA3,
  AA4,
  AA5,
  AA6,
  AA7,
  AA8,
  AA9,
  AA11,
  AA12,
  AA15,
}) {
  // console.log("AA15  : ", AA9.AA15);
  return (
    <A0 {...AA5}>
      <A12 onPress={AA4} {...AA7}>
        <>
          <A0 {...AA0}>
            {!isNull(AA9.AA6) && <A8 source={AA9.AA6 ? AA11 : AA12} {...AA1} />}
            <A4 {...AA2}>{AA9.AA2}</A4>
          </A0>
          {!isEmpty(AA9.AA15) && (
            <A0 {...AA6}>
              <A4 {...AA3}>{AA9.AA15}</A4>
            </A0>
          )}
        </>
      </A12>
    </A0>
  );
}

function B130({ AA0, AA1, AA2, AA3, AA4, AA5 }) {
  // console.log(AA0);
  // console.log(AA1);
  let F0 = AA1.filter((E0) => E0.AA2 === AA0.AA2)[0];
  let F1 = C12(AA1.map((E0) => E0.AA3));
  // console.log(F1);
  return (
    <A2 {...AA2.AA1}>
      <B131
        {...{
          AA10: AA0.AA10,
          AA8: F1,
          AA9: AA2,
          AA0: AA3,
          AA11: AA4,
          AA14: AA5,
          ...F0,
        }}
      />
    </A2>
  );
}
function B131({
  AA0,
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
  AA14,
}) {
  let F0 = <></>;
  console.log("AA14");
  console.log(AA14);
  let [F2, F4] = useState({
    AA0: false,
    AA1: AA3 === AA8[6] && AA4,
    AA2: false,
    AA3: false,
  });
  let [F7, F8] = useState({
    AA0: "",
    AA1: "",
    AA2: [],
  });
  // let F1 = isNull(AA10) ? AA7 : AA7.map((E0) => E0 === AA10);
  let F5 = (G0) =>
    F4((F4) => {
      switch (G0) {
        case "0":
          return { ...F4, AA0: !F4.AA0 };
        case "1":
          return { ...F4, AA1: !F4.AA1 };
        case "2":
          return { ...F4, AA2: !F4.AA2 };
        case "3":
          return { ...F4, AA3: !F4.AA1 };
        default:
          return F4;
      }
    });
  let F9 = (G0, G1) =>
    F8((F8) => {
      switch (G0) {
        case "0":
          return { ...F8, AA0: G1 };
        case "1":
          return { ...F8, AA1: G1 };
        case "2":
          return { ...F8, AA2: G1 };
        default:
          return F8;
      }
    });
  let F6 = () => F5("0");
  let F11 = () => F5("1");
  let F13 = () => F5("2");
  let F14 = () => F5("3");
  let F10 = (G0) => F9("0", G0);
  let F12 = (G0) => F9("1", G0);
  let F15 = (G0) => F9("2", G0);
  let F3 = () => {
    let H0;
    // console.log(F2);
    // console.log(F7);
    switch (AA3) {
      case AA8[3]:
        H0 = F2.AA1 ? `${F7.AA0}%` : parseFloat(F7.AA1);
        break;
      case AA8[4]:
        break;
      case AA8[6]:
        H0 = F2.AA1;
        break;
      case AA8[7]:
        H0 = F7.AA2;
        break;
      case AA8[2]:
        H0 = parseFloat(F7.AA1);
        break;
      case AA8[0]:
      case AA8[1]:
      case AA8[5]:
      default:
        H0 = F7.AA1;
        break;
    }
    console.log(H0);
    if (AA14) AA14({ AA2, AA4: H0, AA12: false });
  };
  console.log(AA8);
  switch (AA3) {
    case AA8[0]:
      F0 = (
        <>
          <B136 AA1={AA4} AA7={AA0?.AA9} AA8={F7.AA1} AA9={F12} {...AA9.AA12} />
        </>
      );
      break;
    case AA8[1]:
      F0 = (
        <>
          <B138 AA0={F7.AA1} AA4={F12} AA5={AA0?.AA11} {...AA9.AA11} />
        </>
      );
      break;
    case AA8[2]:
      F0 = (
        <>
          <B132
            AA4={AA0?.AA5}
            AA5={AA0?.AA8}
            AA0={F7.AA1}
            AA11={F12}
            {...AA9.AA10}
          />
        </>
      );
      break;
    case AA8[3]:
      F0 = (
        <>
          <A0 {...AA9.AA0}>
            <A4 {...AA9.AA9}>{AA0?.AA0}</A4>
            <B134 AA0={F2.AA1} AA6={F11} {...{ ...AA0.AA2, ...AA9.AA3 }} />
          </A0>
          {F2.AA1 && (
            <B132
              AA4={AA0?.AA5}
              AA5={AA0?.AA8}
              AA0={F7.AA0}
              AA11={F10}
              AA9={AA0?.AA10}
              {...AA9.AA10}
            />
          )}
          {!F2.AA1 && (
            <B132
              AA4={AA0?.AA5}
              AA5={AA0?.AA8}
              AA0={F7.AA1}
              AA11={F12}
              {...AA9.AA10}
            />
          )}
        </>
      );
      break;
    case AA8[4]:
      F0 = (
        <>
          <B137
            AA3={AA4}
            AA4={AA9.AA4}
            AA5={AA0?.AA5}
            AA8={AA0?.AA8}
            AA10={AA9.AA10}
          />
        </>
      );
      break;
    case AA8[5]:
      F0 = (
        <>
          <B136
            AA1={isEmpty(AA4) ? [] : AA4}
            AA7={AA0?.AA9}
            AA8={F7.AA1}
            AA9={F12}
            {...AA9.AA12}
          />
        </>
      );
      break;
    case AA8[6]:
      F0 = (
        <>
          <A0 {...AA9.AA0}>
            <A4 {...AA9.AA9}>{AA0?.AA4?.toLowerCase()}</A4>
            <B134
              AA0={F2.AA2 || AA4}
              AA6={F13}
              {...{ ...AA0.AA2, ...AA9.AA3 }}
            />
          </A0>
        </>
      );
      break;
    case AA8[7]:
      F0 = (
        <>
          <B136
            AA1={AA4}
            AA4
            AA7={AA0?.AA9}
            AA8={F7.AA2}
            AA9={F15}
            {...AA9.AA12}
          />
        </>
      );
      break;
    default:
      break;
  }
  return (
    <>
      {/* <A0>
        <A8 />
      </A0> */}
      <A0 {...AA9.AA0}>
        <A4 {...AA9.AA9}>{AA0?.AA3}</A4>
        <B134 AA0={F2.AA0} AA6={F6} {...{ ...AA0.AA2, ...AA9.AA3 }} />
      </A0>
      {/* <B119
        AA2={AA0?.AA3}
        AA1={
          <A0 {...AA9.AA7}>
            {F1.map((E0, E1) => (
              <A8 source={A223(E0)} {...AA9.AA2} />
            ))}
          </A0>
        }
        {...AA9.AA4}
      /> */}
      {F2.AA0 && (
        <>
          {!isEmpty(AA5) && (
            <B119
              AA2={AA0?.AA7}
              AA1={<A4 {...AA9.AA6}>{AA5}</A4>}
              {...AA9.AA4}
            />
          )}
          <B119 AA2={AA0?.AA4} AA1={F0} {...AA9.AA4} />
          <B106 AA3={<A4 {...AA9.AA8}>{AA0?.AA1}</A4>} AA5={F3} {...AA9.AA5} />
        </>
      )}
    </>
  );
}
function B132({
  AA0,
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
}) {
  let [F0, F1] = useState(isEmpty(AA0) ? "0" : AA0);
  let F2 = (G0) => {
    let G1 = parseFloat(G0),
      G2 = isNaN(G1) ? `0` : G1.toString(),
      G3 = AA9 ? (G1 > 100 ? `100` : G2) : G1 < 0 ? `0` : G2;
    F1(G3);
    if (AA11) AA11(G3);
  };
  let F3 = () => {
    let G0 = parseFloat(F0) + 1,
      G1 = G0.toString(),
      G2 = AA9 ? (G0 > 100 ? `100` : G1) : G1;
    F1(G2);
    if (AA11) AA11(G2);
  };
  let F4 = () => {
    let G0 = parseFloat(F0) - 1,
      G1 = G0 < 0 ? `0` : G0.toString();
    F1(G1);
    if (AA11) AA11(G1);
  };
  return (
    <>
      <A0 {...AA3}>
        <A0 {...AA7}>
          <A12 onPress={F4} {...AA2}>
            <A24 name={AA4} {...AA1} />
          </A12>
          <A0 {...AA10}>
            <A6 value={F0} onChangeText={F2} {...AA8} />
            {AA9 && <A4 {...AA6}>{AA9}</A4>}
          </A0>
          <A12 onPress={F3} {...AA2}>
            <A24 name={AA5} {...AA1} />
          </A12>
        </A0>
      </A0>
    </>
  );
}
function B133({}) {
  let [F0, F1] = useState("");
  let [F2, F3] = useState(0);
  let F4;
  return (
    <>
      <A0>
        <A0>
          <A12></A12>
          <A6 />
          <A12></A12>
        </A0>
      </A0>
      <A0>
        <A1></A1>
      </A0>
    </>
  );
}
function B134({ AA0, AA1, AA2, AA3, AA4, AA5, AA6 }) {
  let [F3, F4] = useState(AA0 ?? false);
  let F0 = useSharedValue(AA0 ? AA3 : 0);
  let F5 = useSharedValue(AA0 ? AA1 : AA2);
  let F2 = useAnimatedStyle(() => ({
    transform: [{ translateX: F0.value }],
  }));
  let F6 = useAnimatedStyle(() => ({
    backgroundColor: F5.value,
  }));
  let F7 = () => {
    F4((F4) => !F4);
    if (AA6) AA6();
  };
  let F1 = () => {
    F0.value = F3 ? 0 : AA3;
    F5.value = F3 ? AA2 : AA1;
    F7();
  };
  return (
    <A1
      style={[
        {
          width: 2 * AA3,
          height: AA3,
          borderRadius: AA3 / 2,
          padding: 1,
        },
        F6,
      ]}
    >
      <A13
        onPress={F1}
        style={[
          { width: AA3 - 2, height: AA3 - 2, borderRadius: AA3 / 2 },
          F2,
          AA4,
        ]}
        // disabled={AA0}
        {...AA5}
      >
        <></>
      </A13>
    </A1>
  );
}
function B136({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8, AA9, AA10 }) {
  let [F0, F1] = useState({
    AA0: isEmpty(AA8) ? AA1[0] : AA8,
    AA1: isEmpty(AA8) ? [AA1[0]] : AA8,
  });
  let F2 = (G0) => {
    let H0 = { ...F0, AA0: G0 };
    F1(H0);
    if (AA9) AA9(G0);
  };
  let F3 = (G0) => {
    let H0 = F0.AA1;
    if (H0.includes(G0)) H0 = H0.filter((H1) => H1 !== G0);
    else H0.push(G0);
    F1((F1) => ({ ...F1, AA1: H0 }));
    if (AA9) AA9(H0);
  };
  let F4 = (
    <A39
      name={AA7}
      entering={A94}
      exiting={A95}
      layout={A136.springify()}
      {...AA0}
    />
  );
  return (
    <>
      <A0 {...AA10}>
        {AA1.map((E0, E1) => (
          <A0 key={E1} {...AA5}>
            <A12 onPress={() => (AA4 ? F3 : F2)(E0)} {...AA2}>
              <>
                <A0 {...AA6}>
                  {AA4 ? F0.AA1.includes(E0) && F4 : E0 === F0.AA0 && F4}
                </A0>
                <A4 {...AA3}>{E0}</A4>
              </>
            </A12>
          </A0>
        ))}
      </A0>
    </>
  );
}
//  AA8[4]
function B137({ AA3, AA4, AA5, AA8, AA10 }) {
  let [F0, F1] = useState(
    AA3?.map((E0) => ({ AA0: "0", AA1: C8(), AA2: E0.AA0 })),
  );
  // console.log(F0);
  let F2 = (G0, G1) => {
    let H0 = F0.findIndex((I0) => I0.AA1 === G0);
    F0[H0].AA0 = G1;
    F1(F0);
  };
  return (
    <>
      {F0.map((E0) => (
        <B119
          key={E0.AA1}
          AA2={E0.AA2}
          AA1={
            <B132
              AA4={AA5}
              AA5={AA8}
              AA0={E0.AA0}
              AA11={(G0) => F2(E0.AA1, G0)}
              {...AA10}
            />
          }
          {...AA4}
        />
      ))}
    </>
  );
}
function B138({ AA0, AA1, AA2, AA3, AA4, AA5, AA6, AA7 }) {
  let F6 = AA0.slice(1, AA0.length).split("");
  let F7 = isEmpty(F6)
    ? [
        {
          AA0: "0",
          AA1: C8(),
        },
        {
          AA0: "0",
          AA1: C8(),
        },
        {
          AA0: "0",
          AA1: C8(),
        },
        {
          AA0: "0",
          AA1: C8(),
        },
        {
          AA0: "0",
          AA1: C8(),
        },
        {
          AA0: "0",
          AA1: C8(),
        },
      ]
    : F6.map((F6) => ({ AA0: F6, AA1: C8() }));
  let [F0, F1] = useState(F7);
  // console.log(F0);
  let F4 = (F0) => `#${F0.map((F0) => F0.AA0).join("")}`;
  let F2 = (G0, G1) => {
    let H0 = F0.findIndex((I0) => I0.AA1 === G0);
    F0[H0].AA0 = G1;
    F1(F0);
    if (AA4) AA4(F4(F0));
  };
  return (
    <>
      <A0 {...AA1}>
        {F0.map((H0, H1) => (
          <B139
            key={H0.AA1}
            AA3={(G1) => F2(H0.AA1, G1)}
            AA2={H0.AA0}
            {...AA2}
          />
        ))}
      </A0>
      <A0
        style={[
          {
            backgroundColor: F4(F0),
          },
          AA3,
        ]}
      />
    </>
  );
}
function B139({ AA0, AA1, AA2, AA3 }) {
  let [F0, F1] = useState(isEmpty(AA2) ? "0" : AA2);
  let F2 = (G0) => {
    let H2 = "",
      H0 = parseInt(G0),
      H1 = isNaN(H0) ? 0 : H0;
    if (H1 < 10) H2 = `${H1}`;
    else
      switch (H1) {
        case 10:
          H2 = "a";
          break;
        case 11:
          H2 = "b";
          break;
        case 12:
          H2 = "c";
          break;
        case 13:
          H2 = "d";
          break;
        case 14:
          H2 = "e";
          break;
        case 15:
        default:
          H2 = "f";
          break;
      }
    F1(H2);
    if (AA3) AA3(H2);
  };
  return (
    <>
      <A0 {...AA0}>
        <A6 onChangeText={F2} value={F0} {...AA1} />
      </A0>
    </>
  );
}
function B140({}) {
  return <></>;
}
function B141({}) {
  return <></>;
}
function B142({}) {
  return <></>;
}
function B143({}) {
  return <></>;
}
function B144({}) {
  return <></>;
}
