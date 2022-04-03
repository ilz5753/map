import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import {
  deepCopyOneLevel,
  searchTrees,
  strReverse,
  switchSelect,
} from "../../../esse/funcs";
import { uuid } from "../../../styles";
// let appTree = createSlice({
//   name: "appTree",
//   initialState: {
//     screens: [
//       {
//         id: "root",
//         name: "Root",
//         parentId: "",
//         childrenIds: [],
//       },
//     ],
//     activeScreen: {
//       id: "root",
//       name: "Root",
//       parentId: "",
//       childrenIds: [],
//     },
//   },
//   reducers: {
//     addScreen: (state, action) => {
//       let { id, data } = action.payload;
//       let founded = state.screens.filter((s) => s.id === id)[0];
//       let nf = { ...founded, childrenIds: [...founded.childrenIds, data?.id] };
//       state.screens = state.screens.map((s) => {
//         if (s.id === id) return nf;
//         return s;
//       });
//       state.screens.push(data);
//     },
//     updateScreen: (state, action) => {
//       let { id, data } = action.payload;
//       state.screens = state.screens.map((s) => {
//         if (s.id === id) return { ...data, id };
//         return s;
//       });
//     },
//     deleteScreen: (state, action) => {
//       let { id } = action.payload;
//       let founded = state.screens.filter((s) => s.id === id)[0];
//       //   state.screens = state.screens.filter((s) => s.id !== id && id !== "root");
//       state.screens = state.screens.filter((s) => {
//         if (s.id === id || founded.childrenIds.includes(s.id)) return false;
//         return true;
//       });
//     },
//     // deleteScreen: (state, action) => {
//     //   let { id } = action.payload;
//     //   let founded = state.screens.filter((s) => s.id === id)[0];
//     //   //   state.screens = state.screens.filter((s) => s.id !== id && id !== "root");
//     //   state.screens = state.screens.filter((s) => {
//     //     if (s.id === id || founded.childrenIds.includes(s.id)) return false;
//     //     return true;
//     //   });
//     // },
//     updateActiveScreen: (state, action) => {
//       state.activeScreen = action.payload;
//     },
//   },
// });
// export let { addScreen, updateScreen, deleteScreen, updateActiveScreen } =
//   appTree.actions;
// export let screens = (state) => state.appTree.screens;
// export let activeScreen = (state) => state.appTree.activeScreen;
// let appTree = createSlice({
//   name: "appTree",
//   initialState: {
//     trees: [
//       {
//         name: "ROOT",
//         id: uuid(),
//         children: [],
//       },
//     ],
//     draft: {},
//     initial: {},
//   },
//   reducers: {
//     select: (state, action) => {
//       let { selected } = action.payload;
//       if (!(state.draft && state.draft?.id === selected?.id)) {
//         state.initial = deepCopyOneLevel(selected);
//         state.draft = deepCopyOneLevel(selected);
//       }
//     },
//     reset: (state, action) => {
//       state.draft = deepCopyOneLevel(state.initial);
//     },
//     mutate: (state, action) => {
//       let { value, id } = action.payload?.data;
//       state.draft = {
//         ...state.draft,
//         [id]: value,
//       };
//     },
//     add: (state, action) => {
//       let copyTrees = _.cloneDeep(state.trees);
//       const defaultElem = { ...action.payload, id: uuid() };
//       if (!state.draft) copyTrees.push(defaultElem);
//       state.draft = deepCopyOneLevel(defaultElem);
//       state.initial = deepCopyOneLevel(defaultElem);
//       state.trees = copyTrees;
//     },
//     save: (state, action) => {
//       let copyTrees = _.cloneDeep(state.trees);
//       let toSave = searchTrees(copyTrees, state.draft?.id);
//       Object.keys(toSave).forEach((key) => {
//         toSave[key] = state.draft[key];
//       });
//       state.trees = copyTrees;
//       state.draft = null;
//       state.initial = null;
//     },
//   },
// });
// export let { select, reset, mutate, add, save } = appTree.actions;
// export let trees = (state) => state.appTree.trees;
// export let drafts = (state) => state.appTree.drafts;
// export let initial = (state) => state.appTree.initial;
let appTree = createSlice({
  name: "appTree",
  initialState: {
    tree: {
      // value: {
      //   id: uuid(),
      //   name: "ROOT",
      //   device: "Mobile",
      //   path: "",
      // },
      // children: [
      //   {
      //     value: {
      //       id: uuid(),
      //       name: "Splash",
      //       device: "Web",
      //       path: "children[0]",
      //     },
      //     children: [],
      //   },
      // ],
    },
    activeTree: {},
    updatingTree: {},
  },
  // reducers: {
  //   addNewTree: (state, action) => {
  //     let { path, value } = action.payload;
  //     let treeCopy = state.tree;
  //     if (path)
  //       _.set(treeCopy, path, {
  //         value: { ...value, id: uuid() },
  //         children: [],
  //       });
  //     else
  //       treeCopy.children.push({
  //         value: { ...value, id: uuid() },
  //         children: [],
  //       });
  //     //   console.log(res);
  //     state.tree = treeCopy;
  //   },
  //   updateTree: (state, action) => {
  //     let { path, value } = action.payload;
  //     let treeCopy = state.tree;
  //     console.log("\n\npath : ", path);
  //     if (path === "")
  //       treeCopy.value = {
  //         ...value,
  //         id: treeCopy.value.id,
  //         path: treeCopy.value.path,
  //       };
  //     else {
  //       let res = _.get(treeCopy, path);
  //       // console.log(res);
  //       let finRes = _.set(treeCopy, path, {
  //         ...res,
  //         value: { ...res?.value, ...value },
  //       });
  //       // console.log(finRes);
  //     }
  //     console.log("treeCopy : ");
  //     console.log(treeCopy);
  //     state.tree = treeCopy;
  //   },
  //   deleteTree: (state, action) => {
  //     let { path } = action.payload;
  //     let treeCopy = state.tree;
  //     let res = _.unset(treeCopy, path);
  //     // console.log(res);
  //     state.tree = treeCopy;
  //   },
  //   changeTree: (state, action) => {
  //     state.tree = action.payload;
  //   },
  // },
  reducers: {
    addNewTree: (state, action) => {
      let { type, path, value } = action.payload;
      // console.log("addNewTree value : ");
      // console.log(value);
      let nt = {
        value: { ...value, id: uuid() },
        children: [],
      };
      // console.log("nt : ");
      // console.log(nt);
      let currTree = _.clone(state[type]);
      // console.log("path : ", path);
      // console.log("before currTree : ");
      // console.log(currTree);
      // if (path) {
      // let rPath = strReverse(path);
      // let rIndex = rPath.indexOf(".");
      // let nPath = rPath.slice(rIndex + 1, rPath.length);
      // let finPath = strReverse(nPath);
      // console.log("finPath : ", finPath);
      // if (!nPath) finPath = path;
      //   _.set(currTree, path, nt);
      // }
      // else
      currTree?.children?.push(nt);
      // console.log("after currTree : ");
      // console.log(currTree);
      state[type] = currTree;
    },
    updateTree: (state, action) => {
      let { type, path, value } = action.payload;
      let currTree = _.clone(state[type]);
      if (path) {
        let item = _.clone(_.get(currTree, path));
        // console.log("before item value : ");
        // console.log(item?.value);
        // console.log("value : ");
        // console.log(value);
        item.value = { ...item?.value, ...value };
        // console.log("after item value : ");
        // console.log(item?.value);
        _.set(currTree, path, item);
      } else {
        currTree.value = {
          ...currTree?.value,
          ...value,
        };
      }
      // console.log("path : ");
      // console.log(path);
      state[type] = currTree;
    },
    deleteTree: (state, action) => {
      let { type, path } = action.payload;
      let currTree = _.clone(state[type]);
      let rPath = strReverse(path);
      let firstNPathDot = rPath.indexOf(".");
      let nPath = path?.slice(0, rPath.length - 1 - firstNPathDot);
      _.unset(currTree, path);
      if (nPath === path)
        currTree.children = currTree?.children?.filter((c) => c !== undefined);
      else {
        let item = _.clone(_.get(currTree, nPath));
        item.children = item?.children?.filter((c) => c !== undefined);
        _.set(currTree, nPath, item);
      }
      state[type] = currTree;
    },
    updateTreeDirectly: (state, action) => {
      let { type, path, tree } = action.payload;
      // console.log("tree : ");
      // console.log(tree);
      let currTree = _.clone(state[type]);
      if (path) _.set(currTree, path, tree);
      else currTree = tree;
      // console.log("currTree : ");
      // console.log(currTree);
      state[type] = currTree;
    },
    changeTree: (state, action) => {
      let { type, tree } = action.payload;
      state[type] = tree;
    },
  },
});
export let {
  addNewTree,
  deleteTree,
  updateTree,
  updateTreeDirectly,
  changeTree,
} = appTree.actions;
export let tree = (state) => state.appTree.tree;
export let activeTree = (state) => state.appTree.activeTree;
export let updatingTree = (state) => state.appTree.updatingTree;
export default appTree.reducer;
