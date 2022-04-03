import * as React from "react";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

export default function Desktop() {
  const x = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value;
      // ctx.endX = 0;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
    },
    onEnd: (_, ctx) => {
      // x.value = withSpring(100);
      // ctx.endX = x.value;
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 5,
            backgroundColor: "blue",
            marginTop: 100,
          },
          animatedStyle,
        ]}
      />
    </PanGestureHandler>
  );
}
