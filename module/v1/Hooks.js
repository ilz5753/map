import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
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
import Animated from "react-native-reanimated";
import { useRef } from "react";
import {
  onGestureEvent,
  panGestureHandler,
  pinchGestureHandler,
  rotationGestureHandler,
  tapGestureHandler,
  scrollHandler,
} from "./Gesture";
import { vec } from "./Vectors";
import { loop } from "./AnimationRunners";
var Clock = Animated.Clock,
  Value = Animated.Value,
  diff = Animated.diff,
  set = Animated.set,
  useCode = Animated.useCode,
  debug = Animated.debug,
  block = Animated.block;
export function useConst(initialValue) {
  var ref = useRef();
  if (ref.current === undefined) {
    ref.current = {
      value: typeof initialValue === "function" ? initialValue() : initialValue,
    };
  }
  return ref.current.value;
}
export var useGestureHandler = function useGestureHandler(nativeEvent) {
  return useConst(function () {
    return onGestureEvent(nativeEvent);
  });
};
export var usePanGestureHandler = function usePanGestureHandler() {
  return useConst(function () {
    return panGestureHandler();
  });
};
export var useRotationGestureHandler = function useRotationGestureHandler() {
  return useConst(function () {
    return rotationGestureHandler();
  });
};
export var usePinchGestureHandler = function usePinchGestureHandler() {
  return useConst(function () {
    return pinchGestureHandler();
  });
};
export var useTapGestureHandler = function useTapGestureHandler() {
  return useConst(function () {
    return tapGestureHandler();
  });
};
export var useScrollHandler = function useScrollHandler() {
  return useConst(function () {
    return scrollHandler();
  });
};
export var useVector = function useVector() {
  for (
    var _len = arguments.length, defaultValues = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    defaultValues[_key] = arguments[_key];
  }
  return useConst(function () {
    return vec.createValue.apply(vec, defaultValues);
  });
};
export var useVectors = function useVectors() {
  for (
    var _len2 = arguments.length, defaultValues = new Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  ) {
    defaultValues[_key2] = arguments[_key2];
  }
  return useConst(function () {
    return defaultValues.map(function (values) {
      return vec.createValue.apply(vec, _toConsumableArray(values));
    });
  });
};
export var useClock = function useClock() {
  return useConst(function () {
    return new Clock();
  });
};
export var useValue = function useValue(value) {
  return useConst(function () {
    return new Value(value);
  });
};
export var usePhysicsState = function usePhysicsState() {
  return {
    time: useValue(0),
    position: useValue(0),
    velocity: useValue(0),
    finished: useValue(0),
  };
};
export var useSpringConfig = function useSpringConfig(config) {
  return _objectSpread(
    {
      toValue: useValue(0),
      damping: 15,
      mass: 1,
      stiffness: 150,
      overshootClamping: false,
      restSpeedThreshold: 1,
      restDisplacementThreshold: 1,
    },
    config,
  );
};
export var useLoop = function useLoop() {
  var duration =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var boomerang =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var progress = useValue(0);
  useCode(
    function () {
      return set(progress, loop({ duration: duration, boomerang: boomerang }));
    },
    [progress],
  );
  return progress;
};
export var useValues = function useValues() {
  for (
    var _len3 = arguments.length, values = new Array(_len3), _key3 = 0;
    _key3 < _len3;
    _key3++
  ) {
    values[_key3] = arguments[_key3];
  }
  return useConst(function () {
    return values.map(function (v) {
      return new Value(v);
    });
  });
};
export var useClocks = function useClocks(numberOfClocks) {
  return useConst(function () {
    return new Array(numberOfClocks).fill(0).map(function () {
      return new Clock();
    });
  });
};
export var useDiff = function useDiff(node) {
  var dDiff = useValue(0);
  useCode(
    function () {
      return set(dDiff, diff(node));
    },
    [dDiff, node],
  );
  return dDiff;
};
export var useDebug = function useDebug(values) {
  var keys = Object.keys(values);
  useCode(
    function () {
      return block(
        keys.map(function (name) {
          return debug(name, values[name]);
        }),
      );
    },
    [keys, values],
  );
};
//# sourceMappingURL=Hooks.js.map
