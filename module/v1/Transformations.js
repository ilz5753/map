import Animated from "react-native-reanimated";
import { vec } from "./Vectors";
var divide = Animated.divide,
  sub = Animated.sub,
  multiply = Animated.multiply,
  add = Animated.add,
  cos = Animated.cos,
  sin = Animated.sin;
export var translateZ = function translateZ(perspective, z) {
  return { scale: divide(perspective, sub(perspective, z)) };
};
export var translate = function translate(_ref) {
  var translateX = _ref.x,
    translateY = _ref.y;
  return [{ translateX: translateX }, { translateY: translateY }];
};
export var transformOrigin = function transformOrigin(_ref2) {
  var x = _ref2.x,
    y = _ref2.y;
  for (
    var _len = arguments.length,
      transformations = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    transformations[_key - 1] = arguments[_key];
  }
  return [{ translateX: x }, { translateY: y }].concat(transformations, [
    { translateX: multiply(x, -1) },
    { translateY: multiply(y, -1) },
  ]);
};
export var rotateTranslation = function rotateTranslation(tr, rotate) {
  return {
    x: sub(multiply(tr.x, cos(rotate)), multiply(tr.y, sin(rotate))),
    y: add(multiply(tr.x, sin(rotate)), multiply(tr.y, cos(rotate))),
  };
};
export var scaleTranslation = function scaleTranslation(tr, scale) {
  return vec.multiply(tr, scale);
};
//# sourceMappingURL=Transformations.js.map
