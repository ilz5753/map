import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { A0, A1, A12, A200, A202, A203, A204, A4, A58, A59 } from "./a";
import { ABC, ABC0, ABC1, ABC3 } from "./c";
import { A000, A001, A002, A003, C1, C2, C3, C4, C5 } from "./d";
import { isNull } from "lodash";
export default function B1() {
  return (
    <SafeAreaProvider>
      <A204 store={C1}>
        <B0 />
      </A204>
    </SafeAreaProvider>
  );
}
function B3({ AA1, children }) {
  let a0 = ABC1();
  return (
    <A1
      entering={A58.duration(540)}
      exiting={A59.duration(270)}
      style={[a0, AA1]}
    >
      {children}
    </A1>
  );
}
function B0() {
  let a11 = useDispatch();
  let a7 = useSelector(C2);
  let a8 = useSelector(C3);
  let a9 = useSelector(C4);
  let a10 = useSelector(C5);
  let [a0, a1] = useState(false);
  let [a3, a4] = useState(false);
  let [a5, a6] = useState(false);
  let a2 = async (b0) => {
    try {
      let c0 = await fetch(`${b0}/${A202}/${A203}/${A200}`).then((b0) =>
        b0.json(),
      );
      a11(A000(c0.A1));
      a11(A001(c0.AB0));
      a11(A002(c0.AB2));
      a11(A003(c0.A0));
    } catch (b1) {
      alert(b1);
    }
  };
  return (
    <>
      {!isNull(a10) && (
        <>
          <B3 AA1={a10.A0}>
            <B4 {...a10.AC0}>
              <A4>A4</A4>
            </B4>
          </B3>
        </>
      )}
      <ABC3 B0={a2} B1="#12ffff" />
      {/* <ABC0 B0={a2} B1="#12ffff" /> */}
    </>
  );
}
function B4({ AA0, AA1, AA2, AA3, AA4, children }) {
  return (
    <>
      <A1 {...AA2}>
        <A4 {...AA3}>{AA4}</A4>
      </A1>
      <A0 {...AA1}>{children}</A0>
    </>
  );
}
function B5({ AA0, AA1 }) {
  return <A12 onPress={AA1} {...AA0}></A12>;
}
function B6({ AA0 }) {
  return <ABC {...AA0}></ABC>;
}
