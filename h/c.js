import React, { useEffect, useState } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  A0,
  A1,
  A12,
  A200,
  A202,
  A203,
  A212,
  A214,
  A25,
  A4,
  A6,
  D0,
  D2,
  D4,
  D6,
  D7,
  D8,
} from "./a";
let DU = { duration: 330 };
export function ABC0({ B0, B1 }) {
  let { top } = useSafeAreaInsets();
  let [a, b] = useState(false);
  let [a0, b0] = useState("");
  let k = A200 * 1.35;
  let c = useSharedValue(0);
  let d = useSharedValue(-k);
  let e = useSharedValue(0);
  let f = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(d.value, DU) }],
  }));
  let g = useAnimatedStyle(() => ({
    transform: [{ rotate: `${e.value * 180}deg` }],
  }));
  let h = useAnimatedStyle(() => ({ opacity: withTiming(c.value, DU) }));
  let i = useAnimatedStyle(() => ({
    opacity: withTiming((c.value + 1.5) / 2.5, DU),
  }));
  let j = () => {
    c.value = a ? 0 : 1;
    d.value = a ? -k : 0;
    e.value = withTiming(e.value + 1, DU);
    b((b) => !b);
  };
  let m = () => {
    j();
    B0(a0);
  };
  return (
    <A1
      style={[
        {
          width: A202,
          height: A200 * 2.35 + top,
          position: "absolute",
          zIndex: 1,
          top: 0,
        },
        f,
      ]}
    >
      <A1
        style={[
          {
            width: A202,
            height: k + top,
            paddingTop: top,
            backgroundColor: B1,
            borderRadius: 15,
            justifyContent: "center",
          },
          h,
        ]}
      >
        <A0
          style={[
            {
              width: "100%",
              height: A200 * 1.2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            },
          ]}
        >
          <A6
            value={a0}
            onChangeText={b0}
            placeholder=".^."
            style={[
              {
                width: A202 * 0.8,
                height: A200,
                paddingHorizontal: 12,
                fontSize: 21,
                backgroundColor: "#ffffff",
                borderRadius: 13.5,
              },
            ]}
          />
          <A12
            onPress={m}
            underlayColor={"rgba(0,0,0,0.177)"}
            style={[
              {
                width: A200,
                height: A200,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 13.5,
              },
            ]}
          >
            <A4
              style={[
                {
                  fontSize: 24,
                },
              ]}
            >{`🖐`}</A4>
          </A12>
        </A0>
      </A1>
      <A0
        style={[
          {
            width: A202,
            height: A200,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <A12
          onPress={j}
          underlayColor={"rgba(0,0,0,0.177)"}
          style={[
            {
              width: A200 * 0.786,
              height: A200 * 0.786,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 13.5,
              backgroundColor: B1,
            },
            i,
          ]}
        >
          <A25
            name="chevron-down"
            size={A200 * 0.54}
            style={[g]}
            color="#ffffff"
          />
        </A12>
      </A0>
    </A1>
  );
}

export let ABC1 = () => {
  let a0 = useSharedValue(0);
  let a1 = useAnimatedStyle(() => ({
    height: A203 - a0.value - 1.6 * A200,
  }));
  useEffect(() => {
    let b0 = A212.addListener(
      "keyboardDidShow",
      ({ endCoordinates: { height } }) => {
        a0.value = height;
      },
    );
    let b1 = A212.addListener("keyboardDidHide", () => {
      a0.value = 0;
    });
    return () => {
      b0.remove();
      b1.remove();
    };
  });
  return a1;
};
export function ABC({
  AA0,
  AA1 = {},
  AA2,
  AA3,
  AA4,
  AA5,
  AA6,
  AA7,
  AA8,
  children,
}) {
  let B0 = D8(AA0);
  console.log(B0);
  return (
    <B0
      style={AA2}
      onPress={AA3}
      entering={AA4 ? D7(AA4).duration(AA7) : A214}
      exiting={AA5 ? D7(AA5).duration(AA8) : A214}
      layout={D7(`136`).springify()}
      children={children}
      {...AA1}
    />
  );
}
export function ABC3({ B0, B1 }) {
  let { top } = useSafeAreaInsets();
  let [a, b] = useState(false);
  let [a0, b0] = useState("");
  let k = A200 * 1.35;
  let c = useSharedValue(0);
  let d = useSharedValue(-k);
  let e = useSharedValue(0);
  let f = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(d.value, DU) }],
  }));
  let g = useAnimatedStyle(() => ({
    transform: [{ rotate: `${e.value * 180}deg` }],
  }));
  let h = useAnimatedStyle(() => ({ opacity: withTiming(c.value, DU) }));
  let i = useAnimatedStyle(() => ({
    opacity: withTiming((c.value + 1.5) / 2.5, DU),
  }));
  let j = () => {
    c.value = a ? 0 : 1;
    d.value = a ? -k : 0;
    e.value = withTiming(e.value + 1, DU);
    b((b) => !b);
  };
  let m = () => {
    j();
    B0(a0);
  };
  return (
    <ABC
      AA0="1"
      AA2={[
        {
          width: A202,
          height: A200 * 2.35 + top,
          position: "absolute",
          zIndex: 1,
          top: 0,
        },
        f,
      ]}
    >
      <ABC
        AA0="1"
        AA2={[
          {
            width: A202,
            height: k + top,
            paddingTop: top,
            backgroundColor: B1,
            borderRadius: 15,
            justifyContent: "center",
          },
          h,
        ]}
      >
        <ABC
          AA0="0"
          AA2={[
            {
              width: "100%",
              height: A200 * 1.2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            },
            h,
          ]}
        >
          <ABC
            AA0="6"
            AA1={{
              value: a0,
              onChangeText: b0,
              placeholder: ".^.",
            }}
            AA2={[
              {
                width: A202 * 0.8,
                height: A200,
                paddingHorizontal: 12,
                fontSize: 21,
                backgroundColor: "#ffffff",
                borderRadius: 13.5,
              },
            ]}
          />
        </ABC>
        <ABC
          AA0="12"
          AA1={{
            underlayColor: "rgba(0,0,0,0.177)",
          }}
          AA2={[
            {
              width: A200,
              height: A200,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 13.5,
            },
          ]}
          AA3={m}
        >
          <ABC AA0="4" AA2={[{ fontSize: 21 }]}>{`🖐`}</ABC>
        </ABC>
      </ABC>
      <ABC
        AA0="0"
        AA2={[
          {
            width: A202,
            height: A200,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <ABC
          AA0="12"
          AA1={{
            underlayColor: "rgba(0,0,0,0.177)",
          }}
          AA2={[
            {
              width: A200 * 0.786,
              height: A200 * 0.786,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 13.5,
              backgroundColor: B1,
            },
          ]}
          AA3={j}
        >
          <ABC
            AA0="25"
            AA1={{
              name: "chevron-down",
              size: A200 * 0.54,
              color: "#ffffff",
            }}
            AA2={[g]}
          />
        </ABC>
      </ABC>
    </ABC>
  );
}
