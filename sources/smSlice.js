import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { strReverse } from "../esse/funcs";
import { uuid } from "../styles";
let sm = createSlice({
  name: "sm",
  initialState: {
    apps: [
      {
        id: uuid(),
        name: "Todo",
        type: "Educational",
        uri: "",
        template: "",
        hierarchicalTree: {
          value: {
            id: uuid(),
            name: "ROOT",
            device: "Mobile",
            path: "",
          },
          children: [
            // {
            //   value: {
            //     id: uuid(),
            //     name: "Splash",
            //     device: "Web",
            //     path: "children[0]",
            //   },
            //   children: [],
            // },
          ],
        },
      },
    ],
    activeApp: {},
    activeHierarchicalTree: {},
  },
  reducers: {
    addApp: (state, action) => {
      let { payload } = action;
      state.apps.push({
        hierarchicalTree: {
          value: {
            id: uuid(),
            name: "ROOT",
            device: "Mobile",
            path: "",
          },
          children: [],
        },
        ...payload,
      });
    },
    updateApp: (state, action) => {
      let { id, data } = action.payload;
      let na = _.clone(state.apps);
      na = na.map((a) => {
        if (a?.id === id) a = { ...a, ...data };
        return a;
      });
      state.apps = na;
    },
    deleteApp: (state, action) => {
      let { id } = action.payload;
      let na = _.clone(state.apps);
      na = na.filter((a) => a?.id !== id);
      state.apps = na;
    },
    changeHierechary: (state, action) => {
      let { id, hierechary } = action.payload;
      let na = _.clone(state.apps);
      // console.log("before na : ");
      // console.log(na);
      na = na.map((a) => {
        if (a.id === id) {
          let aCopy = _.clone(a);
          aCopy.hierarchicalTree = hierechary;
          return aCopy;
        }
        return a;
      });
      // console.log("after na : ");
      // console.log(na);
      state.apps = na;
    },
    addHierechary: (state, action) => {
      let { id, path, value } = action.payload;
      let na = state.apps.map((a) => {
        if (a?.id === id) {
          let aCopy = a;
          let treeCopy = a?.hierarchicalTree;
          _.set(treeCopy, path, {
            value: { ...value, id: uuid() },
            children: [],
          });
          aCopy.hierarchicalTree = treeCopy;
          //   console.log("\n====================================\n");
          //   console.log(aCopy.name, " : ");
          //   console.log(aCopy);
          //   console.log("\n====================================\n");
          //
          state.activeApp = aCopy;
          //
          return aCopy;
        }
        return a;
      });
      state.apps = na;
    },
    updateHierechary: (state, action) => {
      let { id, path, value } = action.payload;
      let na = state.apps.map((a) => {
        if (a?.id === id) {
          let aCopy = a;
          let treeCopy = a?.hierarchicalTree;
          let item = _.get(treeCopy, path);
          //   if (item?.value?.name === "ROOT") return a;
          _.set(treeCopy, path, {
            ...item,
            value: { ...item?.value, ...value },
          });
          aCopy.hierarchicalTree = treeCopy;
          //   console.log("\n====================================\n");
          //   console.log(aCopy.name, " : ");
          //   console.log(aCopy);
          //   console.log("\n====================================\n");
          //
          state.activeApp = aCopy;
          //
          return aCopy;
        }
        return a;
      });
      state.apps = na;
    },
    updateHierecharyDirectly: (state, action) => {
      let { id, path, hierechary } = action.payload;
      let na = state.apps.map((a) => {
        if (a?.id === id) {
          console.log("equaled at : ", id);
          console.log("hierechary : ");
          console.log(hierechary);
          let aCopy = a;
          let treeCopy = a?.hierarchicalTree;
          if (path) {
            let item = _.get(treeCopy, path);
            console.log(item);
            _.set(treeCopy, path, hierechary);
          } else {
            treeCopy = hierechary;
          }
          aCopy.hierarchicalTree = treeCopy;
          // aCopy.hierarchicalTree = hierechary;
          state.activeApp = aCopy;
          return aCopy;
        }
        return a;
      });
      state.apps = na;
    },
    deleteHierechary: (state, action) => {
      let { id, path, index } = action.payload;
      let rPath = strReverse(path);
      let firstNPathDot = rPath.indexOf(".");
      let nPath = path?.slice(0, rPath.length - 1 - firstNPathDot);
      //   console.log("====================================");
      //   console.log(id, " path : ", path);
      //   console.log("rPath : ", rPath);
      //   console.log("nPath : ", nPath);
      //   console.log("====================================");
      let na = state.apps.map((a) => {
        if (a?.id === id) {
          let aCopy = a;
          let treeCopy = a?.hierarchicalTree;
          _.unset(treeCopy, path);
          if (nPath === path)
            treeCopy.children = treeCopy.children.filter(
              (c) => c !== undefined,
            );
          else {
            let item = _.get(treeCopy, nPath);
            item.children = item?.children?.filter((__) => __ !== undefined);
            _.set(treeCopy, nPath, item);
          }

          //   console.log("====================================");
          //   console.log("item : ");
          //   console.log(item);
          //   console.log("====================================");

          aCopy.hierarchicalTree = treeCopy;
          //   console.log("\n====================================\n");
          //   console.log(aCopy.name, " : ");
          //   console.log(aCopy);
          //   console.log("\n====================================\n");
          //
          state.activeApp = aCopy;
          //
          return aCopy;
        }
        return a;
      });
      state.apps = na;
    },
    resetApps: (state) => {
      state.apps = [];
    },
    updateActiveApp: (state, action) => {
      let { id } = action.payload;
      state.apps.forEach((a) => {
        if (a?.id === id) {
          state.activeApp = a;
        }
      });
    },
    resetActiveApp: (state) => {
      state.activeApp = {};
    },
  },
});
export let {
  addApp,
  addHierechary,
  updateActiveApp,
  updateApp,
  changeHierechary,
  updateHierechary,
  updateHierecharyDirectly,
  deleteApp,
  deleteHierechary,
  resetActiveApp,
  resetApps,
} = sm.actions;
export let apps = (state) => state.sm.apps;
export let activeApp = (state) => state.sm.activeApp;
export default sm.reducer;
