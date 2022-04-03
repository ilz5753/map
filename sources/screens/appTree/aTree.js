import * as React from "react";
import * as RN from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  Icon,
  RowBtns,
  ScrollView,
  TreeModal,
  TreeView,
  View,
} from "../../../esse/components";
import { switchSelect, work } from "../../../esse/funcs";
import { Template } from "../../../esse/template";
import {
  align_items,
  dim,
  flex,
  height,
  justify_content,
  margin,
  margin_top,
  padding,
  row,
  width,
} from "../../../styles";
import {
  activeTree,
  addNewTree,
  changeTree,
  tree,
  updateTree,
  updateTreeDirectly,
  updatingTree,
} from "./appTreeSlice";
import { activeApp, changeHierechary } from "../../smSlice";
import { Stack } from "../../../esse/nav";
import { updateActiveData } from "../appEditor/appEditorSlice";
let MyStack = () => {
  let { colors } = useTheme();
  let btns = [
    {
      text: "OPEN",
      icon: {
        type: "fa5",
        name: "door-open",
      },
      props: {
        btnStyle: [row, justify_content("fs"), padding("v", 10)],
        style: [],
      },
    },
    {
      text: "EDIT",
      icon: {
        type: "mc",
        name: "circle-edit-outline",
      },
      props: {
        btnStyle: [row, justify_content("fs"), padding("v", 10)],
        style: [],
        onPress: () => {
          // toggleModal("a");
          // toggleModal();
        },
      },
    },
  ];
  return <RowBtns btns={btns} size={margin_top / 2} color={colors.text} />;
};
export default function ATree() {
  let dis = useDispatch();
  let { goBack, navigate } = useNavigation();
  let { colors } = useTheme();
  let ActiveApp = useSelector(activeApp);
  let appTree = useSelector(tree);
  let ActiveTree = useSelector(activeTree);
  let UpdatingTree = useSelector(updatingTree);
  let [Modals, setModals] = React.useState({
    edit: false,
    new: false,
    update: false,
    actions: false,
    stack: false,
  });
  // let [Modal, setModal] = React.useState(false);
  // let toggleModal = () => setModal((m) => !m);
  let UpdateActive = (t) => dis(changeTree({ type: "activeTree", tree: t }));
  let toggleModal = (type = "") => {
    setModals((m) => {
      switch (type) {
        case "n":
          return {
            ...m,
            new: !m.new,
          };
        case "u":
          return {
            ...m,
            update: !m.update,
          };
        case "a":
          return {
            ...m,
            actions: !m.actions,
          };
        case "s":
          return {
            ...m,
            stack: !m.stack,
          };
        default:
          return {
            ...m,
            edit: !m.edit,
          };
      }
    });
  };
  let header = {
    title: ActiveApp?.name,
    isShown: true,
    headerHeight: margin_top,
    btns: {
      left: [
        // {
        //   onPress: () => console.log(switchSelect()),
        //   icon: <Icon name="plus" />,
        // },
      ],
      right: [],
    },
  };
  let btns = [
    {
      text: "OPEN",
      icon: {
        type: "fa5",
        name: "door-open",
      },
      props: {
        btnStyle: [row, justify_content("fs"), padding("v", 10)],
        style: [],
        onPress: () => {
          //  TODO : dis activeTree for activeData in appEditor
          dis(updateActiveData(ActiveTree?.value));
          navigate("appEditor");
          toggleModal("a");
        },
      },
    },
    {
      text: "EDIT",
      icon: {
        type: "mc",
        name: "circle-edit-outline",
      },
      props: {
        btnStyle: [row, justify_content("fs"), padding("v", 10)],
        style: [],
        onPress: () => {
          toggleModal("a");
          toggleModal();
          // navigate("e");
        },
      },
    },
  ];
  // let stack = {
  //   navigatorOptions: {
  //     screenOptions: {
  //       headerShown: false,
  //     },
  //   },
  //   data: [
  //     {
  //       name: "a",
  //       // component: MyStack,
  //       children: () => (
  //         <RowBtns btns={btns} size={margin_top / 2} color={colors.text} />
  //       ),
  //       options: {},
  //     },
  //     {
  //       name: "e",
  //       // component: MyStack,
  //       children: () => (
  //         <TreeModal
  //           mode="e"
  //           tree={ActiveTree}
  //           toggleNew={() => {
  //             // toggleModal("n");
  //             navigate("n");
  //           }}
  //           save={(name, device) => {
  //             let atcv = _.clone(ActiveTree?.value);
  //             let path = atcv?.path;
  //             // console.log("path : ", path);
  //             if (
  //               !(
  //                 _.isEqual(atcv?.name, name) && _.isEqual(atcv?.device, device)
  //               )
  //             ) {
  //               atcv.name = name;
  //               atcv.device = device;
  //               // console.log("\n\nnot equaled!\n\n");
  //             }
  //             // console.log("\n\natcv : ");
  //             // console.log(atcv);
  //             let atc = {
  //               value: atcv,
  //               children: ActiveTree?.children,
  //             };
  //             // console.log("\n\natc : ");
  //             // console.log(atc);
  //             dis(updateTreeDirectly({ type: "tree", path, tree: atc }));
  //             navigate("a");
  //           }}
  //           updateChild={(t) => {
  //             dis(changeTree({ type: "updatingTree", tree: t }));
  //             // toggleModal("u");
  //             navigate("u");
  //           }}
  //         />
  //       ),
  //       options: {},
  //     },
  //     {
  //       name: "u",
  //       // component: MyStack,
  //       children: () => (
  //         <TreeModal
  //           mode="u"
  //           tree={UpdatingTree}
  //           save={(name, device) => {
  //             console.log(ActiveTree);
  //             let newV = { name, device };
  //             let ut = _.clone(UpdatingTree);
  //             ut.value = { ...ut?.value, ...newV };
  //             let at = _.clone(ActiveTree);
  //             at.children = at?.children?.map((c) => {
  //               if (c?.value?.id === ut?.value?.id) return ut;
  //               return c;
  //             });
  //             dis(
  //               changeTree({
  //                 type: "activeTree",
  //                 tree: at,
  //               })
  //             );
  //             // console.log(ActiveTree);
  //             // toggleModal("u");
  //             // goBack();
  //             navigate("e");
  //           }}
  //         />
  //       ),
  //       options: {},
  //     },
  //     {
  //       name: "n",
  //       // component: MyStack,
  //       children: () => (
  //         <TreeModal
  //           mode="n"
  //           tree={{}}
  //           save={(name, device) => {
  //             let path = ActiveTree?.value?.path;
  //             let zero = path === "";
  //             let dot = zero ? "" : ".";
  //             let finp = `${path}${dot}children[${ActiveTree?.children?.length}]`;
  //             // dis(
  //             //   addNewTree({
  //             //     type: "tree",
  //             //     path,
  //             //     value: {
  //             //       name,
  //             //       device,
  //             //       path: finp,
  //             //     },
  //             //   })
  //             // );
  //             // console.log("path : ", path);
  //             // console.log("finp : ", finp);
  //             dis(
  //               addNewTree({
  //                 type: "activeTree",
  //                 path,
  //                 value: {
  //                   name,
  //                   device,
  //                   path: finp,
  //                 },
  //               })
  //             );
  //             // UpdateActive(appTree);
  //             // toggleModal("n");
  //             navigate("e");
  //           }}
  //         />
  //       ),
  //       options: {},
  //     },
  //   ],
  // };
  let sheets = [
    {
      title: ActiveTree?.value?.name,
      show: Modals.edit,
      hide: toggleModal,
      children: (
        <TreeModal
          mode="e"
          tree={ActiveTree}
          toggleNew={() => {
            toggleModal("n");
          }}
          save={(name, device) => {
            let atcv = _.clone(ActiveTree?.value);
            let path = atcv?.path;
            // console.log("path : ", path);
            if (
              !(_.isEqual(atcv?.name, name) && _.isEqual(atcv?.device, device))
            ) {
              atcv.name = name;
              atcv.device = device;
              // console.log("\n\nnot equaled!\n\n");
            }
            // console.log("\n\natcv : ");
            // console.log(atcv);
            let atc = {
              value: atcv,
              children: ActiveTree?.children,
            };
            // console.log("\n\natc : ");
            // console.log(atc);
            dis(updateTreeDirectly({ type: "tree", path, tree: atc }));
            toggleModal();
          }}
          updateChild={(t) => {
            dis(changeTree({ type: "updatingTree", tree: t }));
            toggleModal("u");
          }}
        />
      ),
    },
    {
      title: "New Tree",
      show: Modals.new,
      hide: () => toggleModal("n"),
      children: (
        <TreeModal
          mode="n"
          tree={{}}
          save={(name, device) => {
            let path = ActiveTree?.value?.path;
            let zero = path === "";
            let dot = zero ? "" : ".";
            let finp = `${path}${dot}children[${ActiveTree?.children?.length}]`;
            // dis(
            //   addNewTree({
            //     type: "tree",
            //     path,
            //     value: {
            //       name,
            //       device,
            //       path: finp,
            //     },
            //   })
            // );
            // console.log("path : ", path);
            // console.log("finp : ", finp);
            dis(
              addNewTree({
                type: "activeTree",
                path,
                value: {
                  name,
                  device,
                  path: finp,
                },
              })
            );
            // UpdateActive(appTree);
            toggleModal("n");
          }}
        />
      ),
    },
    {
      title: `Update ${UpdatingTree?.value?.name}`,
      show: Modals.update,
      hide: () => toggleModal("u"),
      children: (
        <TreeModal
          mode="u"
          tree={UpdatingTree}
          save={(name, device) => {
            console.log(ActiveTree);
            let newV = { name, device };
            let ut = _.clone(UpdatingTree);
            ut.value = { ...ut?.value, ...newV };
            let at = _.clone(ActiveTree);
            at.children = at?.children?.map((c) => {
              if (c?.value?.id === ut?.value?.id) return ut;
              return c;
            });
            dis(
              changeTree({
                type: "activeTree",
                tree: at,
              })
            );
            // console.log(ActiveTree);
            toggleModal("u");
          }}
        />
      ),
    },
    {
      title: ActiveTree?.value?.name,
      show: Modals.actions,
      hide: () => toggleModal("a"),
      children: (
        <View>
          <RowBtns btns={btns} size={margin_top / 2} color={colors.text} />
        </View>
      ),
    },
    // {
    //   title: ActiveTree?.value?.name,
    //   show: Modals.stack,
    //   hide: () => toggleModal(),
    //   children: (
    //     <View style={[width("100%"), height(dim.height)]}>
    //       <Stack {...stack} />
    //     </View>
    //   ),
    // },
  ];
  React.useEffect(() => {
    let bh = RN.BackHandler.addEventListener("hardwareBackPress", () => {
      goBack();
      dis(changeHierechary({ id: ActiveApp?.id, hierechary: appTree }));
      return true;
    });
    return bh.remove;
  });
  return (
    <Template header={header} sheets={sheets}>
      <ScrollView horizontal>
        <View style={[flex(1), align_items("")]}>
          <TreeView
            tree={appTree}
            onPress={(t) => {
              UpdateActive(t);
              toggleModal("a");
            }}
          />
        </View>
      </ScrollView>
    </Template>
  );
}
