import * as React from "react";
import * as RN from "react-native";
import Animated from "react-native-reanimated";
/**
 * 
 * @param {type} type string
 * @returns JSX.Element
 */
export let Creator = ({ type = "view", ...props }) => {
  let Component = RN.View;
  switch (type) {
    case "img":
      Component = RN.Image;
      break;
    case "bgimg":
      Component = RN.ImageBackground;
      break;
    case "topacity":
      Component = RN.TouchableOpacity;
      break;
    case "loader":
      Component = RN.ActivityIndicator;
      break;
    case "text":
      Component = RN.Text;
      break;
    case "input":
      Component = RN.TextInput;
      break;
    case "scroll":
      Component = RN.ScrollView;
      break;
    default:
      break;
  }
  return <Component {...props} />;
};
export let AnimatedCreator = Animated.createAnimatedComponent(Creator);
