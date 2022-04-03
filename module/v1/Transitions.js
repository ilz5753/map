import _defineProperty from "@babel/runtime/helpers/defineProperty";
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
import { useEffect } from "react";
import Animated, { not, add } from "react-native-reanimated";
import { useConst } from "./Hooks";
var Value = Animated.Value,
  cond = Animated.cond,
  block = Animated.block,
  set = Animated.set,
  Clock = Animated.Clock,
  spring = Animated.spring,
  startClock = Animated.startClock,
  stopClock = Animated.stopClock,
  timing = Animated.timing,
  neq = Animated.neq,
  SpringUtils = Animated.SpringUtils;
var defaultSpringConfig = SpringUtils.makeDefaultConfig();
export var withTransition = function withTransition(value) {
  var timingConfig =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var init = new Value(0);
  var clock = new Clock();
  var state = {
    finished: new Value(0),
    frameTime: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };
  var config = _objectSpread(
    {
      toValue: new Value(0),
      duration: 150,
      easing: function easing(v) {
        return add(v, 0);
      },
    },
    timingConfig,
  );
  return block([
    cond(not(init), [set(init, 1), set(state.position, value)]),
    cond(neq(config.toValue, value), [
      set(state.frameTime, 0),
      set(state.time, 0),
      set(state.finished, 0),
      set(config.toValue, value),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ]);
};
export var withSpringTransition = function withSpringTransition(value) {
  var springConfig =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : defaultSpringConfig;
  var velocity =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var init = new Value(0);
  var clock = new Clock();
  var state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };
  var config = _objectSpread(
    {
      toValue: new Value(0),
      damping: 15,
      mass: 1,
      stiffness: 150,
      overshootClamping: false,
      restSpeedThreshold: 1,
      restDisplacementThreshold: 1,
    },
    springConfig,
  );
  return block([
    cond(not(init), [set(init, 1), set(state.position, value)]),
    cond(neq(config.toValue, value), [
      set(state.velocity, velocity),
      set(state.time, 0),
      set(state.finished, 0),
      set(config.toValue, value),
      startClock(clock),
    ]),
    spring(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ]);
};
export var withTimingTransition = withTransition;
export var useTransition = function useTransition(state) {
  var config =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = useConst(function () {
    return new Value(0);
  });
  useEffect(
    function () {
      value.setValue(typeof state === "boolean" ? (state ? 1 : 0) : state);
    },
    [value, state],
  );
  var transition = useConst(function () {
    return withTransition(value, config);
  });
  return transition;
};
export var useSpringTransition = function useSpringTransition(state) {
  var config =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : defaultSpringConfig;
  var value = useConst(function () {
    return new Value(0);
  });
  useEffect(
    function () {
      value.setValue(typeof state === "boolean" ? (state ? 1 : 0) : state);
    },
    [value, state],
  );
  var transition = useConst(function () {
    return withSpringTransition(value, config);
  });
  return transition;
};
export var useTimingTransition = useTransition;
//# sourceMappingURL=Transitions.js.map
