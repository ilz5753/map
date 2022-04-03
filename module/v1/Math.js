import Animated from "react-native-reanimated";
var eq = Animated.eq,
  set = Animated.set,
  cond = Animated.cond,
  atan = Animated.atan,
  add = Animated.add,
  multiply = Animated.multiply,
  lessThan = Animated.lessThan,
  abs = Animated.abs,
  divide = Animated.divide,
  sub = Animated.sub,
  min2 = Animated.min,
  max2 = Animated.max,
  reRound = Animated.round,
  greaterThan = Animated.greaterThan,
  pow = Animated.pow,
  and = Animated.and,
  greaterOrEq = Animated.greaterOrEq,
  lessOrEq = Animated.lessOrEq,
  proc = Animated.proc,
  floor = Animated.floor;
export var bin = function bin(value) {
  return value ? 1 : 0;
};
export var fract = function fract(x) {
  return sub(x, floor(x));
};
export var sign = function sign(x) {
  return cond(lessThan(x, 0), -1, cond(eq(x, 0), 0, 1));
};
export var min = function min() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key];
  }
  return args.reduce(function (acc, arg) {
    return min2(acc, arg);
  });
};
export var max = function max() {
  for (
    var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  ) {
    args[_key2] = arguments[_key2];
  }
  return args.reduce(function (acc, arg) {
    return max2(acc, arg);
  });
};
export var minus = function minus(x) {
  return multiply(-1, x);
};
export var avg = function avg() {
  return divide(add.apply(void 0, arguments), arguments.length);
};
export var clamp = proc(function (value, lowerBound, upperBound) {
  return min2(max2(lowerBound, value), upperBound);
});
export var between = function between(value, lowerBound, upperBound) {
  var inclusive =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  if (inclusive) {
    return and(greaterOrEq(value, lowerBound), lessOrEq(value, upperBound));
  }
  return and(greaterThan(value, lowerBound), lessThan(value, upperBound));
};
export var approximates = proc(function (a, b) {
  var precision =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.001;
  return lessThan(abs(sub(a, b)), precision);
});
export var toRad = proc(function (deg) {
  return multiply(deg, Math.PI / 180);
});
export var toDeg = proc(function (rad) {
  return multiply(rad, 180 / Math.PI);
});
export var atan2 = proc(function (y, x) {
  var a = atan(divide(y, x));
  var PI = Math.PI;
  return cond(
    greaterThan(x, 0),
    a,
    cond(
      and(lessThan(x, 0), greaterOrEq(y, 0)),
      add(a, PI),
      cond(
        and(lessThan(x, 0), lessThan(y, 0)),
        sub(a, PI),
        cond(
          and(eq(x, 0), greaterThan(y, 0)),
          PI / 2,
          cond(and(eq(x, 0), lessThan(y, 0)), -PI / 2, 0),
        ),
      ),
    ),
  );
});
export var cubicBezier = proc(function (t, p0, p1, p2, p3) {
  var term = sub(1, t);
  var a = multiply(1, pow(term, 3), pow(t, 0), p0);
  var b = multiply(3, pow(term, 2), pow(t, 1), p1);
  var c = multiply(3, pow(term, 1), pow(t, 2), p2);
  var d = multiply(1, pow(term, 0), pow(t, 3), p3);
  return add(a, b, c, d);
});
export var round = proc(function (value) {
  var precision =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var p = pow(10, precision);
  return divide(reRound(multiply(value, p)), p);
});
export var inc = proc(function (value) {
  return set(value, add(value, 1));
});
export var dec = proc(function (value) {
  return set(value, sub(value, 1));
});
//# sourceMappingURL=Math.js.map
