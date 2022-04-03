import { useNavigation, useTheme } from "@react-navigation/native";
// import * as Linking from "expo-linking";
import * as React from "react";
import * as RN from "react-native";
import { PanResponder, Linking } from "react-native";
import {
  Text,
  View,
  ScrollView,
  Button,
  Icon,
  OverflowTextInput,
  AnimView,
} from "../../../esse/components";
import { Template } from "../../../esse/template";
import {
  align_items,
  backgroundColor,
  bgct,
  black,
  border,
  borderColor,
  borderRadius,
  bw1,
  center,
  color,
  flex,
  fontSize,
  full,
  height,
  hexToRGB,
  justify_content,
  margin,
  margin_top,
  padding,
  position,
  root,
  Root,
  row,
  uuid,
  white,
  width,
  zIndex,
} from "../../../styles";
import { ModelComponent } from "../../../esse/AxiomModelComponents";
import { decycle, toJSON } from "../../../esse/funcs";
import Svg, { Circle, Line, Polygon, Polyline } from "react-native-svg";
import Tree, { AxiomTreeModel } from "../../../esse/tree";
import { subscribe } from "react-axiom";
import { useSelector, useDispatch } from "react-redux";
import { nodes, updateNodes } from "./phoneSlice";

let RenderValue = ({ value }) => {
  let { colors } = useTheme();
  return (
    <View
      style={[
        width(100),
        height(175),
        margin("", 10),
        align_items(""),
        border("", 1),
        // borderColor(colors.primary),
        backgroundColor(colors.primary),
        borderRadius("", 10),
        justify_content("se"),
        // bgct,
      ]}
    >
      <View
        style={[
          width(100),
          height(140),
          // margin("", 10),
          // border("", 1),
          // borderColor(colors.primary),
          // borderRadius("", 10),
          bgct,
        ]}
      />
      <Text
        style={[
          fontSize(18),
          // color(colors.primary),
          padding("", 10),
        ]}
      >
        {value?.name}
      </Text>
    </View>
  );
};

