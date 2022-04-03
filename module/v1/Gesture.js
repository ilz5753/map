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
import Animated, { diff, lessThan, or } from "react-native-reanimated";
import { State } from "react-native-gesture-handler";
import { Platform } from "react-native";
import { snapPoint } from "./Animations";
import { vec } from "./Vectors";
var proc = Animated.proc,
  Clock = Animated.Clock,
  Value = Animated.Value,
  event = Animated.event,
  add = Animated.add,
  block = Animated.block,
  cond = Animated.cond,
  eq = Animated.eq,
  multiply = Animated.multiply,
  set = Animated.set,
  stopClock = Animated.stopClock,
  and = Animated.and,
  not = Animated.not,
  clockRunning = Animated.clockRunning,
  startClock = Animated.startClock,
  neq = Animated.neq,
  call = Animated.call,
  reDecay = Animated.decay,
  reSpring = Animated.spring,
  onChange = Animated.onChange,
  debug = Animated.debug;
export var pinchBegan = proc(function (state) {
  return Platform.OS === "android"
    ? cond(eq(diff(state), State.ACTIVE - State.BEGAN), eq(state, State.ACTIVE))
    : eq(state, State.BEGAN);
});
export var pinchActive = proc(function (state, numberOfPointers) {
  return and(
    eq(state, State.ACTIVE),
    eq(numberOfPointers, 2),
    Platform.OS === "android" ? not(pinchBegan(state)) : 1,
  );
});
export var pinchEnd = proc(function (state, numberOfPointers) {
  return Platform.OS === "android"
    ? or(eq(state, State.END), lessThan(numberOfPointers, 2))
    : eq(state, State.END);
});
export var withScaleOffset = function withScaleOffset(value, state) {
  var offset =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : new Value(1);
  return cond(
    eq(state, State.END),
    [set(offset, multiply(offset, value)), offset],
    multiply(offset, value),
  );
};
export var withOffset = function withOffset(value, state) {
  var offset =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : new Value(0);
  return cond(
    eq(state, State.END),
    [set(offset, add(offset, value)), offset],
    add(offset, value),
  );
};
export var withSpring = function withSpring(props) {
  var _offset$props = _objectSpread({ offset: new Value(0) }, props),
    value = _offset$props.value,
    velocity = _offset$props.velocity,
    state = _offset$props.state,
    snapPoints = _offset$props.snapPoints,
    offset = _offset$props.offset,
    springConfig = _offset$props.config,
    onSnap = _offset$props.onSnap;
  var clock = new Clock();
  var springState = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };
  var config = _objectSpread(
    {
      toValue: new Value(0),
      damping: 6,
      mass: 1,
      stiffness: 64,
      overshootClamping: false,
      restSpeedThreshold: 0.01,
      restDisplacementThreshold: 0.01,
    },
    springConfig,
  );
  var gestureAndAnimationIsOver = new Value(1);
  var isSpringInterrupted = and(eq(state, State.BEGAN), clockRunning(clock));
  var finishSpring = [
    set(offset, springState.position),
    stopClock(clock),
    set(gestureAndAnimationIsOver, 1),
  ];
  var snap = onSnap
    ? [cond(clockRunning(clock), call([springState.position], onSnap))]
    : [];
  return block([
    cond(isSpringInterrupted, finishSpring),
    cond(gestureAndAnimationIsOver, set(springState.position, offset)),
    cond(neq(state, State.END), [
      set(gestureAndAnimationIsOver, 0),
      set(springState.finished, 0),
      set(springState.position, add(offset, value)),
    ]),
    cond(and(eq(state, State.END), not(gestureAndAnimationIsOver)), [
      cond(and(not(clockRunning(clock)), not(springState.finished)), [
        set(springState.velocity, velocity),
        set(springState.time, 0),
        set(
          config.toValue,
          snapPoint(springState.position, velocity, snapPoints),
        ),
        startClock(clock),
      ]),
      reSpring(clock, springState, config),
      cond(springState.finished, [].concat(snap, finishSpring)),
    ]),
    springState.position,
  ]);
};
export var withDecay = function withDecay(config) {
  var _offset$deceleration$ = _objectSpread(
      { offset: new Value(0), deceleration: 0.998 },
      config,
    ),
    value = _offset$deceleration$.value,
    velocity = _offset$deceleration$.velocity,
    state = _offset$deceleration$.state,
    offset = _offset$deceleration$.offset,
    deceleration = _offset$deceleration$.deceleration;
  var clock = new Clock();
  var decayState = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };
  var isDecayInterrupted = and(eq(state, State.BEGAN), clockRunning(clock));
  var finishDecay = [set(offset, decayState.position), stopClock(clock)];
  return block([
    cond(isDecayInterrupted, finishDecay),
    cond(neq(state, State.END), [
      set(decayState.finished, 0),
      set(decayState.position, add(offset, value)),
    ]),
    cond(eq(state, State.END), [
      cond(and(not(clockRunning(clock)), not(decayState.finished)), [
        set(decayState.velocity, velocity),
        set(decayState.time, 0),
        startClock(clock),
      ]),
      reDecay(clock, decayState, { deceleration: deceleration }),
      cond(decayState.finished, finishDecay),
    ]),
    decayState.position,
  ]);
};
export var onScrollEvent = function onScrollEvent(contentOffset) {
  return event([{ nativeEvent: { contentOffset: contentOffset } }]);
};
export var onGestureEvent = function onGestureEvent(nativeEvent) {
  var gestureEvent = event([{ nativeEvent: nativeEvent }]);
  return { onHandlerStateChange: gestureEvent, onGestureEvent: gestureEvent };
};
export var tapGestureHandler = function tapGestureHandler() {
  var state = new Value(State.UNDETERMINED);
  var position = vec.createValue(0);
  var absolutePosition = vec.createValue(0);
  var gestureHandler = onGestureEvent({
    state: state,
    x: position.x,
    y: position.y,
    absoluteX: absolutePosition.x,
    absoluteY: absolutePosition.y,
  });
  return {
    gestureHandler: gestureHandler,
    position: position,
    absolutePosition: absolutePosition,
    state: state,
  };
};
export var panGestureHandler = function panGestureHandler() {
  var position = vec.createValue(0);
  var translation = vec.createValue(0);
  var velocity = vec.createValue(0);
  var state = new Value(State.UNDETERMINED);
  var gestureHandler = onGestureEvent({
    x: position.x,
    translationX: translation.x,
    velocityX: velocity.x,
    y: position.y,
    translationY: translation.y,
    velocityY: velocity.y,
    state: state,
  });
  return {
    position: position,
    translation: translation,
    velocity: velocity,
    state: state,
    gestureHandler: gestureHandler,
  };
};
export var pinchGestureHandler = function pinchGestureHandler() {
  var focal = vec.createValue(0, 0);
  var scale = new Value(1);
  var numberOfPointers = new Value(0);
  var state = new Value(State.UNDETERMINED);
  var gestureHandler = onGestureEvent({
    numberOfPointers: numberOfPointers,
    focalX: focal.x,
    focalY: focal.y,
    scale: scale,
    state: state,
  });
  return {
    numberOfPointers: numberOfPointers,
    scale: scale,
    state: state,
    gestureHandler: gestureHandler,
    focal: focal,
  };
};
export var rotationGestureHandler = function rotationGestureHandler() {
  var anchor = vec.createValue(0, 0);
  var rotation = new Value(0);
  var state = new Value(State.UNDETERMINED);
  var gestureHandler = onGestureEvent({
    anchorX: anchor.x,
    anchorY: anchor.y,
    rotation: rotation,
    state: state,
  });
  return {
    rotation: rotation,
    state: state,
    gestureHandler: gestureHandler,
    anchor: anchor,
  };
};
export var scrollHandler = function scrollHandler() {
  var x = new Value(0);
  var y = new Value(0);
  var onScroll = onScrollEvent({ x: x, y: y });
  return {
    x: x,
    y: y,
    scrollHandler: { onScroll: onScroll, scrollEventThrottle: 1 },
  };
};
export var debugGestureState = function debugGestureState(label, state) {
  var d = function d(value) {
    return debug(label, new Value(value));
  };
  return onChange(
    state,
    cond(
      eq(state, State.UNDETERMINED),
      d("UNDETERMINED"),
      cond(
        eq(state, State.BEGAN),
        d("BEGAN"),
        cond(
          eq(state, State.ACTIVE),
          d("ACTIVE"),
          cond(
            eq(state, State.END),
            d("END"),
            cond(eq(state, State.CANCELLED), d("CANCELLED"), d("FAILED")),
          ),
        ),
      ),
    ),
  );
};
//# sourceMappingURL=Gesture.js.map
