import Animated from "react-native-reanimated";
import { atan2 } from "./Math";
var sub = Animated.sub,
  multiply = Animated.multiply,
  add = Animated.add,
  cos = Animated.cos,
  sin = Animated.sin,
  pow = Animated.pow,
  sqrt = Animated.sqrt;
export var canvas2Cartesian = function canvas2Cartesian(_ref, center) {
  var x = _ref.x,
    y = _ref.y;
  return { x: sub(x, center.x), y: multiply(sub(y, center.y), -1) };
};
export var cartesian2Canvas = function cartesian2Canvas(_ref2, center) {
  var x = _ref2.x,
    y = _ref2.y;
  return { x: add(x, center.x), y: add(multiply(y, -1), center.y) };
};
export var cartesian2Polar = function cartesian2Polar(_ref3) {
  var x = _ref3.x,
    y = _ref3.y;
  return { theta: atan2(y, x), radius: sqrt(add(pow(x, 2), pow(y, 2))) };
};
export var polar2Cartesian = function polar2Cartesian(_ref4) {
  var theta = _ref4.theta,
    radius = _ref4.radius;
  return { x: multiply(radius, cos(theta)), y: multiply(radius, sin(theta)) };
};
export var polar2Canvas = function polar2Canvas(_ref5, center) {
  var theta = _ref5.theta,
    radius = _ref5.radius;
  return cartesian2Canvas(
    polar2Cartesian({ theta: theta, radius: radius }),
    center,
  );
};
export var canvas2Polar = function canvas2Polar(_ref6, center) {
  var x = _ref6.x,
    y = _ref6.y;
  return cartesian2Polar(canvas2Cartesian({ x: x, y: y }, center));
};
//# sourceMappingURL=Coordinates.js.map
