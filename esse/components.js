import { useTheme } from "@react-navigation/native";
import * as React from "react";
import * as RN from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Animatable from "react-native-animatable";
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
  bgct,
  root,
  Root,
  defaultAndroidRippleBorder,
  full,
  center,
  width,
  dim,
  margin_top,
  height,
  margin,
  display,
  flex_direction,
  align_items,
  padding,
  row,
  justify_content,
  co,
  hexToRGB,
  white,
  black,
  overlay,
  backgroundColor,
  position,
  zIndex,
  border,
  borderRadius,
  tbc,
  isAndroid,
  fontSize,
  font_weight,
  color,
  borderColor,
} from "../styles";
import { clamp } from "./funcs";
import { NewAppTypes } from "./staticDatas";
let btnBorder = defaultAndroidRippleBorder;
export let View = ({ children, style, Ref, ...props }) => {
  let { colors } = useTheme();
  let bg = {
    backgroundColor: colors.background,
  };
  return (
    <RN.View ref={Ref} style={[bg, style]} {...props}>
      {children}
    </RN.View>
  );
};
export let AnimView = ({ children, style, Ref, ...props }) => {
  let { colors } = useTheme();
  let bg = {
    backgroundColor: colors.background,
  };
  return (
    <Animated.View ref={Ref} style={[bg, style]} {...props}>
      {children}
    </Animated.View>
  );
};
export let ScrollView = ({ children, style, Ref, ...props }) => {
  let { colors } = useTheme();
  let bg = {
    backgroundColor: colors.background,
  };
  return (
    <RN.ScrollView ref={Ref} style={[bg, style]} {...props}>
      {children}
    </RN.ScrollView>
  );
};
export let AnimatedScrollView = Animated.createAnimatedComponent(RN.ScrollView);
export let Text = ({ children, style, Ref, ...props }) => {
  let { colors } = useTheme();
  let c = {
    color: colors.text,
  };
  return (
    <RN.Text ref={Ref} style={[c, style]} {...props}>
      {children}
    </RN.Text>
  );
};
export let AnimText = ({ children, style, Ref, ...props }) => {
  let { colors } = useTheme();
  let c = {
    color: colors.text,
  };
  return (
    <Animated.Text ref={Ref} style={[c, style]} {...props}>
      {children}
    </Animated.Text>
  );
};
export let TextInput = ({ style, Ref, ...props }) => {
  let { colors } = useTheme();
  let c = {
    color: colors.text,
    ...bgct,
  };
  return (
    <RN.TextInput
      ref={Ref}
      // onEndEditing={(e) => {
      //   e.nativeEvent.text;
      // }}
      style={[c, style]}
      placeholderTextColor="#888888"
      {...props}
    />
  );
};
export let ROOT = ({ children }) => {
  return (
    <View style={[Root]}>
      <View style={[root({ p: 10, headerHeight: margin_top }), bgct]}>
        {children}
      </View>
    </View>
  );
};
export let BUTTON =
  RN.Platform.OS === "android" ? RN.Pressable : RN.TouchableOpacity;
