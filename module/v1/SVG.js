import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _taggedTemplateLiteralLoose from "@babel/runtime/helpers/taggedTemplateLiteralLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _toArray from "@babel/runtime/helpers/toArray";
function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["M", ",", " "]);
  _templateObject2 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject() {
  var data = _taggedTemplateLiteralLoose([
    "",
    "C",
    ",",
    " ",
    ",",
    " ",
    ",",
    "",
  ]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
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
import Animated, { interpolateNode } from "react-native-reanimated";
import parseSVG from "parse-svg-path";
import absSVG from "abs-svg-path";
import normalizeSVG from "normalize-svg-path";
import { get } from "./Array";
import { string } from "./String";
import { cubicBezier } from "./Math";
import cubicBezierLength from "./bezier/CubicBezierLength";
import cubicBezierSolve from "./bezier/CubicBezierSolve";
var Value = Animated.Value,
  lessOrEq = Animated.lessOrEq,
  greaterOrEq = Animated.greaterOrEq,
  and = Animated.and,
  cond = Animated.cond,
  multiply = Animated.multiply,
  lessThan = Animated.lessThan,
  concat = Animated.concat,
  add = Animated.add;
var MX = 1;
var MY = 2;
var CX1 = 1;
var CY1 = 2;
var CX2 = 3;
var CY2 = 4;
var CX = 5;
var CY = 6;
export var parsePath = function parsePath(d) {
  var _normalizeSVG = normalizeSVG(absSVG(parseSVG(d))),
    _normalizeSVG2 = _toArray(_normalizeSVG),
    move = _normalizeSVG2[0],
    curves = _normalizeSVG2.slice(1);
  var parts = curves.map(function (curve, index) {
    var prevCurve = curves[index - 1];
    var p0 =
      index === 0
        ? { x: move[MX], y: move[MY] }
        : { x: prevCurve[CX], y: prevCurve[CY] };
    var p1 = { x: curve[CX1], y: curve[CY1] };
    var p2 = { x: curve[CX2], y: curve[CY2] };
    var p3 = { x: curve[CX], y: curve[CY] };
    var length = cubicBezierLength(p0, p1, p2, p3);
    return { p0: p0, p1: p1, p2: p2, p3: p3, length: length };
  });
  var segments = parts.map(function (part, index) {
    var start = parts.slice(0, index).reduce(function (acc, p) {
      return acc + p.length;
    }, 0);
    var end = start + part.length;
    return { start: start, end: end, p0x: part.p0.x, p3x: part.p3.x };
  });
  return {
    segments: segments,
    totalLength: parts.reduce(function (acc, part) {
      return acc + part.length;
    }, 0),
    length: parts.map(function (part) {
      return part.length;
    }),
    start: segments.map(function (segment) {
      return segment.start;
    }),
    end: segments.map(function (segment) {
      return segment.end;
    }),
    p0x: parts.map(function (part) {
      return part.p0.x;
    }),
    p0y: parts.map(function (part) {
      return part.p0.y;
    }),
    p1x: parts.map(function (part) {
      return part.p1.x;
    }),
    p1y: parts.map(function (part) {
      return part.p1.y;
    }),
    p2x: parts.map(function (part) {
      return part.p2.x;
    }),
    p2y: parts.map(function (part) {
      return part.p2.y;
    }),
    p3x: parts.map(function (part) {
      return part.p3.x;
    }),
    p3y: parts.map(function (part) {
      return part.p3.y;
    }),
  };
};
export var getPointAtLength = function getPointAtLength(path, length) {
  var notFound = new Value(-1);
  var index = path.segments.reduce(function (acc, p, i) {
    return cond(
      and(greaterOrEq(length, p.start), lessOrEq(length, p.end)),
      i,
      acc,
    );
  }, notFound);
  var start = get(path.start, index);
  var end = get(path.end, index);
  var p0x = get(path.p0x, index);
  var p1x = get(path.p1x, index);
  var p2x = get(path.p2x, index);
  var p3x = get(path.p3x, index);
  var p0y = get(path.p0y, index);
  var p1y = get(path.p1y, index);
  var p2y = get(path.p2y, index);
  var p3y = get(path.p3y, index);
  var t = interpolateNode(length, {
    inputRange: [start, end],
    outputRange: [0, 1],
  });
  return {
    x: cubicBezier(t, p0x, p1x, p2x, p3x),
    y: cubicBezier(t, p0y, p1y, p2y, p3y),
  };
};
export var interpolatePath = function interpolatePath(value, _ref) {
  var inputRange = _ref.inputRange,
    outputRange = _ref.outputRange,
    config = _objectWithoutProperties(_ref, ["inputRange", "outputRange"]);
  var paths = outputRange.map(function (path) {
    return typeof path === "string" ? parsePath(path) : path;
  });
  var _paths = _slicedToArray(paths, 1),
    path = _paths[0];
  var commands = path.segments.map(function (_, index) {
    var interpolatePoint = function interpolatePoint(point) {
      return interpolateNode(
        value,
        _objectSpread(
          {
            inputRange: inputRange,
            outputRange: paths.map(function (p) {
              return p[point][index];
            }),
          },
          config,
        ),
      );
    };
    var mx = interpolatePoint("p0x");
    var my = interpolatePoint("p0y");
    var p1x = interpolatePoint("p1x");
    var p1y = interpolatePoint("p1y");
    var p2x = interpolatePoint("p2x");
    var p2y = interpolatePoint("p2y");
    var p3x = interpolatePoint("p3x");
    var p3y = interpolatePoint("p3y");
    return string(
      _templateObject(),
      index === 0 ? string(_templateObject2(), mx, my) : "",
      p1x,
      p1y,
      p2x,
      p2y,
      p3x,
      p3y,
    );
  });
  return concat.apply(void 0, _toConsumableArray(commands));
};
export var bInterpolatePath = function bInterpolatePath(value, path1, path2) {
  return interpolatePath(value, {
    inputRange: [0, 1],
    outputRange: [path1, path2],
  });
};
export var getLengthAtX = function getLengthAtX(path, x) {
  var notFound = new Value(-1);
  var index = path.segments.reduce(function (acc, p, i) {
    return cond(and(greaterOrEq(x, p.p0x), lessOrEq(x, p.p3x)), i, acc);
  }, notFound);
  var p0 = get(path.p0x, index);
  var p1 = get(path.p1x, index);
  var p2 = get(path.p2x, index);
  var p3 = get(path.p3x, index);
  var t = cubicBezierSolve(p0, p1, p2, p3);
  var length = get(path.length, index);
  var start = add.apply(
    void 0,
    _toConsumableArray(
      path.length.map(function (l, i) {
        return cond(lessThan(i, index), l, 0);
      }),
    ),
  );
  return add(start, multiply(t, length));
};
//# sourceMappingURL=SVG.js.map
