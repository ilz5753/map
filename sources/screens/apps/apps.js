import { useNavigation, useTheme } from "@react-navigation/native";
import * as React from "react";
import * as RN from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import _ from "lodash";
import {
  Template,
  Icon,
  // ImageButton,
  Text,
  View,
  OverflowTextInput,
  ImageSelector,
  SECTION,
  Button,
  GRID,
  // AppTypesView,
  // AppTemplatesView,
  SaveButton,
  AnimSECTION,
  AnimButton,
  Image,
  BtnRowAction,
  BtnAppItem,
  // RowButton,
  // RowBtns,
} from "../../../essentials/components";
import {
  alignItems,
  backgroundColor,
  bgct,
  black,
  border,
  borderColor,
  borderRadius,
  center,
  color,
  flex,
  fontSize,
  full,
  height,
  justifyContent,
  margin,
  mt,
  padding,
  row,
  bct,
  uuid,
  white,
  width,
  jcse,
  aic,
  squareLayout,
  layout,
  shadow,
  cbr,
  tr,
  cb,
} from "../../../style";
// import { NewAppTypes } from "../../../esse/staticDatas";
import {
  activeApp,
  addApp,
  apps,
  updateActiveApp,
  updateHierechary,
} from "../../smSlice";
import { changeTree } from "../appTree/appTreeSlice";
import { BounceIn, SlideOutUp } from "react-native-reanimated";
// function Apps7373() {
//   let dis = useDispatch();
//   let { navigate } = useNavigation();
//   let { colors, dark } = useTheme();
//   let AppsList = useSelector(apps);
//   let ActiveApp = useSelector(activeApp);
//   let [newApp, setNewApp] = React.useState(false);
//   let [TypeSelecting, setTypeSelecting] = React.useState(false);
//   let [AppName, setAppName] = React.useState("");
//   let [AppType, setAppType] = React.useState("");
//   let [AppTemplate, setAppTemplate] = React.useState("");
//   let [IconUri, setIconUri] = React.useState("");
//   let toggleNewApp = () => setNewApp((s) => !s);
//   let toggleTypeSelecting = () => setTypeSelecting((s) => !s);
//   let reset = () => {
//     toggleNewApp();
//     setAppName("");
//     setAppType("");
//     setIconUri("");
//   };
//   let selectIcon = async () => {
//     let res = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
//     if (!res.cancelled) {
//       setIconUri(res.uri);
//       // setImageUri(res.uri);
//     }
//   };
//   let icon = dark
//     ? require("../../../assets/adaptive-icon.png")
//     : require("../../../assets/icon.png");
//   let apptree = () => navigate("appTree");
//   let createApp = () => {
//     let na = {
//       id: uuid(),
//       name: AppName,
//       type: AppType,
//       uri: IconUri,
//       template: AppTemplate,
//     };
//     dis(addApp(na));
//     dis(updateActiveApp(na));
//     // dis(changeTree(ActiveApp?.hierarchicalTree));
//     apptree();
//     toggleNewApp();
//   };
//   let edit = (a) => {
//     dis(updateActiveApp(a));
//     // dis(changeTree(ActiveApp?.hierarchicalTree));
//     apptree();
//   };
//   let header = {
//     title: "Apps",
//     isShown: true,
//     headerHeight: mt,
//     btns: {
//       left: [
//         // {
//         //   icon: <Icon name="plus" size={30} color={colors.primary} />,
//         // },
//       ],
//       right: [
//         {
//           icon: (
//             <Icon
//               type="i"
//               name="ellipsis-horizontal-circle-sharp"
//               size={30}
//               color={colors.primary}
//             />
//           ),
//           onPress: toggleNewApp,
//         },
//         {
//           icon: <Icon name="plus" size={30} color={colors.primary} />,
//           onPress: toggleNewApp,
//         },
//       ],
//     },
//   };
//   let sheets = [
//     {
//       title: "New App",
//       show: newApp,
//       hide: reset,
//       children: (
//         <View style={[margin("b", mt)]}>
//           <SECTION title="ICON">
//             <ImageSelector
//               source={IconUri ? { uri: IconUri } : icon}
//               size={200}
//               onPress={selectIcon}
//               resizeMode="cover"
//             />
//           </SECTION>
//           <SECTION title="NAME">
//             <OverflowTextInput
//               // title="Name"
//               bc={colors.border}
//               value={AppName}
//               onChangeText={setAppName}
//               fieldHeight={mt}
//             />
//           </SECTION>
//           <SECTION
//             title="TYPE"
//             showMore={{
//               onPress: toggleTypeSelecting,
//               children: (
//                 <Text style={[fontSize(14), color(colors.primary)]}>
//                   MORE TYPES
//                 </Text>
//               ),
//             }}
//           >
//             <GRID
//               data={NewAppTypes}
//               numOfColumns={2}
//               circular
//               Render={({ name }) => (
//                 <Button onPress={() => setAppType(name)}>
//                   <Text>{name}</Text>
//                 </Button>
//               )}
//             />
//           </SECTION>
//           {AppType.length !== 0 && (
//             <SECTION title={`${AppType} Templates`}></SECTION>
//           )}
//           <Button
//             style={[
//               width("100%"),
//               height(mt),
//               backgroundColor(colors.primary),
//             ]}
//             onPress={createApp}
//           >
//             <Text style={[fontSize(20), color(dark ? black : white)]}>
//               Create
//             </Text>
//           </Button>
//         </View>
//       ),
//     },
//     {
//       title: "Types",
//       show: TypeSelecting,
//       hide: toggleTypeSelecting,
//       children: <View></View>,
//     },
//   ];
//   return (
//     <Template header={header} sheets={sheets}>
//       <GRID
//         data={AppsList}
//         numOfColumns={4}
//         Render={(a) => (
//           <Button
//             btnStyle={[justify_content("se")]}
//             onPress={() => edit(a)}
//             activeOpactity={1}
//             riprad={0}
//           >
//             <View
//               style={[
//                 width(mt),
//                 height(mt),
//                 // border("", 1),
//                 // borderColor(colors.border),
//                 borderRadius("", 10),
//                 bgct,
//               ]}
//             >
//               <RN.Image
//                 source={a.uri?.length === 0 ? icon : { uri: a.uri }}
//                 style={[full, borderRadius("", 10)]}
//               />
//             </View>
//             <View style={[bgct, center]}>
//               <Text
//                 style={[fontSize(13)]}
//                 ellipsizeMode="tail"
//                 numberOfLines={1}
//               >
//                 {a.name}
//               </Text>
//             </View>
//           </Button>
//         )}
//       />
//     </Template>
//   );
// }
export default function Apps() {
  let dis = useDispatch();
  let { navigate } = useNavigation();
  let { colors, dark } = useTheme();
  let AppsList = useSelector(apps);
  let ActiveApp = useSelector(activeApp);
  let [app, setApp] = React.useState({
    name: "",
    uri: "",
    type: "",
    template: "",
  });
  let [Modals, setModals] = React.useState({
    plus: false,
    more: false,
    types: false,
    templates: false,
    active: false,
  });
  let toggleModal = (type = "p") =>
    setModals((m) => {
      switch (type) {
        case "m":
          return { ...m, more: !m.more };
        case "ty":
          return { ...m, types: !m.types };
        case "te":
          return { ...m, templates: !m.templates };
        case "a":
          return { ...m, active: !m.active };
        default:
          return { ...m, plus: !m.plus };
      }
    });
  let update = (type, value) =>
    setApp((a) => {
      switch (type) {
        case "n":
          return { ...a, name: value };
        case "u":
          return { ...a, uri: value };
        case "ty":
          return { ...a, type: value };
        case "te":
          return { ...a, template: value };
        default:
          return a;
      }
    });
  let header = {
    title: "Apps",
    left: [
      // {
      //   icon: <Icon name="plus" size={30} color={colors.primary} />,
      // },
    ],
    right: [
      {
        type: "",
        name: "plus",
        onPress: toggleModal,
      },
      {
        type: "i",
        name: "ellipsis-horizontal-circle-sharp",
        onPress: () => navigate("test"),
      },
    ],
  };
  let reset = () => {
    toggleModal();
    update("n", "");
    update("u", "");
    update("ty", "");
    update("te", "");
  };
  let selectIcon = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!res.cancelled) update("u", res.uri);
  };
  let apptree = () => navigate("appTree");
  let ct = () =>
    dis(changeTree({ type: "tree", tree: ActiveApp?.hierarchicalTree }));
  let select = (id) => {
    console.log("id : ", id);
    dis(updateActiveApp({ id }));
    toggleModal("a");
  };
  let create = () => {
    let na = {
      ...app,
      id: uuid(),
    };
    reset();
    dis(addApp(na));
  };
  let actions = [
    {
      ic: {
        type: "fa5",
        name: "play",
        bg: tr,
        color: colors.text,
      },
      text: "run",
      onPress: () => navigate("run"),
    },
    {
      ic: {
        type: "fa5",
        name: "door-open",
        bg: tr,
        color: colors.text,
      },
      text: "open",
      onPress: () => navigate("appTree"),
    },
    {
      text: "settings",
      ic: {
        type: "fa",
        name: "gear",
        bg: tr,
        color: colors.text,
      },
    },
  ];
  let sheets = [
    {
      title: "New App",
      show: Modals.plus,
      hide: reset,
      children: (
        <View style={[margin("b", mt)]}>
          <SECTION title="ICON">
            <ImageSelector
              size={4 * mt}
              // style={[width("100%"), height(4 * mt), center]}
              // btnStyle={[width(3 * mt), height(3 * mt)]}
              // r={mt * 1.5}
              uri={app.uri}
              onPress={selectIcon}
              resizeMode="cover"
            />
          </SECTION>
          <SECTION title="NAME">
            <OverflowTextInput
              // title="Name"
              bc={colors.border}
              value={app.name}
              onChangeText={(t) => update("n", t)}
              fieldHeight={mt}
              placeholder="Todo"
            />
          </SECTION>
          <SECTION
            title="TYPE"
            showMore={{
              onPress: () => toggleModal("ty"),
              children: (
                <Text style={[bgct, fontSize(14), color(colors.primary)]}>
                  MORE
                </Text>
              ),
            }}
          >
            {/* <AppTypesView onPress={(at) => update("ty", at?.name)} /> */}
          </SECTION>
          {app.type.length !== 0 && (
            <AnimSECTION
              title={`${app.type} Templates`.toUpperCase()}
              showMore={{
                onPress: () => toggleModal("te"),
                children: (
                  <Text style={[bgct, fontSize(14), color(colors.primary)]}>
                    MORE
                  </Text>
                ),
              }}
            >
              {/* <AppTemplatesView
                type={app.type}
                onPress={(temp) => update("te", temp?.name)}
              /> */}
            </AnimSECTION>
          )}
          <SaveButton
            onPress={create}
            disabled={app.name.length === 0}
            text="Create"
          />
        </View>
      ),
    },
    {
      title: "More options",
      show: Modals.more,
      hide: () => toggleModal("m"),
      children: <View></View>,
    },
    {
      title: "App types",
      show: Modals.types,
      hide: () => toggleModal("ty"),
      // children: (
      //   <AppTypesView
      //     n={3}
      //     onPress={(at) => {
      //       update("ty", at?.name);
      //       toggleModal("ty");
      //     }}
      //   />
      // ),
    },
    {
      title: `${app.type} templates`,
      show: Modals.templates,
      hide: () => toggleModal("te"),
      // children: (
      //   <AppTemplatesView
      //     type={app.type}
      //     n={3}
      //     onPress={(temp) => {
      //       update("te", temp?.name);
      //       toggleModal("te");
      //     }}
      //   />
      // ),
    },
    {
      title: ActiveApp?.name,
      show: Modals.active,
      hide: () => toggleModal("a"),
      children: (
        <View style={[bgct]}>
          <GRID
            data={actions}
            cols={1}
            Render={({ ic, text, onPress }) => (
              <BtnRowAction
                style={[height(1.25 * mt), margin("v", 6)]}
                aStyle={[padding("", mt / 5)]}
                onPress={onPress}
                ic={ic}
                bc={colors.border}
                bb={actions[actions.length - 1].text !== text}
              >
                <Text style={[bgct, fontSize(20)]}>{text?.toUpperCase()}</Text>
              </BtnRowAction>
            )}
          />
          {/* <RowBtns btns={rowBtns} size={mt / 2} color={colors.text} /> */}
          {/* {rowBtns.map((rb, i) => (
            <View style={[bgct]} key={i}>
              <RowButton {...rb} />
              {rowBtns.length - 1 !== i && (
                <View
                  style={[
                    border("b", 1),
                    borderColor(colors.border),
                    margin("l", mt + 20),
                  ]}
                />
              )}
            </View>
          ))} */}
        </View>
      ),
    },
  ];
  return (
    <Template header={header} sheets={sheets}>
      <GRID
        data={AppsList}
        cols={4}
        Render={(d) => (
          <BtnAppItem
            onPress={() => select(d?.id)}
            style={[
              layout("100%", 2 * mt),
              // margin("v", 5),
            ]}
            bc={colors.border}
            disabled={false}
            bb={false}
            {...d}
          />
        )}
      />
      {/* <GRID
        data={}
        cols={4}
        Render={(a) => (
          <AnimButton
            onPress={() => select(a?.id)}
            style={[
              layout("100%", 2 * mt),
              margin("v", 5),
              cb(1, 12, colors.border),
            ]}
            btnStyle={[jcse, aic]}
            // entering={BounceIn}
          >
            <Image style={[squareLayout(mt)]} uri={a?.uri} />
            <Text style={[bgct]}>{a?.name}</Text>
          </AnimButton>
        )}
      /> */}
    </Template>
  );
}
