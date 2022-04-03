import { useTheme } from "@react-navigation/native";
import * as React from "react";
import * as RN from "react-native";
import * as ImagePicker from "expo-image-picker";
import _ from "lodash";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  FadeIn,
  FadeOut,
  SlideInLeft,
  SlideOutLeft,
  SlideInRight,
  SlideOutRight,
  SlideInDown,
  SlideOutDown,
  SlideInUp,
  SlideOutUp,
  LightSpeedInLeft,
  LightSpeedInRight,
  LightSpeedOutLeft,
  LightSpeedOutRight,
  withTiming,
  withSpring,
  runOnJS,
  useDerivedValue,
  Easing,
} from "react-native-reanimated";
import {
  GestureDetector,
  Gesture,
  PanGestureHandler,
  PinchGestureHandler,
  State,
} from "react-native-gesture-handler";
import * as IC from "@expo/vector-icons";
import {
  backgroundColor,
  color,
  border,
  borderColor,
  isAndroid,
  Root,
  root,
  margin,
  mt,
  overlay,
  layout,
  jcfe,
  jcc,
  padding,
  full,
  center,
  row,
  fontSize,
  fontWeight,
  bgct,
  aic,
  phm4,
  borderRadius,
  bct,
  hexToRGB,
  white,
  black,
  dim,
  jcsb,
  squareLayout,
  width,
  height,
  position,
  zIndex,
  fw6,
  fwb,
  shadow,
  cbr,
  cb,
  jcse,
  aife,
  minHeight,
  jcfs,
  icon,
  aifs,
  tr,
} from "../style";
import { clamp } from "./funcs";
export let Custom =
  (Component) =>
  ({ sb, style, Ref, ...props }) => {
    let { colors } = useTheme();
    let bg = backgroundColor(colors.background);
    let c = color(colors.text);
    let bc = borderColor(colors.border);
    let b = border(sb, 1);
    return (
      <Component
        ref={Ref}
        style={[bg, c, sb !== undefined && [b, bc], style]}
        {...props}
      />
    );
  };
export let View = Custom(RN.View);
export let Text = Custom(RN.Text);
export let ScrollView = Custom(RN.ScrollView);
export let Input = Custom(RN.TextInput);
// export let Image = Custom(RN.Image);
// export let ImageBackground = Custom(RN.ImageBackground);
export let TouchableOpacity = Custom(RN.TouchableOpacity);
export let Pressable = Custom(RN.Pressable);
export let ActivityIndicator = Custom(RN.ActivityIndicator);
export let Btn = isAndroid ? RN.Pressable : RN.TouchableOpacity;
// export let BUTTON = Custom(Btn);
export let ANIMBUTTON = Animated.createAnimatedComponent(Btn);
export let AnimView = Custom(Animated.View);
export let AnimScrollView = Custom(Animated.ScrollView);
export let AnimText = Custom(Animated.Text);
// export let AnimImage = Custom(Animated.Image);
export let CustomImageRenderer =
  (Image) =>
  ({ style, r = 10, uri, ...props }) => {
    let { colors, dark } = useTheme();
    // let br = [border("", 1), borderRadius("", r), borderColor(colors.border)];
    let br = cb(1, r, colors.border);
    let source = uri ? { uri } : icon(dark);
    return (
      <View style={[br, bgct, style]}>
        <Image source={source} style={[br, full]} {...props} />
      </View>
    );
  };
export let Image = CustomImageRenderer(RN.Image);
export let ImageBackground = CustomImageRenderer(RN.ImageBackground);
export let AnimatedImageBackground = Animated.createAnimatedComponent(
  RN.ImageBackground,
);
export let AnimImage = CustomImageRenderer(Animated.Image);
export let AnimImageBackground = CustomImageRenderer(AnimatedImageBackground);
export let ROOT = ({ children }) => {
  return (
    <View style={[Root]}>
      <View style={[root, margin("t", mt)]}>{children}</View>
    </View>
  );
};

