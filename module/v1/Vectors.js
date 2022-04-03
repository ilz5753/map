import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import Animated from "react-native-reanimated";
import { clamp as clamp1 } from "./Math";
var Value = Animated.Value,
  block = Animated.block;
var create = function create(x, y) {
  var _ref;
  return {
    x: x != null ? x : 0,
    y: (_ref = y != null ? y : x) != null ? _ref : 0,
  };
};
var createValue = function createValue() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 ? arguments[1] : undefined;
  return create(new Value(x), new Value(y != null ? y : x));
};
var isAdaptable = function isAdaptable(value) {
  return (
    typeof value === "number" ||
    value instanceof Animated.Node ||
    value instanceof Animated.Value
  );
};
var get = function get(vectors, dimension) {
  return vectors.map(function (vector) {
    return isAdaptable(vector) ? vector : vector[dimension];
  });
};
var apply = function apply(fn) {
  for (
    var _len = arguments.length,
      vectors = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    vectors[_key - 1] = arguments[_key];
  }
  return {
    x: fn.apply(void 0, _toConsumableArray(get(vectors, "x"))),
    y: fn.apply(void 0, _toConsumableArray(get(vectors, "y"))),
  };
};
var add = function add() {
  for (
    var _len2 = arguments.length, vectors = new Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  ) {
    vectors[_key2] = arguments[_key2];
  }
  return apply.apply(void 0, [Animated.add].concat(vectors));
};
var sub = function sub() {
  for (
    var _len3 = arguments.length, vectors = new Array(_len3), _key3 = 0;
    _key3 < _len3;
    _key3++
  ) {
    vectors[_key3] = arguments[_key3];
  }
  return apply.apply(void 0, [Animated.sub].concat(vectors));
};
var div = function div() {
  for (
    var _len4 = arguments.length, vectors = new Array(_len4), _key4 = 0;
    _key4 < _len4;
    _key4++
  ) {
    vectors[_key4] = arguments[_key4];
  }
  return apply.apply(void 0, [Animated.divide].concat(vectors));
};
var mul = function mul() {
  for (
    var _len5 = arguments.length, vectors = new Array(_len5), _key5 = 0;
    _key5 < _len5;
    _key5++
  ) {
    vectors[_key5] = arguments[_key5];
  }
  return apply.apply(void 0, [Animated.multiply].concat(vectors));
};
var pow = function pow() {
  for (
    var _len6 = arguments.length, vectors = new Array(_len6), _key6 = 0;
    _key6 < _len6;
    _key6++
  ) {
    vectors[_key6] = arguments[_key6];
  }
  return apply.apply(void 0, [Animated.pow].concat(vectors));
};
var sqrt = function sqrt() {
  for (
    var _len7 = arguments.length, vectors = new Array(_len7), _key7 = 0;
    _key7 < _len7;
    _key7++
  ) {
    vectors[_key7] = arguments[_key7];
  }
  return apply.apply(void 0, [Animated.sqrt].concat(vectors));
};
var cos = function cos() {
  for (
    var _len8 = arguments.length, vectors = new Array(_len8), _key8 = 0;
    _key8 < _len8;
    _key8++
  ) {
    vectors[_key8] = arguments[_key8];
  }
  return apply.apply(void 0, [Animated.cos].concat(vectors));
};
var sin = function sin() {
  for (
    var _len9 = arguments.length, vectors = new Array(_len9), _key9 = 0;
    _key9 < _len9;
    _key9++
  ) {
    vectors[_key9] = arguments[_key9];
  }
  return apply.apply(void 0, [Animated.sin].concat(vectors));
};
var min = function min(vector, value) {
  return apply(Animated.min, vector, value);
};
var max = function max(vector, value) {
  return apply(Animated.max, vector, value);
};
var clamp = function clamp(value, minVec, maxVec) {
  return apply(clamp1, value, minVec, maxVec);
};
var minus = function minus(a) {
  return mul(-1, a);
};
var set = function set(a, b) {
  return block([
    Animated.set(a.x, isAdaptable(b) ? b : b.x),
    Animated.set(a.y, isAdaptable(b) ? b : b.y),
  ]);
};
var length = function length(v) {
  return Animated.sqrt(
    Animated.add(Animated.pow(v.x, 2), Animated.pow(v.y, 2)),
  );
};
var normalize = function normalize(v) {
  return div(v, length(v));
};
var dot = function dot(v1, v2) {
  return add(Animated.multiply(v1.x, v2.x), Animated.multiply(v1.y, v2.y));
};
var cross = function cross(v1, v2) {
  return sub(Animated.multiply(v1.x, v2.y), Animated.multiply(v1.y, v2.x));
};
export var vec = {
  create: create,
  createValue: createValue,
  minus: minus,
  add: add,
  sub: sub,
  dot: dot,
  div: div,
  mul: mul,
  multiply: mul,
  divide: div,
  pow: pow,
  sqrt: sqrt,
  set: set,
  clamp: clamp,
  apply: apply,
  min: min,
  max: max,
  cos: cos,
  sin: sin,
  length: length,
  normalize: normalize,
  cross: cross,
};
//# sourceMappingURL=Vectors.js.map