let RenderNode = ({ value, childs }) => {
  let { colors, dark } = useTheme();
  let [parentLayout, setParentLayout] = React.useState({});
  let [childsLayout, setChildsLayout] = React.useState([]);
  // let onLayout = (layout) => {
  //   console.log("====================================");
  //   console.log(layout);
  //   console.log("====================================");
  // };
  return (
    <View
      style={[
        align_items(""),
        // bgct,
        // margin("v", 20),
        border("", 1),
        borderColor(colors.notification),
      ]}
    >
      <View
        onLayout={(e) => setParentLayout(e?.nativeEvent?.layout)}
        style={[bgct]}
      >
        <RenderValue value={value} />
      </View>
      {childs?.length !== 0 && (
        <View style={[row, justify_content("se")]}>
          {childs?.map((child, i) => (
            <View
              key={i}
              onLayout={(e) => {
                // e.persist();
                setChildsLayout((cl) => [...cl, e?.nativeEvent?.layout]);
              }}
              style={[bgct]}
            >
              <RenderNode value={child?.value} childs={child?.childs} />
            </View>
          ))}
        </View>
      )}
      {childsLayout.length !== 0 && (
        <View
          style={[
            full,
            position(true),
            // zIndex(-1),
            bgct,
            // backgroundColor(hexToRGB(dark ? white : black, 0.2)),
          ]}
        >
          <View
            onLayout={() => {
              console.log("\n\nparent : ");
              console.log(parentLayout);
              console.log("\n\nchilds : ");
              console.log(childsLayout);
            }}
            style={[bgct]}
          >
            {childsLayout.map((cl, i) => (
              <Svg
                key={i}
                // height={cl?.y - parentLayout?.y}
                // width={cl?.x - parentLayout?.x}
              >
                <Polyline
                  // x1={`${parentLayout?.x + parentLayout?.width / 2 }`}
                  // y1={`${parentLayout?.y + parentLayout?.height / 2 }`}
                  // x2={`${cl?.x + cl?.width / 2 }`}
                  // y2={`${cl?.y + cl?.height / 2 }`}
                  points={`${parentLayout?.x + parentLayout?.width / 2},${
                    parentLayout?.y + parentLayout?.height - 10
                  } ${cl?.x + cl?.width / 2},${cl?.y + cl?.height + 10}`}
                  fill="none"
                  stroke={colors.notification}
                  strokeWidth="2"
                />
                <Circle
                  cx={`${parentLayout?.x + parentLayout?.width / 2}`}
                  cy={`${parentLayout?.y + parentLayout?.height - 10}`}
                  r="10"
                  fill={colors.notification}
                />
                {/* <Circle
                  cx={`${parentLayout?.x + parentLayout?.width - 10}`}
                  cy={`${parentLayout?.y + parentLayout?.height / 2}`}
                  r="10"
                  fill={colors.notification}
                /> */}
                <Circle
                  cx={`${cl?.x + cl?.width / 2}`}
                  cy={`${cl?.y + cl?.height + 10}`}
                  r="10"
                  fill={colors.notification}
                />
              </Svg>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

class RenderNode01 extends React.Component {
  render() {
    const { value, childs } = this.props;
    return (
      <View
        style={[
          align_items(""),
          // margin("v", 20),
          // border("", 1),
          // borderColor(colors.notification),
        ]}
      >
        <RenderValue value={value} />
        {childs?.length !== 0 && (
          <View style={[row]}>
            {childs?.map((child, i) => (
              <RenderNode key={i} value={child?.value} childs={child?.childs} />
            ))}
          </View>
        )}
      </View>
    );
  }
}
class ListItemComponent extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View style={[width("100%"), height(200), margin("b", 10)]}>
        <Text>{data.getDescription()}</Text>
        {!data.isCompleted() && this.renderButton()}
        <Button
          style={[height(50)]}
          onPress={() => data.setDescription("Hello")}
        >
          <Text style={[fontSize(20)]}>Change description</Text>
        </Button>
      </View>
    );
  }
  renderButton() {
    const { data } = this.props;
    return (
      <Button onPress={() => data.setCompleted(true)}>
        <Text>complete</Text>
      </Button>
    );
  }
}
function Phone() {
  let { navigate, goBack } = useNavigation();
  let { colors } = useTheme();
  let nodeRef = React.useRef(null);
  let [refData, setRefData] = React.useState(false);
  let header = {
    title: "Axiom Subscribe",
    isShown: true,
    morePadding: true,
    headerHeight: margin_top,
    btns: {
      left: [],
      right: [],
    },
  };
  let data = {
    id: "1",
    description: "Teach mom how to use Slack",
    completed: false,
  };
  let node = {
    value: {
      name: "Root",
    },
    childs: [
      {
        value: {
          name: "Welcome",
        },
        childs: [
          {
            value: {
              name: "About App",
            },
            childs: [],
          },
        ],
      },
      {
        value: {
          name: "Auth",
        },
        childs: [
          {
            value: {
              name: "Signup",
            },
            childs: [],
          },
          {
            value: {
              name: "Signin",
            },
            childs: [],
          },
        ],
      },
      {
        value: {
          name: "Home",
        },
        childs: [
          {
            value: {
              name: "Calls",
            },
            childs: [],
          },
          {
            value: {
              name: "Stories",
            },
            childs: [],
          },
          {
            value: {
              name: "Messages",
            },
            childs: [],
          },
          {
            value: {
              name: "Groups",
            },
            childs: [],
          },
        ],
      },
      {
        value: {
          name: "Settings",
        },
        childs: [
          {
            value: {
              name: "Account",
            },
            childs: [],
          },
          {
            value: {
              name: "Favorites",
            },
            childs: [],
          },
        ],
      },
    ],
  };
  return (
    <Template header={header}>
      {/* <ModelComponent initialState={data} Component={ListItemComponent} /> */}
      {/* <RN.View onLayout={(ev) => console.log(ev.nativeEvent.layout)}></RN.View> */}
      <ScrollView horizontal>
        <RenderNode {...node} />
      </ScrollView>
    </Template>
  );
}

// let App = () => {
//   let node = {
//     value: {
//       name: "Root",
//     },
//     childs: [
//       {
//         value: {
//           name: "Welcome",
//         },
//         childs: [
//           {
//             value: {
//               name: "About App",
//             },
//             childs: [],
//           },
//         ],
//       },
//       {
//         value: {
//           name: "Auth",
//         },
//         childs: [
//           {
//             value: {
//               name: "Signup",
//             },
//             childs: [],
//           },
//           {
//             value: {
//               name: "Signin",
//             },
//             childs: [],
//           },
//         ],
//       },
//       {
//         value: {
//           name: "Home",
//         },
//         childs: [
//           {
//             value: {
//               name: "Calls",
//             },
//             childs: [],
//           },
//           {
//             value: {
//               name: "Stories",
//             },
//             childs: [],
//           },
//           {
//             value: {
//               name: "Messages",
//             },
//             childs: [],
//           },
//           {
//             value: {
//               name: "Groups",
//             },
//             childs: [],
//           },
//         ],
//       },
//       {
//         value: {
//           name: "Settings",
//         },
//         childs: [
//           {
//             value: {
//               name: "Account",
//             },
//             childs: [],
//           },
//           {
//             value: {
//               name: "Favorites",
//             },
//             childs: [],
//           },
//         ],
//       },
//     ],
//   };
//   return (
//     <ScrollView
//       style={{
//         width: 1000,
//         height: 1000,
//       }}
//     >
//       <ScrollView
//         style={{
//           width: 1000,
//           height: 1000,
//         }}
//         horizontal
//       >
//         <RenderNode {...node} />
//       </ScrollView>
//     </ScrollView>
//   );
// };
// let RenderNode12 = ({ value, childs }) => {
//   let { colors, dark } = useTheme();
//   let [parentLayout, setParentLayout] = React.useState({});
//   let [childsLayout, setChildsLayout] = React.useState([]);
//   // let onLayout = (layout) => {
//   //   console.log("====================================");
//   //   console.log(layout);
//   //   console.log("====================================");
//   // };
//   return (
//     <View
//       style={{
//         alignItems: "center",
//       }}
//     >
//       <View
//         onLayout={(e) => setParentLayout(e?.nativeEvent?.layout)}
//         style={{
//           backgroundColor: "transparent",
//         }}
//       >
//         <RenderValue value={value} />
//       </View>
//       {childs?.length !== 0 && (
//         <View
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-evenly",
//           }}
//         >
//           {childs?.map((child, i) => (
//             <View
//               key={i}
//               onLayout={(e) => {
//                 // e.persist();
//                 setChildsLayout((cl) => [...cl, e?.nativeEvent?.layout]);
//               }}
//               style={{
//                 backgroundColor: "transparent",
//               }}
//             >
//               <RenderNode value={child?.value} childs={child?.childs} />
//             </View>
//           ))}
//         </View>
//       )}
//       {childsLayout.length !== 0 && (
//         <View
//           style={{
//             width: "100%",
//             height: "100%",
//             position: "absolute",
//             backgroundColor: "transparent",
//           }}
//         >
//           <View
//             onLayout={() => {
//               console.log("\n\nparent : ");
//               console.log(parentLayout);
//               console.log("\n\nchilds : ");
//               console.log(childsLayout);
//             }}
//             style={{
//               backgroundColor: "transparent",
//             }}
//           >
//             {childsLayout.map((cl, i) => (
//               <Svg
//                 key={i}
//                 // height={cl?.y - parentLayout?.y}
//                 // width={cl?.x - parentLayout?.x}
//               >
//                 <Polyline
//                   // x1={`${parentLayout?.x + parentLayout?.width / 2 }`}
//                   // y1={`${parentLayout?.y + parentLayout?.height / 2 }`}
//                   // x2={`${cl?.x + cl?.width / 2 }`}
//                   // y2={`${cl?.y + cl?.height / 2 }`}
//                   points={`${parentLayout?.x + parentLayout?.width / 2},${
//                     parentLayout?.y + parentLayout?.height - 10
//                   } ${cl?.x + cl?.width / 2},${cl?.y + cl?.height + 10}`}
//                   fill="none"
//                   stroke={colors.notification}
//                   strokeWidth="2"
//                 />
//                 <Circle
//                   cx={`${parentLayout?.x + parentLayout?.width / 2}`}
//                   cy={`${parentLayout?.y + parentLayout?.height - 10}`}
//                   r="10"
//                   fill={colors.notification}
//                 />
//                 {/* <Circle
//                   cx={`${parentLayout?.x + parentLayout?.width - 10}`}
//                   cy={`${parentLayout?.y + parentLayout?.height / 2}`}
//                   r="10"
//                   fill={colors.notification}
//                 /> */}
//                 <Circle
//                   cx={`${cl?.x + cl?.width / 2}`}
//                   cy={`${cl?.y + cl?.height + 10}`}
//                   r="10"
//                   fill={colors.notification}
//                 />
//               </Svg>
//             ))}
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };
// let RenderValue01 = ({ value }) => {
//   let { colors } = useTheme();
//   return (
//     <View
//       style={{
//         width: 100,
//         height: 175,
//         margin: 10,
//         alignItems: "center",
//         borderWidth: 1,
//         backgroundColor: colors.primary,
//         borderRadius: 10,
//         justifyContent: "space-evenly",
//       }}
//     >
//       <View
//         style={{
//           width: 100,
//           height: 140,
//           backgroundColor: "transparent",
//         }}
//       />
//       <Text
//         style={{
//           fontSize: 18,
//           padding: 10,
//         }}
//       >
//         {value?.name}
//       </Text>
//     </View>
//   );
// };

let TreeView = ({ tree, update }) => {
  let { colors } = useTheme();
  // console.log(tree);
  // console.log("\n\n");
  let onPress = () => {
    let nt = new Tree({ id: uuid(), title: "Test" });
    tree?.addChild();
    update();
    // tree?.removeChild(tree?.id);
    console.log("====================================");
    console.log(tree);
    console.log("\n\n");
    console.log("====================================");
    console.log(nt);
    console.log("\n\n");
    console.log("====================================");
    console.log(toJSON(nt));
    console.log("\n\n");
    console.log("====================================");
  };
  return (
    <AnimView
      style={[
        width(100),
        height(220),
        border("", 1),
        borderColor(colors.primary),
        borderRadius("", 11),
        // center,
      ]}
    >
      <Button onPress={onPress}>
        <Text style={[fontSize(20), color(colors.primary)]}>
          {tree?.value?.title}
        </Text>
      </Button>
    </AnimView>
  );
};

let TreeRenderer = ({ treeData }) => {
  // let tt = tree;
  // console.log(tt);
  let dis = useDispatch();
  let ttt = new Tree(treeData?.value);
  let update = () => dis(updateNodes(ttt.data()));
  return (
    <View style={[align_items("")]}>
      <AnimView style={[margin("", 10)]}>
        <TreeView tree={ttt} update={update} />
      </AnimView>
      {treeData?.children?.length !== 0 && (
        <View style={[row, justify_content("se"), align_items("")]}>
          {treeData?.children?.map((t, i) => (
            <TreeRenderer key={i} treeData={t} />
          ))}
        </View>
      )}
    </View>
  );
};

let AxiomTreeModelComponent = subscribe(TreeRenderer);

export default function AA() {
  let { colors } = useTheme();
  let Nodes = useSelector(nodes);
  let [ns, sns] = React.useState(false);
  let [screenTitle, setScreenTitle] = React.useState("");
  const forceUpdate = React.useReducer((x) => x + 1, 0)[1];
  let tns = () => sns((s) => !s);
  let myTree = new Tree({ id: uuid(), title: "Root" }, [
    new Tree({ id: uuid(), title: "Welcome" }),
    new Tree({ id: uuid(), title: "Auth" }),
    new Tree({ id: uuid(), title: "Home" }),
    new Tree({ id: uuid(), title: "Settings" }),
  ]);
  let axiomTree = new AxiomTreeModel({ tree: myTree });
  let resetNewScreenModal = () => {
    setScreenTitle("");
    tns();
  };
  let header = {
    title: "Tree",
    headerHeight: margin_top,
    isShown: true,
    morePadding: true,
    btns: {
      left: [],
      right: [
        {
          icon: <Icon name="plus" size={24} color={colors.primary} />,
          onPress: tns,
        },
      ],
    },
  };
  let sheets = [
    {
      title: "New Screen",
      show: ns,
      hide: resetNewScreenModal,
      children: (
        <View>
          <OverflowTextInput
            title="Screen title"
            bc={colors.border}
            value={screenTitle}
            onChangeText={setScreenTitle}
            fieldHeight={margin_top}
          />
        </View>
      ),
    },
  ];
  return (
    <Template header={header} sheets={sheets}>
      <ScrollView horizontal style={[]}>
        {/* <AxiomTreeModelComponent tree={axiomTree} /> */}
        <TreeRenderer treeData={Nodes} />
      </ScrollView>
      <Button style={[width("100%"), height(margin_top)]} onPress={forceUpdate}>
        <Text>ReRender</Text>
      </Button>
    </Template>
  );
}
