import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import Animated, { block, defined } from "react-native-reanimated";
import { clamp, max, min } from "./Math";
import { decompose2d } from "./Matrix3";
var Value = Animated.Value,
  set = Animated.set,
  add = Animated.add,
  multiply = Animated.multiply,
  cond = Animated.cond,
  eq = Animated.eq,
  abs = Animated.abs,
  sub = Animated.sub,
  not = Animated.not,
  lessThan = Animated.lessThan,
  greaterThan = Animated.greaterThan,
  divide = Animated.divide,
  modulo = Animated.modulo,
  proc = Animated.proc;
export var mix = proc(function (value, x, y) {
  return add(x, multiply(value, sub(y, x)));
});
export var step = proc(function (value, edge) {
  return lessThan(value, edge);
});
export var smoothstep = proc(function (value, edge0, edge1) {
  var t = clamp(divide(sub(value, edge0), sub(edge1, edge0)), 0, 1);
  return multiply(t, t, sub(3, multiply(2, t)));
});
export var tween2d = function tween2d(value, t1, t2) {
  var d1 = decompose2d(t1);
  var d2 = decompose2d(t2);
  var translateX = mix(value, d1[0].translateX, d2[0].translateX);
  var translateY = mix(value, d1[1].translateY, d2[1].translateY);
  var skewX = mix(value, d1[2].rotateZ, d2[2].rotateZ);
  var scaleX = mix(value, d1[3].scaleX, d2[3].scaleX);
  var scaleY = mix(value, d1[4].scaleY, d2[4].scaleY);
  var rotateZ = mix(value, d1[5].rotateZ, d2[5].rotateZ);
  return [
    { translateX: translateX },
    { translateY: translateY },
    { rotateZ: skewX },
    { scaleX: scaleX },
    { scaleY: scaleY },
    { rotateZ: rotateZ },
  ];
};
export var diff = function diff(v) {
  var stash = new Value(0);
  var prev = new Value();
  return block([
    set(stash, cond(defined(prev), sub(v, prev), 0)),
    set(prev, v),
    stash,
  ]);
};
export var diffClamp = function diffClamp(a, minVal, maxVal) {
  var value = new Value();
  return set(
    value,
    min(max(add(cond(defined(value), value, a), diff(a)), minVal), maxVal),
  );
};
export var moving = function moving(position) {
  var minPositionDelta =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e-3;
  var emptyFrameThreshold =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
  var delta = diff(position);
  var noMovementFrames = new Value(0);
  return cond(
    lessThan(abs(delta), minPositionDelta),
    [
      set(noMovementFrames, add(noMovementFrames, 1)),
      not(greaterThan(noMovementFrames, emptyFrameThreshold)),
    ],
    [set(noMovementFrames, 0), 1],
  );
};
export var snapPoint = function snapPoint(value, velocity, points) {
  var point = add(value, multiply(0.2, velocity));
  var diffPoint = function diffPoint(p) {
    return abs(sub(point, p));
  };
  var deltas = points.map(function (p) {
    return diffPoint(p);
  });
  var minDelta = min.apply(void 0, _toConsumableArray(deltas));
  return points.reduce(function (acc, p) {
    return cond(eq(diffPoint(p), minDelta), p, acc);
  }, new Value());
};
export var addTo = proc(function (value, node) {
  return set(value, add(value, node));
});
export var subTo = proc(function (value, node) {
  return set(value, sub(value, node));
});
export var multiplyTo = proc(function (value, node) {
  return set(value, multiply(value, node));
});
export var divideTo = proc(function (value, node) {
  return set(value, divide(value, node));
});
export var moduloTo = proc(function (value, node) {
  return set(value, modulo(value, node));
});
//# sourceMappingURL=Animations.js.map
