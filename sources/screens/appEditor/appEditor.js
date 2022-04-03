import { useNavigation, useTheme } from "@react-navigation/native";
import * as React from "react";
import * as RN from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedProps,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { useDispatch, useSelector } from "react-redux";
import {
  AnimatedBUTTON,
  AnimatedScrollView,
  Button,
  Shape,
  Pan,
  Pinch,
  ROOT,
  Text,
  ThreeDView,
  View,
} from "../../../esse/components";
import {
  border,
  borderColor,
  height,
  width,
  dim,
  margin_top,
  full,
  margin,
  justify_content,
  align_items,
} from "../../../styles";
import { activeData, data, updateActiveData } from "./appEditorSlice";
// const AnimatedPath = Animated.createAnimatedComponent(Path);
// export default function Editor() {
//   let { colors } = useTheme();
//   const radius = useSharedValue(50);

//   const animatedProps = useAnimatedProps(() => {
//     // draw a circle
//     const path = `
//     M 100, 100
//     m -${radius.value}, 0
//     a ${radius.value},${radius.value} 0 1,0 ${radius.value * 2},0
//     a ${radius.value},${radius.value} 0 1,0 ${-radius.value * 2},0
//     `;
//     return {
//       d: path,
//     };
//   });
//   let br = [border("", 1), borderColor(colors.border)];
//   return (
//     <ROOT>
//       <Text>App Editor</Text>
//       <ThreeDView style={[width("100%"), height(1000), br]}>
//         <ThreeDView style={[width("100%"), height(700), br]}>
//           <ThreeDView style={[width("100%"), height(300), br]}>
//             <Svg style={[br]}>
//               <AnimatedPath animatedProps={animatedProps} fill={colors.text} />
//             </Svg>
//           </ThreeDView>
//         </ThreeDView>
//         <ThreeDView style={[width("100%"), height(300), br]}>
//           <Svg style={[br]}>
//             <AnimatedPath animatedProps={animatedProps} fill={colors.text} />
//           </Svg>
//         </ThreeDView>
//       </ThreeDView>
//     </ROOT>
//   );
// }
export default function Editor() {
  let dis = useDispatch();
  let { navigate } = useNavigation();
  let { colors } = useTheme();
  let Data = useSelector(data);
  let ActiveData = useSelector(activeData);
  console.log(ActiveData);
  return (
    <ROOT>
      <ThreeDView>
        <Shape w={280} h={500} r={20}>
          <Text>Example</Text>
        </Shape>
      </ThreeDView>
      <ThreeDView>
        <Shape w={280} h={200} r={20}>
          <Text>Example</Text>
        </Shape>
      </ThreeDView>
      <ThreeDView>
        <Shape w={100} h={100} r={20}>
          <Text>Example 1</Text>
        </Shape>
      </ThreeDView>
      <ThreeDView>
        <Shape w={100} h={100} r={20}>
          <Text>Example 2</Text>
        </Shape>
      </ThreeDView>
      <AnimatedScrollView horizontal>
        <AnimatedScrollView>
          <Shape w={320} h={240} r={20} />
        </AnimatedScrollView>
      </AnimatedScrollView>
    </ROOT>
  );
}
