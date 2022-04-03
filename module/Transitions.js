import { useEffect } from "react";
import {
  useSharedValue,
  useDerivedValue,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { bin } from "./Math";
export var useSpring = function useSpring(state, config) {
  var value = useSharedValue(0);
  useEffect(
    function () {
      value.value = typeof state === "boolean" ? bin(state) : state;
    },
    [state, value],
  );
  var transition = useDerivedValue(function () {
    return withSpring(value.value, config);
  });
  return transition;
};
export var useTiming = function useTiming(state, config) {
  var value = useSharedValue(0);
  useEffect(
    function () {
      value.value = typeof state === "boolean" ? bin(state) : state;
    },
    [state, value],
  );
  var transition = useDerivedValue(function () {
    return withTiming(value.value, config);
  });
  return transition;
};
//# sourceMappingURL=Transitions.js.map