export let Icon = ({ type, name, size, color, Ref }) => {
  let options = {
    name,
    size,
    color,
  };
  let Ic = IC.AntDesign;
  switch (type) {
    case "en":
      Ic = IC.Entypo;
      break;
    case "ev":
      Ic = IC.EvilIcons;
      break;
    case "fe":
      Ic = IC.Feather;
      break;
    case "fa":
      Ic = IC.FontAwesome;
      break;
    case "fa5":
      Ic = IC.FontAwesome5;
      break;
    case "fon":
      Ic = IC.Fontisto;
      break;
    case "fou":
      Ic = IC.Foundation;
      break;
    case "i":
      Ic = IC.Ionicons;
      break;
    case "mc":
      Ic = IC.MaterialCommunityIcons;
      break;
    case "mi":
      Ic = IC.MaterialIcons;
      break;
    case "o":
      Ic = IC.Octicons;
      break;
    case "s":
      Ic = IC.SimpleLineIcons;
      break;
    case "z":
      Ic = IC.Zocial;
      break;
    case "cs":
      Ic = IC.createIconSet;
      break;
    case "cff":
      Ic = IC.createIconSetFromFontello;
      break;
    case "cfm":
      Ic = IC.createIconSetFromIcoMoon;
      break;
    case "cm":
      Ic = IC.createMu;
      break;
    case "cms":
      Ic = IC.createMultiStyleIconSet;
      break;
    default:
      break;
  }
  return <Ic ref={Ref} {...options} />;
};
export let Chevron = ({ type, size, color }) => {
  let dir = "left";
  switch (type) {
    case "u":
      dir = "up";
      break;
    case "d":
      dir = "down";
      break;
    case "r":
      dir = "right";
      break;
    default:
      break;
  }
  return <Icon type="en" name={`chevron-${dir}`} size={size} color={color} />;
};

export let BUTTON =
  (BTN) =>
  ({ style, btnStyle, disabled, children, ...props }) => {
    let { dark } = useTheme();
    let bs = shadow(dark, 0.24);
    return (
      <View style={[bgct, center, cbr, style]}>
        <BTN
          activeOpacity={0.75}
          android_ripple={{ color: bs, borderless: true }}
          style={[full, center, bgct, cbr, btnStyle]}
          btnStyle={[full]}
          disabled={disabled}
          {...props}
        >
          {children}
          {disabled && (
            <View style={[overlay, cbr, style, backgroundColor(bs)]} />
          )}
        </BTN>
      </View>
    );
  };
export let Button = BUTTON(Btn);
export let AnimButton = BUTTON(ANIMBUTTON);
export let SHEET = ({ title, show, hide, children }) => {
  let { colors, dark } = useTheme();
  let [preview, setPreview] = React.useState(false);
  let offsetY = useSharedValue(0);
  let startOffsetY = useSharedValue(0);
  let close = () => {
    offsetY.value = withSpring(dim.height);
    setTimeout(togglePreview, 250);
  };
  let togglePreview = () => setPreview((p) => !p);
  let offsetYStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: offsetY.value,
        },
      ],
    };
  });
  let customDrag = Gesture.Pan()
    .onUpdate((e) => {
      offsetY.value = clamp(
        e.translationY + startOffsetY.value,
        -mt,
        dim.height,
      );
    })
    .onEnd((e) => {
      let z = 5 / 8;
      if (e.absoluteY > dim.height * z) {
        runOnJS(close)();
        // offsetY.value = 0;
      } else {
        offsetY.value = withSpring(0);
      }
      startOffsetY.value = 0;
    });
  React.useEffect(() => {
    if (show) {
      hide();
      close();
      setTimeout(() => (offsetY.value = withSpring(0)), 600);
    }
  });
  return (
    preview && (
      <AnimView
        style={[Root, overlay, backgroundColor(shadow(dark, 0.24))]}
        entering={FadeIn}
        exiting={FadeOut}
      >
        <AnimView
          style={[
            layout(dim.width, 1.15 * dim.height),
            margin("t", mt),
            cb(0.001, 30, bct),
            // border("t", 1),
            // borderRadius("", 30),
            // bgct,
            offsetYStyle,
          ]}
        >
          <GestureDetector gesture={customDrag}>
            <AnimView
              style={[row, aic, jcsb, bgct, padding("", mt / 2), bgct]}
              sb="b"
            >
              <Text style={[fontSize(22.5), fontWeight("5")]}>{title}</Text>
              <HeaderBtn
                name="closecircle"
                type=""
                onPress={close}
                // style={[squareLayout(35), cb(0.1, 17.5, bct)]}
              />
            </AnimView>
          </GestureDetector>
          <ScrollView
            style={[padding("h", mt / 2), margin("b", 1.3 * mt), bgct]}
          >
            {children}
          </ScrollView>
        </AnimView>
      </AnimView>
    )
  );
};

