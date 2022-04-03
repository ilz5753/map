import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _jsxFileName =
  "/Users/apple/Downloads/react-native-redash-master/src/ReText.tsx";
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}
import React from "react";
import { StyleSheet, TextInput } from "react-native";
import Animated, { useAnimatedProps } from "react-native-reanimated";
var styles = StyleSheet.create({ baseStyle: { color: "black" } });
Animated.addWhitelistedNativeProps({ text: true });
var AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
var ReText = function ReText(props) {
  var _style$props = _objectSpread({ style: {} }, props),
    text = _style$props.text,
    style = _style$props.style;
  var animatedProps = useAnimatedProps(function () {
    return { text: text.value };
  });
  return React.createElement(
    AnimatedTextInput,
    _extends(
      {
        underlineColorAndroid: "transparent",
        editable: false,
        value: text.value,
        style: [styles.baseStyle, style],
      },
      { animatedProps: animatedProps },
      { __source: { fileName: _jsxFileName, lineNumber: 30, columnNumber: 5 } },
    ),
  );
};
export default ReText;
//# sourceMappingURL=ReText.js.map
