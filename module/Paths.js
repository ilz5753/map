import Animated, { interpolate } from "react-native-reanimated";
import parseSVG from "parse-svg-path";
import absSVG from "abs-svg-path";
import normalizeSVG from "normalize-svg-path";
import { cartesian2Polar } from "./Coordinates";
import { cubicBezierYForX } from "./Math";
export var serialize = function serialize(path) {
  "worklet";
  return (
    "M" +
    path.move.x +
    "," +
    path.move.y +
    " " +
    path.curves
      .map(function (c) {
        return (
          "C" +
          c.c1.x +
          "," +
          c.c1.y +
          " " +
          c.c2.x +
          "," +
          c.c2.y +
          " " +
          c.to.x +
          "," +
          c.to.y
        );
      })
      .join(" ") +
    (path.close ? "Z" : "")
  );
};
export var parse = function parse(d) {
  var segments = normalizeSVG(absSVG(parseSVG(d)));
  var path = createPath({ x: segments[0][1], y: segments[0][2] });
  segments.forEach(function (segment) {
    if (segment[0] === "Z") {
      close(path);
    } else if (segment[0] === "C") {
      addCurve(path, {
        c1: { x: segment[1], y: segment[2] },
        c2: { x: segment[3], y: segment[4] },
        to: { x: segment[5], y: segment[6] },
      });
    }
  });
  return path;
};
export var interpolatePath = function interpolatePath(
  value,
  inputRange,
  outputRange,
) {
  "worklet";
  var extrapolate =
    arguments.length > 3 && arguments[3] !== undefined
      ? arguments[3]
      : Animated.Extrapolate.CLAMP;
  var path = {
    move: {
      x: interpolate(
        value,
        inputRange,
        outputRange.map(function (p) {
          return p.move.x;
        }),
        extrapolate,
      ),
      y: interpolate(
        value,
        inputRange,
        outputRange.map(function (p) {
          return p.move.y;
        }),
        extrapolate,
      ),
    },
    curves: outputRange[0].curves.map(function (_, index) {
      return {
        c1: {
          x: interpolate(
            value,
            inputRange,
            outputRange.map(function (p) {
              return p.curves[index].c1.x;
            }),
            extrapolate,
          ),
          y: interpolate(
            value,
            inputRange,
            outputRange.map(function (p) {
              return p.curves[index].c1.y;
            }),
            extrapolate,
          ),
        },
        c2: {
          x: interpolate(
            value,
            inputRange,
            outputRange.map(function (p) {
              return p.curves[index].c2.x;
            }),
            extrapolate,
          ),
          y: interpolate(
            value,
            inputRange,
            outputRange.map(function (p) {
              return p.curves[index].c2.y;
            }),
            extrapolate,
          ),
        },
        to: {
          x: interpolate(
            value,
            inputRange,
            outputRange.map(function (p) {
              return p.curves[index].to.x;
            }),
            extrapolate,
          ),
          y: interpolate(
            value,
            inputRange,
            outputRange.map(function (p) {
              return p.curves[index].to.y;
            }),
            extrapolate,
          ),
        },
      };
    }),
    close: outputRange[0].close,
  };
  return serialize(path);
};
export var mixPath = function mixPath(value, p1, p2) {
  "worklet";
  var extrapolate =
    arguments.length > 3 && arguments[3] !== undefined
      ? arguments[3]
      : Animated.Extrapolate.CLAMP;
  return interpolatePath(value, [0, 1], [p1, p2], extrapolate);
};
export var createPath = function createPath(move) {
  "worklet";
  return { move: move, curves: [], close: false };
};
export var addArc = function addArc(path, corner, to) {
  "worklet";
  var last = path.curves[path.curves.length - 1];
  var from = last ? last.to : path.move;
  var arc = 9 / 16;
  path.curves.push({
    c1: {
      x: (corner.x - from.x) * arc + from.x,
      y: (corner.y - from.y) * arc + from.y,
    },
    c2: {
      x: (corner.x - to.x) * arc + to.x,
      y: (corner.y - to.y) * arc + to.y,
    },
    to: to,
  });
};
export var addCurve = function addCurve(path, c) {
  "worklet";
  path.curves.push({ c1: c.c1, c2: c.c2, to: c.to });
};
export var addLine = function addLine(path, to) {
  "worklet";
  var last = path.curves[path.curves.length - 1];
  var from = last ? last.to : path.move;
  path.curves.push({ c1: from, c2: to, to: to });
};
export var addQuadraticCurve = function addQuadraticCurve(path, cp, to) {
  "worklet";
  var last = path.curves[path.curves.length - 1];
  var from = last ? last.to : path.move;
  path.curves.push({
    c1: { x: from.x / 3 + (2 / 3) * cp.x, y: from.y / 3 + (2 / 3) * cp.y },
    c2: { x: to.x / 3 + (2 / 3) * cp.x, y: to.y / 3 + (2 / 3) * cp.y },
    to: to,
  });
};
export var close = function close(path) {
  "worklet";
  path.close = true;
};
var curveIsFound = function curveIsFound(c) {
  "worklet";
  return c.curve !== null;
};
export var selectCurve = function selectCurve(path, x) {
  "worklet";
  var result = { from: path.move, curve: null };
  for (var i = 0; i < path.curves.length; i++) {
    var c = path.curves[i];
    var contains =
      result.from.x > c.to.x
        ? x >= c.to.x && x <= result.from.x
        : x >= result.from.x && x <= c.to.x;
    if (contains) {
      result.curve = c;
      break;
    }
    result.from = c.to;
  }
  if (!curveIsFound(result)) {
    return null;
  }
  return result;
};
export var getYForX = function getYForX(path, x) {
  "worklet";
  var precision =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  var c = selectCurve(path, x);
  if (c === null) {
    return null;
  }
  return cubicBezierYForX(
    x,
    c.from,
    c.curve.c1,
    c.curve.c2,
    c.curve.to,
    precision,
  );
};
var controlPoint = function controlPoint(
  current,
  previous,
  next,
  reverse,
  smoothing,
) {
  "worklet";
  var p = previous || current;
  var n = next || current;
  var lengthX = n.x - p.x;
  var lengthY = n.y - p.y;
  var o = cartesian2Polar({ x: lengthX, y: lengthY });
  var angle = o.theta + (reverse ? Math.PI : 0);
  var length = o.radius * smoothing;
  var x = current.x + Math.cos(angle) * length;
  var y = current.y + Math.sin(angle) * length;
  return { x: x, y: y };
};
var exhaustiveCheck = function exhaustiveCheck(a) {
  throw new Error("Unexhaustive handling for " + a);
};
export var curveLines = function curveLines(points, smoothing, strategy) {
  "worklet";
  var path = createPath(points[0]);
  for (var i = 0; i < points.length; i++) {
    if (i === 0) {
      continue;
    }
    var point = points[i];
    var next = points[i + 1];
    var prev = points[i - 1];
    var cps = controlPoint(prev, points[i - 2], point, false, smoothing);
    var cpe = controlPoint(point, prev, next, true, smoothing);
    switch (strategy) {
      case "simple":
        var cp = { x: (cps.x + cpe.x) / 2, y: (cps.y + cpe.y) / 2 };
        addQuadraticCurve(path, cp, point);
        break;
      case "bezier":
        var p0 = points[i - 2] || prev;
        var p1 = points[i - 1];
        var cp1x = (2 * p0.x + p1.x) / 3;
        var cp1y = (2 * p0.y + p1.y) / 3;
        var cp2x = (p0.x + 2 * p1.x) / 3;
        var cp2y = (p0.y + 2 * p1.y) / 3;
        var cp3x = (p0.x + 4 * p1.x + point.x) / 6;
        var cp3y = (p0.y + 4 * p1.y + point.y) / 6;
        path.curves.push({
          c1: { x: cp1x, y: cp1y },
          c2: { x: cp2x, y: cp2y },
          to: { x: cp3x, y: cp3y },
        });
        if (i === points.length - 1) {
          path.curves.push({
            to: points[points.length - 1],
            c1: points[points.length - 1],
            c2: points[points.length - 1],
          });
        }
        break;
      case "complex":
        path.curves.push({ to: point, c1: cps, c2: cpe });
        break;
      default:
        exhaustiveCheck(strategy);
    }
  }
  return path;
};
//# sourceMappingURL=Paths.js.map
