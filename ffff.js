import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useDispatch, useSelector } from "react-redux";
import { isEmpty, isEqual } from "lodash";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { f, g, i } from "./ffff/a";
import C from "./ffff/a/a";
import { aa, ab, ac, ae, _a, _b, _c, _e } from "./ffff/b/a/a";
import { a, b } from "./ffff/a";
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
  SlideOutDown,
  SlideOutRight,
  SlideOutUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

let { width, height } = a;
let Z = Animated.createAnimatedComponent(TouchableHighlight);
let Y = () => {
  let a = useSharedValue(0);
  let b = useAnimatedStyle(() => ({ height: withSpring(height - a.value) }));
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
let X = ({ a, b, c, d, e, f }) => (
  <View {...c}>
    <Text {...a}>{e}</Text>
    <TouchableHighlight onPress={f} {...b}>
      <AntDesign {...d} />
    </TouchableHighlight>
  </View>
);
export default function A() {
  return (
    <Provider store={C}>
      <NavigationContainer>
        <B />
      </NavigationContainer>
    </Provider>
  );
}

let S = createStackNavigator();
function B() {
  return (
    <S.Navigator screenOptions={{ headerShown: false }}>
      <S.Screen name="E" component={E} />
      <S.Screen name="G" component={G} />
      <S.Screen name="O" component={O} />
      <S.Screen name="D" component={D} />
    </S.Navigator>
  );
}

function D() {
  let A = useSelector(_c);
  console.log(A);
  return (
    <S.Navigator screenOptions={{ headerShown: true }}>
      {A.map(({ a, b }, i) => (
        <S.Screen key={i} name={a} children={F(b)} />
      ))}
    </S.Navigator>
  );
}

function E() {
  let z = useDispatch();
  let { navigate } = useNavigation();
  let [c, d] = useState("");
  let y = async () => {
    try {
      let x = await fetch(`${c}/${width}/${height}/${b}`).then((a) => a.json());
      z(ab(x?.a));
      z(aa(x?.b));
      z(ac([x?.a]));
      navigate("G");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: f,
      }}
    >
      <TextInput
        value={c}
        onChangeText={d}
        style={{
          width: 300,
          height: 51,
          borderWidth: 0.6,
          borderRadius: 18,
          borderColor: g,
          borderStyle: "dashed",
          paddingHorizontal: 21,
          marginBottom: 9,
          fontSize: 19.2,
        }}
      />
      <Button title="Y" onPress={y} />
    </View>
  );
}

let G = () => {
  let _ = useDispatch();
  let { navigate } = useNavigation();
  let [z, y] = useState({});
  let [c, d] = useState({});
  let [w, v] = useState([]);
  let [t, s] = useState(false);
  let [q, p] = useState(false);
  let a = useSelector(_a);
  let u = (u) => {
    let a = w.filter((W) => W.g === u)[0];
    y(a);
    o();
  };
  let r = () => s((s) => !s);
  let o = () => p((p) => !p);
  let b = (a) => (b) => {
    switch (a) {
      case 1:
        d((d) => ({ ...d, e: b }));
        break;
      case 2:
        d((d) => ({ ...d, f: b }));
        break;
      default:
        break;
    }
  };
  let e = () => {
    let _ = { ...z, ...c };
    let i = w.findIndex((W) => isEqual(W.g, _.g));
    w.splice(i, 1, _);
    v(w);
    o();
  };
  let f = () => {
    let __ = w.filter((W) => isEqual(W.g, z.g))[0];
    // console.log(_);
    _(ae(__));
    navigate("O");
    o();
  };
  return (
    <Animated.View entering={SlideInLeft} exiting={SlideOutRight} {...a.a}>
      <Animated.View
        entering={i.b.a.duration(450)}
        exiting={i.b.b.duration(300)}
        {...a.b}
      >
        <View {...a.c}>
          <Text {...a.d}>{a.e}</Text>
        </View>
        <ScrollView>
          {isEmpty(w) ? (
            <I {...{ ...a.g, v }} />
          ) : (
            w.map((W, i) => (
              <View key={W.g}>
                <H {...{ ...W, ...a.f, u: () => u(W.g) }} />
                {!isEqual(i, w.length - 1) && <View {...a.j} />}
              </View>
            ))
          )}
        </ScrollView>
        <Z onPress={r} entering={SlideInDown} exiting={SlideOutRight} {...a.h}>
          <Entypo {...a.i} />
        </Z>
      </Animated.View>
      {t && <J {...{ s: r, v, ...a.k }} />}
      {q && (
        <L {...{ a: o, d: z.e, ...a.l }}>
          <M {...{ h: a.n.r, ...a.n }}>
            <K {...{ x: b(1), c: a.k.h.g, ...a.m }} />
            <K {...{ x: b(2), c: a.k.h.h, ...a.m }} />
            <H {...{ u: e, ...a.o }} />
          </M>
          <M {...{ h: a.p, ...a.n }}>
            <H {...{ u: f, ...a.o, e: a.p }} />
          </M>
        </L>
      )}
    </Animated.View>
  );
};