export let HeaderBtn = ({ type, name, ...props }) => {
  let { colors } = useTheme();
  let size = mt * 0.72;
  let btnb = cb(1, size / 2, bct);
  return (
    <Button
      style={[squareLayout(size), btnb]}
      btnStyle={[btnb, center]}
      {...props}
    >
      <Icon size={size / 1.2} color={colors.primary} type={type} name={name} />
    </Button>
  );
};
let ArrHeaderBtns = ({ arr, style }) => (
  <View style={[bgct, jcse, style]}>
    {arr?.map((a, i) => (
      <HeaderBtn {...a} key={i} />
    ))}
  </View>
);
let RowHeaderBtns = ({ arr }) => (
  <ArrHeaderBtns arr={arr} style={[layout("32%", "100%"), aic, row]} />
);
export let MainHeader = ({ title, left, right, Is }) => {
  return (
    <AnimView style={[layout("100%", 2 * mt), jcfe]}>
      <View
        sb={Is ? "b" : undefined}
        style={[
          layout("100%", mt + (Is ? 0 : 1)),
          aic,
          row,
          padding("h", mt / 4),
        ]}
      >
        <RowHeaderBtns arr={left} />
        <View style={[layout("36%", "100%"), center]}>
          {Is && (
            <Text
              style={[fontSize(23), fw6]}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {title}
            </Text>
          )}
        </View>
        <RowHeaderBtns arr={right} />
      </View>
    </AnimView>
  );
};
export let IOSHeader = ({ title }) => {
  return (
    <View style={[layout("100%", mt), jcc, phm4]}>
      <Text style={[fontSize(32), fwb]} ellipsizeMode="tail" numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};
export let Template = ({ header, sheets, children }) => {
  let [Is, sIs] = React.useState(false);
  let onScroll = (e) => sIs(e.nativeEvent.contentOffset.y > mt * 0.75);
  return (
    <View style={[Root]}>
      <MainHeader Is={Is} {...header} />
      <ScrollView
        style={[phm4, margin("b", mt / 4)]}
        onScroll={onScroll}
        scrollEventThrottle={10}
      >
        <IOSHeader {...header} />
        {children}
      </ScrollView>
      {sheets?.map((sheet, i) => (
        <SHEET key={i} {...sheet} />
      ))}
    </View>
  );
};

export let ImageSelector = ({ size, onPress, disabled, ...props }) => {
  let ls = size * 0.75;
  let s = squareLayout(ls);
  let r = ls / 2;
  let br = cb(1, r, bct);
  return (
    <View style={[layout("100%", size), bgct, center]}>
      <Button style={[s, br]} onPress={onPress} disabled={disabled}>
        <Image style={[s]} r={r} {...props} />
      </Button>
    </View>
  );
};

export let SECTION = ({ sv, showMore, title, children, ...props }) => {
  let V = sv ? ScrollView : View;
  return (
    <View style={[width("100%"), bgct]}>
      <View
        style={[layout("100%", mt), showMore ? [row, aic, jcsb] : jcc, bgct]}
      >
        <Text style={[fontSize(19), fontWeight("5"), color("#aaaaaa")]}>
          {title}
        </Text>
        {showMore && (
          <Button style={[height(mt * 0.85)]} onPress={showMore?.onPress}>
            {showMore?.children}
          </Button>
        )}
      </View>
      <V {...props} style={[bgct]}>
        {children}
      </V>
    </View>
  );
};

export let AnimSECTION = (props) => {
  let ty = useSharedValue(-mt);
  let tyStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: ty.value }],
    };
  });
  return (
    <AnimView
      onLayout={() => {
        ty.value = withSpring(0);
      }}
      style={[width("100%"), bgct, tyStyle]}
    >
      <SECTION {...props} />
    </AnimView>
  );
};

