import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import { useAnimatedStyle } from "react-native-reanimated";
export var transformOrigin = function transformOrigin(_ref, transformations) {
  "worklet";
  var x = _ref.x,
    y = _ref.y;
  return [{ translateX: x }, { translateY: y }].concat(
    _toConsumableArray(transformations),
    [{ translateX: -x }, { translateY: -y }],
  );
};
export var transformOrigin2d = function transformOrigin2d(
  _ref2,
  transformations,
) {
  "worklet";
  var x = _ref2.x,
    y = _ref2.y;
  return [{ translateX: x }, { translateY: y }].concat(
    _toConsumableArray(transformations),
    [{ translateX: -x }, { translateY: -y }],
  );
};
export var useTranslation = function useTranslation(_ref3) {
  var x = _ref3.x,
    y = _ref3.y;
  return useAnimatedStyle(function () {
    return { transform: [{ translateX: x.value }, { translateY: y.value }] };
  });
};
//# sourceMappingURL=Transforms.js.map
