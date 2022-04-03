import _ from "lodash";
export const clamp = (value, lowerBound, upperBound) => {
  "worklet";
  return Math.min(Math.max(lowerBound, value), upperBound);
};
export function decycle(obj, stack = []) {
  if (!obj || typeof obj !== "object") return obj;

  if (stack.includes(obj)) return null;

  let s = stack.concat([obj]);

  return Array.isArray(obj)
    ? obj.map((x) => decycle(x, s))
    : Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, decycle(v, s)])
      );
}
export function toJSON(proto) {
  let jsoned = {};
  let toConvert = proto || this;
  Object.getOwnPropertyNames(toConvert).forEach((prop) => {
    const val = toConvert[prop];
    // don't include those
    if (prop === "toJSON" || prop === "constructor") {
      return;
    }
    if (typeof val === "function") {
      jsoned[prop] = val.bind(jsoned);
      return;
    }
    jsoned[prop] = val;
  });

  const inherited = Object.getPrototypeOf(toConvert);
  if (inherited !== null) {
    Object.keys(this.toJSON(inherited)).forEach((key) => {
      if (!!jsoned[key] || key === "constructor" || key === "toJSON") return;
      if (typeof inherited[key] === "function") {
        jsoned[key] = inherited[key].bind(jsoned);
        return;
      }
      jsoned[key] = inherited[key];
    });
  }
  return jsoned;
}
export const deepCopyOneLevel = (obj) => {
  return {
    ...obj,
    children: obj.children && obj.children.map((c) => ({ ...c })),
  };
};

//DFS
export function searchTree(element, id) {
  if (element.id === id) {
    return element;
  } else if (element.children != null) {
    let i;
    let result = null;
    for (i = 0; result == null && i < element.children.length; i++) {
      result = searchTree(element.children[i], id);
    }
    return result;
  }
  return null;
}

export function searchTrees(roots, id) {
  for (let x = 0; x < roots.length; ++x) {
    let elem = searchTree(roots[x], id);
    if (elem) return elem;
  }
  return null;
}
export function createPath(tree) {}
export function strReverse(str = "Hello") {
  return str.split("").reverse().join("");
}

export let switchSelect = (type = "a", args = { a: { test: "test" } }) =>
  args[type];
export function work(p, c) {
  let ph = _.clone(p),
    ch = _.clone(c);
  let nots = [],
    final = [];
  for (let ci of ch) {
    let ciNotExist = true;
    for (let pi of ph) {
      if (_.isEqual(ci, pi)) ciNotExist = false;
    }
    if (ciNotExist) nots.push(ci);
  }
  // for (let not of nots) ph.push(not);
  // console.log("nots : ");
  // console.log(nots);
  for (let not of nots) if (not) final.push(not);
  console.log("final : ");
  console.log(final);
  return final;
}