export let OverflowTextInput = ({ fieldHeight, title, bc, ...props }) => {
  // let { colors } = useTheme();
  let tiref = React.useRef();
  let h = fieldHeight * 1.5;
  let titlePositionY = useSharedValue(0);
  let titleFontSizeScale = useSharedValue(1);
  let tpyStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: titlePositionY.value,
        },
      ],
    };
  });
  let tfssStyle = useAnimatedStyle(() => {
    return {
      fontSize: (titleFontSizeScale.value * h) / 3,
    };
  });
  let focus = () => {
    titlePositionY.value = withSpring(-h * 0.45);
    titleFontSizeScale.value = withSpring(0.75);
    tiref.current?.focus();
  };
  let endEditing = (e) => {
    if (!e.nativeEvent.text) {
      titlePositionY.value = withSpring(0);
      titleFontSizeScale.value = withSpring(1);
      tiref.current?.blur();
    }
  };
  let bor = (bs, br) => [border("", bs), borderColor(bc), borderRadius("", br)];
  let zeroLevel = [position(), zIndex(0)];
  return (
    <AnimView style={[layout("100%", h), margin("v", mt / 3), center]}>
      <View style={[full, zeroLevel, bgct, center]}>
        <View style={[squareLayout("90%"), zeroLevel, bor(2, 10), jcc]}>
          <Input
            Ref={tiref}
            style={[
              squareLayout("90%"),
              padding("h", h / 4),
              fontSize(tfssStyle.fontSize),
              bgct,
            ]}
            onFocus={focus}
            onEndEditing={endEditing}
            {...props}
          />
          {title && (
            <AnimView
              style={[
                padding("h", h / 5),
                margin("h", "2.5%"),
                overlay,
                tpyStyle,
              ]}
            >
              <AnimText
                style={[tfssStyle]}
                // onPress={isFocused ? endEditing : focus}
                onPress={focus}
              >
                {title}
              </AnimText>
            </AnimView>
          )}
        </View>
      </View>
    </AnimView>
  );
};
export let GRID = ({ data = [], Render, cols = 3 }) => {
  // console.log('data : ');
  // console.log(data);
  let dl = data.length;
  let cd = _.chunk(data, cols);
  // console.log("cd : ");
  // console.log(cd);
  let w = 100 / cols;
  return (
    <View
      // sb=""
      style={[
        // bgct,
        width("100%"),
        margin("v", mt / 3),
        // minHeight(dim.height / 3),
        // border("", 1),
        // borderColor(white),
      ]}
    >
      {cd?.map((rw, i) => (
        <View key={i} style={[cols !== 1 && row]}>
          {rw?.map((r, j) => (
            <View key={i * cols + j} style={[width(`${w}%`), center]}>
              <Render {...r} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};
export let TreeModalView = ({ mode }) => {
  let { colors, dark } = useTheme();
  let [name, setName] = React.useState("");
  return (
    <View>
      <SECTION title="NAME">
        <OverflowTextInput
          fieldHeight={mt}
          bc={colors.border}
          value={name}
          onChangeText={setName}
          placeholder="test"
          placeholderTextColor="#aaa"
        />
      </SECTION>
      {mode === "e" && <SECTION title="CHILDREN"></SECTION>}
      <SECTION>
        <SaveButton
          // onPress={() => save(MName, MDevice)}
          style={[layout("100%", mt)]}
          btnStyle={[backgroundColor(colors.primary)]}
          disabled={name?.length === 0}
          text={mode === "n" ? "Create" : "Save"}
        />
        {/* <Button
          style={[layout("100%", mt)]}
          btnStyle={[backgroundColor(colors.primary)]}
          // onPress={() => save(MName, MDevice)}
          disabled={name.length === 0}
        >
          <Text style={[fontSize(20), color(colors.background), bgct]}>
            {mode === "n" ? "Create" : "Save"}
          </Text>
        </Button> */}
      </SECTION>
    </View>
  );
};

export let SaveButton = ({ text, ...props }) => {
  let { primary, background } = useTheme().colors;
  return (
    <SECTION>
      <Button
        style={[layout("100%", mt)]}
        btnStyle={[backgroundColor(primary)]}
        {...props}
      >
        <Text style={[bgct, fontSize(20), color(background)]}>{text}</Text>
      </Button>
    </SECTION>
  );
};

export let Pinch = ({ style, children }) => {
  let [edit, setEdit] = React.useState(false);
  //  scale
  let scale = useSharedValue(1);
  let savedScale = useSharedValue(1);
  let scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  let scaleGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd((e) => {
      savedScale.value = scale.value;
    });
  let empty = Gesture.Pan();
  let toggleEdit = () => setEdit((e) => !e);
  return (
    <AnimButton
      entering={FadeIn}
      exiting={FadeOut}
      style={[scaleStyle]}
      onLongPress={toggleEdit}
    >
      <GestureDetector gesture={edit ? scaleGesture : empty}>
        <AnimView style={[bgct, style]}>{children}</AnimView>
      </GestureDetector>
    </AnimButton>
  );
};
export let Pan = ({ style, children }) => {
  let x = useSharedValue(0);
  let y = useSharedValue(0);
  let xh = useSharedValue(0);
  let yh = useSharedValue(0);
  let panStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
        {
          translateY: y.value,
        },
      ],
    };
  });
  let pan = Gesture.Pan()
    .onUpdate((e) => {
      x.value = e.translationX + xh.value;
      y.value = e.translationY + yh.value;
    })
    .onEnd(() => {
      xh.value = x.value;
      yh.value = y.value;
    });
  return (
    <GestureDetector gesture={pan}>
      <AnimView style={[style, panStyle]}>{children}</AnimView>
    </GestureDetector>
  );
};
export let ThreeDView = ({ style, children }) => {
  let { colors } = useTheme();
  let [edit, setEdit] = React.useState(false);
  let x = useSharedValue(0);
  let y = useSharedValue(0);
  let xh = useSharedValue(0);
  let yh = useSharedValue(0);
  // let panStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateX: x.value,
  //       },
  //       {
  //         translateY: y.value,
  //       },
  //     ],
  //   };
  // });
  let panGesture = Gesture.Pan()
    .onUpdate((e) => {
      x.value = e.translationX + xh.value;
      y.value = e.translationY + yh.value;
    })
    .onEnd(() => {
      xh.value = x.value;
      yh.value = y.value;
    });
  //  rotate
  let rotate = useSharedValue(0);
  let savedRotate = useSharedValue(0);
  let rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateZ: withSpring(`${(rotate.value / Math.PI) * 180}deg`) },
      ],
    };
  });
  let rotateGesture = Gesture.Rotation()
    .onUpdate((e) => {
      rotate.value = savedRotate.value + e.rotation;
    })
    .onEnd((e) => {
      savedRotate.value = rotate.value;
    });
  //  scale
  let scale = useSharedValue(1);
  let savedScale = useSharedValue(1);
  let animStyle = useAnimatedStyle(() => {
    let transform = [
      { scale: scale.value },
      // { rotateZ: `${(rotate.value / Math.PI) * 180}deg` },
      {
        translateX: x.value,
      },
      {
        translateY: y.value,
      },
    ];
    return {
      transform,
    };
  });
  let scaleGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd((e) => {
      savedScale.value = scale.value;
      // runOnJS(toggleModes)("s");
    });
  let EmptyPan = Gesture.Pan().onStart((e) => {});
  let native = Gesture.Race(scaleGesture, panGesture, rotateGesture);
  let btnSize = 1.25 * mt;
  let toggleEdit = () => setEdit((e) => !e);
  return (
    <AnimView style={[bgct, overlay, animStyle]}>
      <AnimView style={[bgct, rotateStyle]}>
        <View
          style={[
            layout("100%", btnSize),
            aife,
            jcc,
            bgct,
            overlay,
            {
              top: -mt,
              left: mt,
            },
          ]}
        >
          {edit && (
            <AnimButton
              style={[
                squareLayout(btnSize * 0.75),
                backgroundColor(colors.primary),
                borderRadius("", btnSize * 0.375),
                center,
              ]}
              entering={FadeIn}
              exiting={FadeOut}
              activeOpacity={0.9}
              onPressIn={(e) => {}}
            >
              <Icon
                type="fe"
                name="rotate-cw"
                size={btnSize / 4}
                color={colors.background}
              />
            </AnimButton>
          )}
        </View>
        <AnimButton
          activeOpacity={0.94}
          style={[]}
          onLongPress={toggleEdit}
          // entering={FadeIn.duration(2500)}
          // exiting={FadeOut.duration(2500)}
        >
          <GestureDetector gesture={edit ? native : EmptyPan}>
            <AnimView style={[bgct, style]}>{children}</AnimView>
          </GestureDetector>
        </AnimButton>
      </AnimView>
    </AnimView>
  );
};
export let ButtonComponent =
  (Component) =>
  ({ style, btnStyle, onPress, disabled, bc, bb, ...props }) => {
    return (
      <View style={[width("100%"), bgct, style]}>
        <Button
          disabled={disabled}
          style={[full]}
          btnStyle={[btnStyle]}
          onPress={onPress}
        >
          <Component {...props} />
        </Button>
        {bb && (
          <View
            style={[
              bgct,
              border("b", 1),
              borderColor(bc),
              margin("t", 5),
              margin("l", mt * 1.35),
            ]}
          />
        )}
      </View>
    );
  };
export let RowAction = ({ ic, aStyle, children }) => {
  // let { colors } = useTheme();
  return (
    <View style={[bgct, row, jcfs, aic, full, aStyle]}>
      <View
        style={[
          bgct,
          squareLayout(mt / 1.25),
          cb(1, mt / 5, tr),
          backgroundColor(ic?.bg),
          margin("r", mt / 3),
          center,
        ]}
      >
        <Icon size={mt * 0.57} {...ic} />
      </View>
      <View
        style={[
          bgct,
          row,
          jcfs,
          aic,
          // border("b", 1),
          // borderColor(colors.border),
        ]}
      >
        {children}
      </View>
    </View>
  );
};
export let BtnRowAction = ButtonComponent(RowAction);
export let AppItem = ({ id, uri, name }) => {
  return (
    <View
      key={id}
      style={[full, bgct, jcse, aic]}
      // entering={BounceIn}
    >
      <Image style={[squareLayout(mt)]} uri={uri} r={12} />
      <Text style={[bgct]}>{name}</Text>
    </View>
  );
};
export let BtnAppItem = ButtonComponent(AppItem);
