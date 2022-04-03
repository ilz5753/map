import Animated, { tan } from "react-native-reanimated";
var add = Animated.add,
  multiply = Animated.multiply,
  cos = Animated.cos,
  sin = Animated.sin,
  divide = Animated.divide;
var exhaustiveCheck = function exhaustiveCheck(a) {
  throw new Error("Unexhaustive handling for " + a);
};
export var identityMatrix4 = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];
var translateXMatrix = function translateXMatrix(x) {
  return [
    [1, 0, 0, x],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];
};
var translateYMatrix = function translateYMatrix(y) {
  return [
    [1, 0, 0, 0],
    [0, 1, 0, y],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];
};
var translateZMatrix = function translateZMatrix(z) {
  return [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, z],
    [0, 0, 0, 1],
  ];
};
var scaleMatrix = function scaleMatrix(s) {
  return [
    [s, 0, 0, 0],
    [0, s, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];
};
var scaleXMatrix = function scaleXMatrix(s) {
  return [
    [s, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];
};
var skewXMatrix = function skewXMatrix(s) {
  return [
    [1, tan(s), 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];
};
var skewYMatrix = function skewYMatrix(s) {
  return [
    [1, 0, 0, 0],
    [tan(s), 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];
};
var scaleYMatrix = function scaleYMatrix(s) {
  return [
    [1, 0, 0, 0],
    [0, s, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];
};
var perspectiveMatrix = function perspectiveMatrix(p) {
  return [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, divide(-1, p), 1],
  ];
};
var rotateXMatrix = function rotateXMatrix(r) {
  return [
    [1, 0, 0, 0],
    [0, cos(r), multiply(-1, sin(r)), 0],
    [0, sin(r), cos(r), 0],
    [0, 0, 0, 1],
  ];
};
var rotateYMatrix = function rotateYMatrix(r) {
  return [
    [cos(r), 0, sin(r), 0],
    [0, 1, 0, 0],
    [multiply(-1, sin(r)), 0, cos(r), 0],
    [0, 0, 0, 1],
  ];
};
var rotateZMatrix = function rotateZMatrix(r) {
  return [
    [cos(r), multiply(-1, sin(r)), 0, 0],
    [sin(r), cos(r), 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];
};
export var dot4 = function dot4(row, col) {
  return add(
    multiply(row[0], col[0]),
    multiply(row[1], col[1]),
    multiply(row[2], col[2]),
    multiply(row[3], col[3]),
  );
};
export var matrixVecMul4 = function matrixVecMul4(m, v) {
  return [dot4(m[0], v), dot4(m[1], v), dot4(m[2], v), dot4(m[3], v)];
};
export var multiply4 = function multiply4(m1, m2) {
  var col0 = [m2[0][0], m2[1][0], m2[2][0], m2[3][0]];
  var col1 = [m2[0][1], m2[1][1], m2[2][1], m2[3][1]];
  var col2 = [m2[0][2], m2[1][2], m2[2][2], m2[3][2]];
  var col3 = [m2[0][3], m2[1][3], m2[2][3], m2[3][3]];
  return [
    [
      dot4(m1[0], col0),
      dot4(m1[0], col1),
      dot4(m1[0], col2),
      dot4(m1[0], col3),
    ],
    [
      dot4(m1[1], col0),
      dot4(m1[1], col1),
      dot4(m1[1], col2),
      dot4(m1[1], col3),
    ],
    [
      dot4(m1[2], col0),
      dot4(m1[2], col1),
      dot4(m1[2], col2),
      dot4(m1[2], col3),
    ],
    [
      dot4(m1[3], col0),
      dot4(m1[3], col1),
      dot4(m1[3], col2),
      dot4(m1[3], col3),
    ],
  ];
};
export var processTransform3d = function processTransform3d(transforms) {
  return transforms.reduce(function (acc, transform) {
    var key = Object.keys(transform)[0];
    if (key === "translateX") {
      var value = transform[key];
      return multiply4(acc, translateXMatrix(value));
    }
    if (key === "translateY") {
      var _value = transform[key];
      return multiply4(acc, translateYMatrix(_value));
    }
    if (key === "translateZ") {
      var _value2 = transform[key];
      return multiply4(acc, translateZMatrix(_value2));
    }
    if (key === "scale") {
      var _value3 = transform[key];
      return multiply4(acc, scaleMatrix(_value3));
    }
    if (key === "scaleX") {
      var _value4 = transform[key];
      return multiply4(acc, scaleXMatrix(_value4));
    }
    if (key === "scaleY") {
      var _value5 = transform[key];
      return multiply4(acc, scaleYMatrix(_value5));
    }
    if (key === "skewX") {
      var _value6 = transform[key];
      return multiply4(acc, skewXMatrix(_value6));
    }
    if (key === "skewY") {
      var _value7 = transform[key];
      return multiply4(acc, skewYMatrix(_value7));
    }
    if (key === "rotateX") {
      var _value8 = transform[key];
      return multiply4(acc, rotateXMatrix(_value8));
    }
    if (key === "rotateY") {
      var _value9 = transform[key];
      return multiply4(acc, rotateYMatrix(_value9));
    }
    if (key === "perspective") {
      var _value10 = transform[key];
      return multiply4(acc, perspectiveMatrix(_value10));
    }
    if (key === "rotate" || key === "rotateZ") {
      var _value11 = transform[key];
      return multiply4(acc, rotateZMatrix(_value11));
    }
    if (key === "matrix") {
      var matrix = transform[key];
      return multiply4(acc, matrix);
    }
    return exhaustiveCheck(key);
  }, identityMatrix4);
};
//# sourceMappingURL=Matrix4.js.map