let H = ({ u, a, b, c, e, f, g }) => {
  return (
    <TouchableHighlight onPress={u} {...a}>
      <>
        {!isEmpty(e) && <Text {...b}>{e}</Text>}
        {!isEmpty(f) && <Text {...c}>{f}</Text>}
      </>
    </TouchableHighlight>
  );
};
let I = ({ a, b, v, e, f, g }) => {
  let [y, z] = useState("");
  let c = async () => {
    try {
      let d = await fetch(y).then((d) => d.json());
      v(d.a);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} {...a}>
      <TextInput value={y} onChangeText={z} {...e} />
      <TouchableHighlight onPress={c} {...b}>
        <Text {...f}>{g}</Text>
      </TouchableHighlight>
    </Animated.View>
  );
};
let J = ({ s, a, b, c, d, e, f, g, h, i, j, k, v }) => {
  let [z, y] = useState({ z: "", y: "" });
  let x = (a) => (b) => {
    switch (a) {
      case "z":
        y((a) => ({ ...a, z: b }));
        break;
      case "y":
        y((a) => ({ ...a, y: b }));
        break;
      default:
        break;
    }
  };
  let u = () => {
    if (!(isEmpty(z.y) || isEmpty(z.z)))
      v((v) => [...v, { e: z.y, f: z.z, g: v.length }]);
    s();
  };
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} {...a}>
      <Animated.View entering={SlideInDown} exiting={SlideOutDown} {...b}>
        <View {...c}>
          <Text {...d}>{e}</Text>
          <TouchableHighlight onPress={s} {...f}>
            <AntDesign {...g} />
          </TouchableHighlight>
        </View>
        <K {...{ x: x("y"), c: h.g, ...h }} />
        <K {...{ x: x("z"), c: h.h, ...h }} />
        <TouchableHighlight onPress={u} {...k}>
          <Text {...j}>{i}</Text>
        </TouchableHighlight>
      </Animated.View>
    </Animated.View>
  );
};
let K = ({ a, b, c, d, x, e, f }) => {
  let [p, q] = useState("");
  let r = useRef();
  let u = 1.5 * b;
  let z = useSharedValue(0);
  let y = useSharedValue(1);
  let w = useAnimatedStyle(() => ({ transform: [{ translateY: z.value }] }));
  let v = useAnimatedStyle(() => ({
    fontSize: (y.value * u) / 2.75,
  }));
  let s = ({ nativeEvent: { text } }) => {
    if (isEmpty(text)) {
      z.value = withSpring(0);
      y.value = withSpring(1);
      r.current.blur();
    } else {
      o();
      n();
    }
  };
  let n = () => {
    z.value = withSpring(-u * 0.45);
    y.value = withSpring(0.75);
  };
  let t = () => {
    n();
    r.current.focus();
  };
  let o = () => x(p);
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutDown}
      style={[{ height: u }, a]}
    >
      <TextInput
        ref={r}
        onFocus={t}
        onBlur={s}
        value={p}
        onChangeText={q}
        // onSubmitEditing={(t) => x(c, t.nativeEvent.text)}
        onSubmitEditing={o}
        onEndEditing={s}
        style={[f, { paddingHorizontal: u / 4 }]}
      />
      {!isEmpty(c) && (
        <Animated.Text
          onPress={t}
          style={[d, w, v, { paddingHorizontal: u / 5 }]}
        >
          {c}
        </Animated.Text>
      )}
    </Animated.View>
  );
};
let L = ({ a, b, c, d, f, children }) => {
  return (
    <Animated.View
      entering={FadeIn.duration(270)}
      exiting={FadeOut.duration(540)}
      {...c}
    >
      <Animated.View
        entering={SlideInDown.duration(540)}
        exiting={SlideOutDown.duration(270)}
        {...b}
      >
        <X f={a} e={d} {...f} />
        {children}
      </Animated.View>
    </Animated.View>
  );
};
let M = ({ d, e, h, children }) => {
  let [a, b] = useState(false);
  let c = () => b((b) => !b);
  let k = () => setTimeout(c, a ? 120 : 10);
  return (
    <View {...e}>
      <X
        d={{ name: `${a ? "up" : "down"}circleo`, ...d.d }}
        {...{
          f: k,
          e: h,
          ...d,
        }}
      />
      {a && (
        <Animated.View
          entering={FadeInUp.duration(270)}
          exiting={FadeOutUp.duration(174)}
        >
          {children}
        </Animated.View>
      )}
    </View>
  );
};
let O = () => {
  let a = useSelector(_a);
  let b = useSelector(_c);
  let [c, d] = useState(false);
  let e = () => d((_) => !_);
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} {...a.a}>
      <Animated.View
        entering={i.c.a.duration(450)}
        exiting={i.c.b.duration(300)}
        {...a.b}
      ></Animated.View>
      {/* <AA {...a.aa} /> */}
      <Z onPress={e} entering={SlideInDown} exiting={SlideOutRight} {...a.h}>
        <Entypo {...a.ab} />
      </Z>
    </Animated.View>
  );
};

let AA = ({ a, c, d, e, f }) => {
  let [w, y] = useState(false);
  let z = useSharedValue(0);
  let v = useSharedValue(1);
  let x = () => {
    z.value = w ? -1.2 * b : 0;
    v.value = w ? 0 : 1;
  };
  let u = f.map((f) => ({}));
  return (
    <Animated.View {...d}>
      <Animated.View {...c}></Animated.View>
      <View></View>
    </Animated.View>
  );
};

let F =
  ({ a }) =>
  () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{a}</Text>
      </View>
    );
  };
