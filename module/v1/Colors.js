import Animated, {
  interpolateNode,
  Extrapolate,
} from "react-native-reanimated";
import { processColor } from "react-native";
import { mix } from "./Animations";
import { clamp, fract } from "./Math";
var add = Animated.add,
  multiply = Animated.multiply,
  abs = Animated.abs,
  round = Animated.round,
  sub = Animated.sub,
  proc = Animated.proc,
  color = Animated.color,
  greaterThan = Animated.greaterThan,
  cond = Animated.cond;
export var opacity = function opacity(c) {
  return ((c >> 24) & 255) / 255;
};
export var red = function red(c) {
  return (c >> 16) & 255;
};
export var green = function green(c) {
  return (c >> 8) & 255;
};
export var blue = function blue(c) {
  return c & 255;
};
export var hsv2rgb = function hsv2rgb(h, s, v) {
  var K = { x: 1, y: 2 / 3, z: 1 / 3, w: 3 };
  var p = {
    x: abs(sub(multiply(fract(add(h, K.x)), 6), K.w)),
    y: abs(sub(multiply(fract(add(h, K.y)), 6), K.w)),
    z: abs(sub(multiply(fract(add(h, K.z)), 6), K.w)),
  };
  var rgb = {
    x: multiply(v, mix(s, K.x, clamp(sub(p.x, K.x), 0, 1))),
    y: multiply(v, mix(s, K.x, clamp(sub(p.y, K.x), 0, 1))),
    z: multiply(v, mix(s, K.x, clamp(sub(p.z, K.x), 0, 1))),
  };
  return {
    r: round(multiply(rgb.x, 255)),
    g: round(multiply(rgb.y, 255)),
    b: round(multiply(rgb.z, 255)),
  };
};
export var hsv2color = proc(function (h, s, v) {
  var _hsv2rgb = hsv2rgb(h, s, v),
    r = _hsv2rgb.r,
    g = _hsv2rgb.g,
    b = _hsv2rgb.b;
  return color(r, g, b);
});
export var colorForBackground = proc(function (r, g, b) {
  var L = add(multiply(0.299, r), multiply(0.587, g), multiply(0.114, b));
  return cond(greaterThan(L, 186), color(0, 0, 0), color(255, 255, 255));
});
var rgbToHsv = function rgbToHsv(c) {
  var r = red(c) / 255;
  var g = green(c) / 255;
  var b = blue(c) / 255;
  var ma = Math.max(r, g, b);
  var mi = Math.min(r, g, b);
  var h = 0;
  var v = ma;
  var d = ma - mi;
  var s = ma === 0 ? 0 : d / ma;
  if (ma === mi) {
    h = 0;
  } else {
    switch (ma) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
    }
    h /= 6;
  }
  return { h: h, s: s, v: v };
};
var interpolateColorsHSV = function interpolateColorsHSV(
  animationValue,
  inputRange,
  colors,
) {
  var colorsAsHSV = colors.map(function (c) {
    return rgbToHsv(c);
  });
  var h = interpolateNode(animationValue, {
    inputRange: inputRange,
    outputRange: colorsAsHSV.map(function (c) {
      return c.h;
    }),
    extrapolate: Extrapolate.CLAMP,
  });
  var s = interpolateNode(animationValue, {
    inputRange: inputRange,
    outputRange: colorsAsHSV.map(function (c) {
      return c.s;
    }),
    extrapolate: Extrapolate.CLAMP,
  });
  var v = interpolateNode(animationValue, {
    inputRange: inputRange,
    outputRange: colorsAsHSV.map(function (c) {
      return c.v;
    }),
    extrapolate: Extrapolate.CLAMP,
  });
  return hsv2color(h, s, v);
};
var interpolateColorsRGB = function interpolateColorsRGB(
  animationValue,
  inputRange,
  colors,
) {
  var r = round(
    interpolateNode(animationValue, {
      inputRange: inputRange,
      outputRange: colors.map(function (c) {
        return red(c);
      }),
      extrapolate: Extrapolate.CLAMP,
    }),
  );
  var g = round(
    interpolateNode(animationValue, {
      inputRange: inputRange,
      outputRange: colors.map(function (c) {
        return green(c);
      }),
      extrapolate: Extrapolate.CLAMP,
    }),
  );
  var b = round(
    interpolateNode(animationValue, {
      inputRange: inputRange,
      outputRange: colors.map(function (c) {
        return blue(c);
      }),
      extrapolate: Extrapolate.CLAMP,
    }),
  );
  var a = interpolateNode(animationValue, {
    inputRange: inputRange,
    outputRange: colors.map(function (c) {
      return opacity(c);
    }),
    extrapolate: Extrapolate.CLAMP,
  });
  return color(r, g, b, a);
};
export var interpolateColor = function interpolateColor(value, config) {
  var colorSpace =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "rgb";
  var inputRange = config.inputRange;
  var outputRange = config.outputRange.map(function (c) {
    return typeof c === "number" ? c : processColor(c);
  });
  if (colorSpace === "hsv") {
    return interpolateColorsHSV(value, inputRange, outputRange);
  }
  return interpolateColorsRGB(value, inputRange, outputRange);
};
export var mixColor = function mixColor(value, color1, color2) {
  var colorSpace =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "rgb";
  return interpolateColor(
    value,
    { inputRange: [0, 1], outputRange: [color1, color2] },
    colorSpace,
  );
};
//# sourceMappingURL=Colors.js.map