export let AnimatedBUTTON = Animated.createAnimatedComponent(BUTTON);
export let Button = ({
  onPress,
  onLongPress,
  style,
  btnStyle,
  riprad,
  disabled,
  children,
  Ref,
  ...props
}) => {
  let { dark } = useTheme();
  let ripcol = hexToRGB(dark ? white : black, 0.3);
  return (
    <>
      <View style={[bgct, btnBorder, style]}>
        <BUTTON
          style={[full, btnBorder, center, bgct, btnStyle]}
          onPress={onPress}
          onLongPress={onLongPress}
          android_ripple={{
            color: ripcol,
            borderless: true,
            radius: riprad,
            foreground: true,
          }}
          ref={Ref}
          activeOpacity={0.75}
          disabled={disabled}
          {...props}
        >
          {disabled && (
            <View style={[full, overlay, backgroundColor(ripcol), btnBorder]} />
          )}
          {children}
        </BUTTON>
      </View>
    </>
  );
};
export let AnimButton = ({ onPress, ...props }) => {
  let [show, setShow] = React.useState(true);
  let createAnim = useSharedValue(0.1);
  let selectAnim = useSharedValue(0);
  let createStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(1) }],
    };
  });
  // React.useEffect(() => {
  //   let update = (n) => (createAnim.value = withSpring(n));
  //   if (show) {
  //     update(1);
  //     setShow(false);
  //   }
  // });
  return (
    <AnimView
      // onLayout={() => {
      //   createAnim.value = withSpring(1);
      // }}
      style={[createStyle, bgct]}
    >
      <Button onPress={onPress} {...props} />
    </AnimView>
  );
};
export let Image = ({ style, r = 10, uri, ...props }) => {
  let { colors, dark } = useTheme();
  let br = [border("", 1), borderRadius("", r), borderColor(colors.border)];
  let icon = dark
    ? require("../assets/adaptive-icon.png")
    : require("../assets/icon.png");
  let source = uri ? { uri } : icon;
  return (
    <View style={[br, style]}>
      <RN.Image source={source} style={[br, full]} {...props} />
    </View>
  );
};
export let ImageBackground = ({ style, r = 10, uri, children, ...props }) => {
  let { colors, dark } = useTheme();
  let br = [border("", 1), borderRadius("", r), borderColor(colors.border)];
  let icon = dark
    ? require("../assets/adaptive-icon.png")
    : require("../assets/icon.png");
  let source = uri ? { uri } : icon;
  return (
    <RN.ImageBackground source={source} style={[br, style]} {...props}>
      {children}
    </RN.ImageBackground>
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
export let Grid = ({ data, RenderItem, numOfColumns = 4 }) => {
  let dl = data.length;
  let res = [];
  let nocio = numOfColumns === 1;
  let iz = dl % numOfColumns === 0;
  let nr = dl / numOfColumns + (iz ? 0 : 1);
  let w = nocio ? "100%" : (dim.width * 0.8) / numOfColumns;
  let h = nocio ? 1.15 * margin_top : w;
  let pad = (dim.width * 0.2) / numOfColumns;
  for (let i = 0; i < nr; i++) {
    let ri = [];
    for (let j = 0; j < numOfColumns; j++) {
      let ij = i * numOfColumns + j;
      ri.push(
        data[ij] ? (
          <RenderItem w={w} h={h} p={pad / 4} key={ij} {...data[ij]} />
        ) : null
      );
    }
    res.push(
      <View key={i} style={[width("100%"), margin("v", pad), row, bgct]}>
        {ri}
      </View>
    );
  }
  return res;
};
export let DetailToast = ({ text }) => {
  return (
    <View
      style={[
        width(200),
        height(50),
        // margin("", 30),
        position(true),
        zIndex(1),
      ]}
    >
      <View style={[backgroundColor("gray"), padding("", 10)]}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};
export let Sheet = ({ dir, show, hide, title, duration = 2000, children }) => {
  let { dark, colors } = useTheme();
  let m = margin_top,
    s = [],
    cs = [],
    animation = "";
  cs.push(padding("h", m / 4));
  switch (dir) {
    case "t":
      s.push(padding("t", m));
      cs.push(padding("v", m / 4));
      animation = "slideInUp";
      break;
    case "b":
      cs.push(padding("t", m));
      s.push(padding("b", m));
      break;
    case "l":
      s.push(padding("tl", m));
      animation = "slideInRight";
      break;
    case "r":
      s.push(padding("tr", m));
      animation = "slideInLeft";
      break;
    default:
      break;
  }
  let br = [border("", 1), borderRadius(dir, 15), tbc];
  return show ? (
    <AnimView
      style={[
        full,
        overlay,
        backgroundColor(hexToRGB(dark ? white : black, 0.2)),
        s,
      ]}
      // animation="fadeIn"
      // duration={duration}
    >
      <AnimView
        animation={animation}
        duration={duration}
        style={[full, br, cs]}
      >
        <View
          style={[
            row,
            align_items(""),
            justify_content("sb"),
            bgct,
            padding("v", m / 3),
            border("b", 1),
            borderColor(colors.border),
          ]}
        >
          <Text style={[fontSize(22.5), font_weight("5")]}>{title}</Text>
          <Button onPress={hide} riprad={20} style={[width(40), height(40)]}>
            <Icon name="closecircle" size={30} color={colors.primary} />
          </Button>
        </View>
        <ScrollView>{children}</ScrollView>
      </AnimView>
    </AnimView>
  ) : null;
};
export let SHEET = ({ show, hide, title, children }) => {
  let { dark, colors } = useTheme();
  let [preview, setPreview] = React.useState(false);
  let m = margin_top;
  let opacity = useSharedValue(0);
  let offsetY = useSharedValue(0);
  let startOffsetY = useSharedValue(0);
  let close = () => {
    offsetY.value = dim.height;
    opacity.value = withSpring(0);
    togglePreview();
  };
  let togglePreview = () => setPreview((p) => !p);
  let opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
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
        -m,
        dim.height
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
  let br = [border("", 1), borderRadius("t", 25), tbc];
  React.useEffect(() => {
    if (show) {
      hide();
      offsetY.value = dim.height;
      togglePreview();
      opacity.value = withSpring(1);
      offsetY.value = withSpring(0);
    }
  });
  let bg = backgroundColor(hexToRGB(dark ? white : black, 0.2));
  return (
    preview && (
      <AnimView style={[full, overlay, bg, opacityStyle]}>
        <AnimView
          style={[
            width("100%"),
            height(1.1 * dim.height),
            br,
            margin("t", m),
            offsetYStyle,
          ]}
        >
          <GestureDetector gesture={customDrag}>
            <AnimView
              style={[
                row,
                align_items(""),
                justify_content("sb"),
                bgct,
                padding("", m / 2),
                border("b", 1),
                borderColor(colors.border),
                // br
              ]}
            >
              <Text style={[fontSize(22.5), font_weight("5")]}>{title}</Text>
              <Button
                onPress={close}
                riprad={20}
                style={[width(40), height(40)]}
              >
                <Icon name="closecircle" size={30} color={colors.primary} />
              </Button>
            </AnimView>
          </GestureDetector>
          <ScrollView
            style={[padding("h", m / 2), margin("b", 0.11 * dim.height + m)]}
          >
            {children}
          </ScrollView>
        </AnimView>
      </AnimView>
    )
  );
};
export let Section = ({
  title,
  horizontal,
  showMore,
  isChildView,
  children,
}) => {
  let { colors } = useTheme();
  let V = isChildView ? View : ScrollView;
  return (
    <View style={[width("100%"), bgct]}>
      <View
        style={[
          width("100%"),
          height(60),
          showMore && [row, align_items("")],
          justify_content(showMore ? "sb" : ""),
        ]}
      >
        <Text style={[fontSize(20), font_weight("5")]}>{title}</Text>
        {showMore && (
          <Button style={[width(90), height(35)]} onPress={showMore}>
            <Text style={[color(colors.primary)]}>SHOW MORE</Text>
          </Button>
        )}
      </View>
      <V horizontal={horizontal}>{children}</V>
    </View>
  );
};
export let ImageButton = ({ setUri, uri, size, disabled }) => {
  let { colors } = useTheme();
  // let [uri, setUri] = React.useState(Uri);
  let selectIcon = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!res.cancelled) {
      setUri(res.uri);
      // setImageUri(res.uri);
    }
  };
  let r = borderRadius("", size / 2);
  return (
    <Button
      style={[
        width(size),
        height(size),
        border("", 1),
        borderColor(colors.border),
        r,
      ]}
      onPress={selectIcon}
      activeOpacity={0.7}
      disabled={disabled}
    >
      {uri?.length !== 0 && (
        <RN.Image
          source={{ uri, width: "100%", height: "100%" }}
          style={[full, r]}
        />
      )}
    </Button>
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
  let zeroLevel = [position(true), zIndex(0)];
  return (
    <AnimView
      style={[width("100%"), height(h), margin("v", margin_top / 3), center]}
    >
      <View style={[full, zeroLevel, bgct, center]}>
        <View
          style={[
            width("90%"),
            height("90%"),
            zeroLevel,
            bor(2, 10),
            justify_content(""),
          ]}
        >
          <TextInput
            Ref={tiref}
            style={[
              width("90%"),
              height("90%"),
              padding("h", h / 4),
              fontSize(tfssStyle.fontSize),
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
export let ImageSelector = ({ style, btnStyle, onPress, r, ...props }) => {
  return (
    <View style={[style, center]}>
      <Button
        key="Image Button"
        style={[btnStyle]}
        // btnStyle={[borderRadius("", r)]}
        riprad={r}
        onPress={onPress}
      >
        <Image style={[full]} r={r} {...props} />
      </Button>
    </View>
  );
};
export let SECTION = ({ sv, showMore, title, children, ...props }) => {
  let { colors } = useTheme();
  let V = sv ? ScrollView : View;
  return (
    <View style={[width("100%"), bgct]}>
      <View
        style={[
          width("100%"),
          height(60),
          showMore && [row, align_items("")],
          justify_content(showMore ? "sb" : ""),
        ]}
      >
        <Text style={[fontSize(19), font_weight("5"), color("#aaaaaa")]}>
          {title}
        </Text>
        {showMore && (
          <Button style={[height(35)]} onPress={showMore?.onPress}>
            {showMore?.children}
          </Button>
        )}
      </View>
      <V {...props}>{children}</V>
    </View>
  );
};
export let ANIMSECTION = ({ ...props }) => {
  let ty = useSharedValue(-margin_top);
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
export let GRID = ({ data, numOfColumns, Render, circular }) => {
  let { colors } = useTheme();
  let dl = data.length;
  let rowsDBdl = dl % numOfColumns === 0;
  let rows = dl / numOfColumns + (rowsDBdl ? 0 : 1);
  let res = [];
  let size = dim.width / (numOfColumns + 1);
  for (let i = 0; i < rows; i++) {
    let rowJSX = [];
    for (let j = 0; j < numOfColumns; j++) {
      let ij = i * numOfColumns + j;
      rowJSX.push(
        data[ij] ? (
          <View
            key={ij}
            style={[
              width(size),
              height(size * (circular ? 1 : 1.5)),
              margin("lv", size / (numOfColumns * 3)),
              // margin('b', size / 2),
              circular && [
                border("", 1),
                borderColor(colors.border),
                borderRadius("", size / 2),
              ],
            ]}
          >
            <Render {...data[ij]} />
          </View>
        ) : null
      );
    }
    res.push(
      <View key={i} style={[width("100%"), row]}>
        {rowJSX}
      </View>
    );
  }
  return <View>{res}</View>;
};
//  TODO : shape devices here
export let Shape = ({ w, h, r, children }) => {
  let { colors } = useTheme();
  let br = borderRadius("", r);
  return (
    <View
      style={[width(w), height(h), center, backgroundColor(colors.border), br]}
    >
      <View style={[width(w - r / 2), height(h - r / 2), padding('', r / 2), br]}>{children}</View>
    </View>
  );
};
export let DeviceShape = ({ type, title }) => {
  let { colors } = useTheme();
  return <View style={[]}></View>;
};

export let TreeModal = ({ mode, tree, toggleNew, save, updateChild }) => {
  let { colors, dark } = useTheme();
  let [MName, setMName] = React.useState(tree?.value?.name);
  let [MDevice, setMDevice] = React.useState(tree?.value?.device);
  // console.log('\nTreeModal tree : ');
  // console.log(tree);
  return (
    <View>
      <SECTION title="NAME">
        <OverflowTextInput
          fieldHeight={margin_top}
          // title="Name"
          value={MName}
          onChangeText={setMName}
          bc={colors.border}
        />
      </SECTION>
      <SECTION title="SCREEN TYPE">
        <GRID
          data={[{ name: "Mobile" }, { name: "Desktop" }, { name: "Web" }]}
          numOfColumns={3}
          circular
          Render={({ name }) => (
            <Button onPress={() => setMDevice(name)}>
              <Text
                style={[
                  fontSize(15),
                  MDevice === name && color(colors.primary),
                ]}
              >
                {name}
              </Text>
            </Button>
          )}
        />
      </SECTION>
      {mode === "e" && (
        <SECTION
          title="CHILDREN"
          showMore={{
            onPress: toggleNew,
            children: <Icon name="plus" size={24} color={colors.primary} />,
          }}
        >
          {tree?.children?.length === 0 ? (
            <View style={[width("100%"), height(2 * margin_top), center]}>
              <Text style={[fontSize(17), color("#aaaaaa")]}>
                No children yet.
              </Text>
            </View>
          ) : (
            <GRID
              data={tree?.children}
              numOfColumns={3}
              circular
              Render={(tc) => (
                <Button onPress={() => updateChild(tc)}>
                  <Text style={[fontSize(15)]}>{tc?.value?.name}</Text>
                </Button>
              )}
            />
          )}
        </SECTION>
      )}
      <SECTION>
        {/* <Button
          style={[
            width("100%"),
            height(margin_top),
            backgroundColor(colors.primary),
          ]}
          onPress={() => save(MName, MDevice)}
        >
          <Text style={[fontSize(20), color(dark ? black : white)]}>
            {mode === "n" ? "Create" : "Save"}
          </Text>
        </Button> */}
        <SaveButton
          text={mode === "n" ? "Create" : "Save"}
          onPress={() => save(MName, MDevice)}
          disabled={MName?.length === 0 || MDevice?.length === 0}
        />
      </SECTION>
    </View>
  );
};

export let TreeView = ({ tree, onPress }) => {
  let { colors, dark } = useTheme();
  // let np = `children[${children?.length}]`;
  // let pathEmpty = value?.path?.length === 0;
  // let vp = pathEmpty ? "" : ".";
  // let finp = value?.path + vp + np;
  // console.log(tree);
  return (
    <View style={[bgct, align_items("")]}>
      <Button
        btnStyle={[width(135), height(270), justify_content("se")]}
        onPress={() => onPress(tree)}
      >
        <View
          style={[
            width(120),
            height(240),
            border("", 1),
            borderColor(colors.border),
            borderRadius("", 12),
          ]}
        ></View>
        <View>
          <Text>{tree?.value?.name}</Text>
        </View>
      </Button>
      <View style={[bgct, align_items("")]}>
        {tree?.children && (
          <View style={[row, justify_content("fs"), align_items("fs"), bgct]}>
            {tree?.children.map((nc, i) => (
              <TreeView tree={nc} key={i} onPress={onPress} />
            ))}
          </View>
        )}
      </View>
    </View>
  );
};
export let AppTypesView = ({ n = 2, onPress }) => {
  let end = n === 2 ? 4 : NewAppTypes.length;
  let data = NewAppTypes.slice(0, end);
  return (
    <GRID
      data={data}
      circular
      numOfColumns={n}
      Render={(at) => (
        <Button onPress={() => onPress(at)}>
          <Text>{at?.name}</Text>
        </Button>
      )}
    />
  );
};
export let AppTemplatesView = ({ type, n = 2, onPress }) => {
  let nd = NewAppTypes.filter((nat) => nat.name === type)[0].templates;
  let end = n === 2 ? 4 : nd.length;
  let data = nd.slice(0, end);
  return (
    <GRID
      data={data}
      circular
      numOfColumns={n}
      Render={(temp) => (
        <Button onPress={() => onPress(temp)}>
          <Text>{temp?.name}</Text>
        </Button>
      )}
    />
  );
};
export let SaveButton = ({ text, disabled, ...props }) => {
  let { colors, dark } = useTheme();
  return (
    <SECTION>
      <Button
        style={[
          width("100%"),
          height(margin_top),
          backgroundColor(colors.primary),
        ]}
        disabled={disabled}
        {...props}
      >
        <Text style={[fontSize(20), color(dark ? black : white)]}>{text}</Text>
      </Button>
    </SECTION>
  );
};
export let RowButton = ({ icon, text, style, ...props }) => {
  // let { colors } = useTheme();
  return (
    <Button {...props}>
      <View style={[icon?.style, center, bgct]}>
        <Icon {...icon} />
      </View>
      <Text style={[fontSize(icon?.size), color(icon?.color)]}>{text}</Text>
    </Button>
  );
};
export let RowBtns = ({ btns, size, color }) => {
  let { colors } = useTheme();
  return (
    <View style={[bgct, width("100%"), height(btns?.length * (size * 4))]}>
      {btns?.map((btn, i) => (
        <View
          key={i}
          style={[width("100%"), height(3 * size), bgct, margin("v", size / 4)]}
        >
          <RowButton
            icon={{
              size,
              color,
              ...btn?.icon,
              style: [
                width(1.5 * size),
                height(1.5 * size),
                margin("r", 0.2 * size),
                center,
              ],
            }}
            text={btn?.text}
            {...btn?.props}
          />
          {i !== btns?.length - 1 && (
            <View
              style={[
                width("100%"),
                border("b", 1),
                borderColor(colors.border),
                margin("l", 1.7 * size),
              ]}
            />
          )}
        </View>
      ))}
    </View>
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
    <AnimatedBUTTON
      entering={FadeIn}
      exiting={FadeOut}
      style={[scaleStyle]}
      onLongPress={toggleEdit}
    >
      <GestureDetector gesture={edit ? scaleGesture : empty}>
        <AnimView style={[bgct, style]}>{children}</AnimView>
      </GestureDetector>
    </AnimatedBUTTON>
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
  let btnSize = 1.25 * margin_top;
  let toggleEdit = () => setEdit((e) => !e);
  return (
    <AnimView style={[bgct, overlay, animStyle]}>
      <AnimView style={[bgct, rotateStyle]}>
        <View
          style={[
            width("100%"),
            height(btnSize),
            align_items("fe"),
            justify_content(""),
            bgct,
            overlay,
            {
              top: -margin_top,
              left: margin_top,
            },
          ]}
        >
          {edit && (
            <AnimatedBUTTON
              style={[
                width(btnSize * 0.75),
                height(0.75 * btnSize),
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
            </AnimatedBUTTON>
          )}
        </View>
        <AnimatedBUTTON
          activeOpacity={0.94}
          style={[]}
          onLongPress={toggleEdit}
          entering={FadeIn.duration(2500)}
          exiting={FadeOut.duration(2500)}
        >
          <GestureDetector gesture={edit ? native : EmptyPan}>
            <AnimView style={[bgct, style]}>{children}</AnimView>
          </GestureDetector>
        </AnimatedBUTTON>
      </AnimView>
    </AnimView>
  );
};
//  TODO : fix custom menus
export let MenuButton000 = ({ items, MenuItem, layout, children }) => {
  let m = margin_top;
  let [show, setShow] = React.useState(false);
  let [poss, setPoss] = React.useState({
    top: 0,
    left: 2 * m,
    right: 0,
    bottom: 0,
  });
  let [Slide, setSlide] = React.useState({
    in: SlideInLeft,
    out: SlideOutLeft,
  });
  let updateSlide = (type = "l") => {
    setSlide((s) => {
      switch (type) {
        case "r":
          return { in: SlideInRight, out: SlideOutRight };
        case "u":
          return { in: SlideInUp, out: SlideOutUp };
        case "d":
          return { in: SlideInDown, out: SlideOutDown };
        default:
          return s;
      }
    });
    setPoss((p) => {
      switch (type) {
        case "r":
          return { top: 0, right: 2 * m, left: 0, bottom: 0 };
        case "u":
          return { bottom: 0, left: 0, right: 0, top: 2 * m };
        case "d":
          return { bottom: 2 * m, left: 0, right: 0, top: 0 };
        default:
          return p;
      }
    });
  };
  let toggleShow = () => setShow((s) => !s);
  let il = items?.length;
  let w = dim.width / 4;
  let h = dim.height / 4;
  return (
    <View
      style={[bgct, layout]}
      onLayout={({
        nativeEvent: {
          layout: { x, y, width, height },
        },
      }) => {
        console.log("in parent view : ", x, y, "\n");
      }}
    >
      <AnimatedBUTTON
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}
        onPress={toggleShow}
        onLayout={({
          nativeEvent: {
            layout: { x, y, width, height },
          },
        }) => {
          // let a = x + width,
          //   b = y + height;
          // if (a < w / 2) {
          //   if (b < h / 2) updateSlide("d");
          //   else if (b >= h / 2 && b <= dim.height - h / 2) updateSlide("r");
          //   else updateSlide("u");
          // } else if (a > dim.width - w / 2) {
          //   if (b < h / 2) updateSlide("d");
          //   else if (b >= h / 2 && b <= dim.height - h / 2) updateSlide("l");
          //   else updateSlide("u");
          // }
          console.log(x, y, width, height);
          setPoss({ top: height / 4, left: width / 4 });
        }}
      >
        {children}
      </AnimatedBUTTON>
      <RN.Modal
        style={[poss]}
        visible={show}
        onRequestClose={toggleShow}
        transparent
      >
        <AnimView
          style={[width(w * 2), height(h * 2)]}
          entering={FadeIn.duration(1500)}
          exiting={FadeOut.duration(1500)}
        >
          <AnimatedScrollView>
            {items?.map((item, i) => (
              <AnimatedBUTTON
                key={i}
                entering={Slide.in}
                exiting={Slide.out}
                {...item?.props}
              >
                <MenuItem {...item} toggle={toggleShow} />
              </AnimatedBUTTON>
            ))}
          </AnimatedScrollView>
        </AnimView>
      </RN.Modal>
    </View>
  );
};
export let MenuButton = ({ layout, style, children, items, MenuItem }) => {
  let m = margin_top;
  let [show, setShow] = React.useState(false);
  let toggleShow = () => setShow((s) => !s);
  let il = items?.length;
  let w = dim.width / 4;
  let h = dim.height / 4;
  return (
    <View style={[bgct, layout]}>
      <AnimatedBUTTON
        style={[full, style]}
        onPress={toggleShow}
        onLayout={({
          nativeEvent: {
            layout: { x, y, width, height },
          },
        }) => {
          let a = x + width,
            b = y + height;
          if (a < w / 2) {
            if (b < h / 2) updateSlide("d");
            else if (b >= h / 2 && b <= dim.height - h / 2) updateSlide("r");
            else updateSlide("u");
          } else if (a > dim.width - w / 2) {
            if (b < h / 2) updateSlide("d");
            else if (b >= h / 2 && b <= dim.height - h / 2) updateSlide("l");
            else updateSlide("u");
          }
        }}
      >
        {children}
      </AnimatedBUTTON>
      <RN.Modal visible={show} onRequestClose={toggleShow} transparent>
        <AnimatedScrollView
          entering={FadeIn.duration(1500)}
          exiting={FadeOut.duration(1500)}
          style={[height(il * m)]}
        >
          {items?.map((item, i) => (
            <AnimatedBUTTON key={i} {...item?.props}>
              <MenuItem {...item} toggle={toggleShow} />
            </AnimatedBUTTON>
          ))}
        </AnimatedScrollView>
      </RN.Modal>
    </View>
  );
};
//  TODO : end
