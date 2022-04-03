/* eslint-disable radix */
import { StyleSheet, Dimensions, Platform } from "react-native";
export let isAndroid = Platform.OS === "android";
export let dim = Dimensions.get("screen");
export let margin_top = 50;
export let padding_horizontal = 0.06 * dim.width;

// hex to rgba
export function hexToRGB(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
}

// color opositor
export let co = (hex) => {
  let g10 = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  let res = "#";
  let fg10 = (char) => {
    for (let key in g10) {
      if (key === char.toLowerCase()) {
        return g10[key];
      }
    }
    return parseInt(char);
  };
  let G10 = (num) => {
    for (let key in g10) {
      if (g10[key] === num) {
        return key;
      }
    }
    return num;
  };
  for (let i = 1; i < hex.length; i++) {
    let ri = hex[i];
    let diff = 15 - fg10(ri);
    res += G10(diff);
  }
  return res;
};

// colors
export let my_blue = "#123fff";
export let white = "#ffffff";
export let black = co(white);
export let my_orange = co(my_blue);
export let light_placeholder = "#626262";
export let dark_placeholder = co(light_placeholder);
export let my_blue_light = hexToRGB(my_blue, 0.2);
export let my_orange_light = hexToRGB(my_orange, 0.2);

// style functions
export let StyleSheetFactory = (style) => StyleSheet.create({ style }).style;
export let width = (size) => StyleSheetFactory({ width: size });
export let height = (size) => StyleSheetFactory({ height: size });
export let margin = (type, size) => {
  let m = {};
  switch (type) {
    case "t":
      m.marginTop = size;
      break;
    case "b":
      m.marginBottom = size;
      break;
    case "l":
      m.marginLeft = size;
      break;
    case "r":
      m.marginRight = size;
      break;
    case "h":
      m.marginHorizontal = size;
      break;
    case "v":
      m.marginVertical = size;
      break;
    case "tr":
      m.marginTop = size;
      m.marginRight = size;
      break;
    case "tl":
    case "lt":
      m.marginTop = size;
      m.marginLeft = size;
      break;
    case "br":
    case "rb":
      m.marginBottom = size;
      m.marginRight = size;
      break;
    case "bl":
    case "lb":
      m.marginBottom = size;
      m.marginLeft = size;
      break;
    case "ht":
    case "th":
      m.marginTop = size;
      m.marginHorizontal = size;
      break;
    case "hb":
    case "bh":
      m.marginBottom = size;
      m.marginHorizontal = size;
      break;
    case "vl":
    case "lv":
      m.marginLeft = size;
      m.marginVertical = size;
      break;
    case "vr":
    case "rv":
      m.marginRight = size;
      m.marginVertical = size;
      break;
    default:
      m.margin = size;
      break;
  }
  return StyleSheetFactory(m);
};
export let padding = (type, size) => {
  let p = {};
  switch (type) {
    case "t":
      p.paddingTop = size;
      break;
    case "b":
      p.paddingBottom = size;
      break;
    case "l":
      p.paddingLeft = size;
      break;
    case "r":
      p.paddingRight = size;
      break;
    case "h":
      p.paddingHorizontal = size;
      break;
    case "v":
      p.paddingVertical = size;
      break;
    case "tr":
    case "rt":
      p.paddingTop = size;
      p.paddingRight = size;
      break;
    case "tl":
    case "lt":
      p.paddingTop = size;
      p.paddingLeft = size;
      break;
    case "br":
    case "rb":
      p.paddingBottom = size;
      p.paddingRight = size;
      break;
    case "bl":
    case "lb":
      p.paddingBottom = size;
      p.paddingLeft = size;
      break;
    case "ht":
    case "th":
      p.paddingTop = size;
      p.paddingHorizontal = size;
      break;
    case "hb":
    case "bh":
      p.paddingBottom = size;
      p.paddingHorizontal = size;
      break;
    case "vl":
    case "lv":
      p.paddingLeft = size;
      p.paddingVertical = size;
      break;
    case "vr":
    case "rv":
      p.paddingRight = size;
      p.paddingVertical = size;
      break;
    default:
      p.padding = size;
      break;
  }
  return StyleSheetFactory(p);
};
export let border = (type, size) => {
  let b = {};
  switch (type) {
    case "t":
      b.borderTopWidth = size;
      break;
    case "b":
      b.borderBottomWidth = size;
      break;
    case "l":
      b.borderLeftWidth = size;
      break;
    case "r":
      b.borderRightWidth = size;
      break;
    case "h":
      b.borderLeftWidth = size;
      b.borderRightWidth = size;
      break;
    case "v":
      b.borderTopWidth = size;
      b.borderBottomWidth = size;
      break;
    case "tr":
    case "rt":
      b.borderTopWidth = size;
      b.borderRightWidth = size;
      break;
    case "tl":
    case "lt":
      b.borderTopWidth = size;
      b.borderLeftWidth = size;
      break;
    case "br":
    case "rb":
      b.borderBottomWidth = size;
      b.borderRightWidth = size;
      break;
    case "bl":
    case "lb":
      b.borderBottomWidth = size;
      b.borderLeftWidth = size;
      break;
    case "ht":
    case "th":
      b.borderTopWidth = size;
      b.borderLeftWidth = size;
      b.borderRightWidth = size;
      break;
    case "hb":
    case "bh":
      b.borderBottomWidth = size;
      b.borderLeftWidth = size;
      b.borderRightWidth = size;
      break;
    case "vl":
    case "lv":
      b.borderLeftWidth = size;
      b.borderTopWidth = size;
      b.borderBottomWidth = size;
      break;
    case "vr":
    case "rv":
      b.borderRightWidth = size;
      b.borderTopWidth = size;
      b.borderBottomWidth = size;
      break;
    default:
      b.borderWidth = size;
      break;
  }
  return StyleSheetFactory(b);
};
export let borderRadius = (type, size) => {
  let br = {};
  switch (type) {
    case "t":
      br.borderTopLeftRadius = size;
      br.borderTopRightRadius = size;
      break;
    case "b":
      br.borderBottomLeftRadius = size;
      br.borderBottomRightRadius = size;
      break;
    case "l":
      br.borderTopLeftRadius = size;
      br.borderBottomLeftRadius = size;
      break;
    case "r":
      br.borderTopRightRadius = size;
      br.borderBottomRightRadius = size;
      break;
    case "tr":
      br.borderTopRightRadius = size;
      break;
    case "tl":
      br.borderTopLeftRadius = size;
      break;
    case "br":
      br.borderBottomRightRadius = size;
      break;
    case "bl":
      br.borderBottomLeftRadius = size;
      break;
    case "ntl":
      br.borderTopRightRadius = size;
      br.borderBottomRightRadius = size;
      br.borderBottomLeftRadius = size;
      break;
    case "ntr":
      br.borderTopLeftRadius = size;
      br.borderBottomRightRadius = size;
      br.borderBottomLeftRadius = size;
      break;
    case "nbl":
      br.borderBottomRightRadius = size;
      br.borderTopRightRadius = size;
      br.borderTopLeftRadius = size;
      break;
    case "nbr":
      br.borderBottomLeftRadius = size;
      br.borderTopRightRadius = size;
      br.borderTopLeftRadius = size;
      break;
    default:
      br.borderRadius = size;
      break;
  }
  return StyleSheetFactory(br);
};
export let color = (c) => StyleSheetFactory({ color: c });
export let borderColor = (bc) => StyleSheetFactory({ borderColor: bc });
export let backgroundColor = (bgc) =>
  StyleSheetFactory({ backgroundColor: bgc });
export let flex = (size) => StyleSheetFactory({ flex: size });
export let fontSize = (size) => StyleSheetFactory({ fontSize: size });
export let opacity = (size) => StyleSheetFactory({ opacity: size });
export let zIndex = (size) => StyleSheetFactory({ zIndex: size });
export let font_weight = (type) => {
  let fw = "normal";
  switch (type) {
    case "1":
      fw = "100";
      break;
    case "2":
      fw = "200";
      break;
    case "3":
      fw = "300";
      break;
    case "4":
      fw = "400";
      break;
    case "5":
      fw = "500";
      break;
    case "6":
      fw = "600";
      break;
    case "7":
      fw = "700";
      break;
    case "8":
      fw = "800";
      break;
    case "9":
      fw = "900";
      break;
    case "b":
      fw = "bold";
      break;
    default:
      break;
  }
  return StyleSheetFactory({ fontWeight: fw });
};
export let justify_content = (type) => {
  let jc = "center";
  switch (type) {
    case "fs":
      jc = "flex-start";
      break;
    case "fe":
      jc = "flex-end";
      break;
    case "sb":
      jc = "space-between";
      break;
    case "se":
      jc = "space-evenly";
      break;
    case "sa":
      jc = "space-around";
      break;
    default:
      break;
  }
  return StyleSheetFactory({ justifyContent: jc });
};
export let align_items = (type) => {
  let ai = "center";
  switch (type) {
    case "fs":
      ai = "flex-start";
      break;
    case "fe":
      ai = "flex-end";
      break;
    case "s":
      ai = "stretch";
      break;
    case "b":
      ai = "baseline";
      break;
    case "sa":
      ai = "space-around";
      break;
    default:
      break;
  }
  return StyleSheetFactory({ alignItems: ai });
};
export let text_align = (type) => {
  let ta = "center";
  switch (type) {
    case "l":
      ta = "left";
      break;
    case "r":
      ta = "right";
      break;
    case "a":
      ta = "auto";
      break;
    case "j":
      ta = "justify";
      break;
    default:
      break;
  }
  return StyleSheetFactory({ textAlign: ta });
};
export let display = (isFlex) =>
  StyleSheetFactory({ display: isFlex ? "flex" : "none" });
export let flex_direction = (type) => {
  let fd = "column";
  switch (type) {
    case "r":
      fd = "row";
      break;
    case "rr":
      fd = "row-reverse";
      break;
    case "cr":
    case "rc":
      fd = "column-reverse";
      break;
    default:
      break;
  }
  return StyleSheetFactory({ flexDirection: fd });
};
export let position = (isABS) =>
  StyleSheetFactory({ position: isABS ? "absolute" : "relative" });

export let center = [justify_content(""), align_items("")];
export let row = [display(true), flex_direction("r")];
export let bw1 = border("", 1);
export let br10 = borderRadius("", 10);
export let tr = "transparent";
export let tbc = borderColor(tr);
export let full = [width("100%"), height("100%")];
export let overlay = [position(true), zIndex(1)];
export let Root = [width(dim.width), height(dim.height)];
export let root = ({ p, headerHeight }) => {
  let hhz = headerHeight === 0;
  let hh = hhz ? margin_top : headerHeight;
  return [
    width(dim.width - 2 * p),
    height(dim.height - (hhz ? 3 : 2) * hh),
    margin("h", p),
    margin("t", hh),
    margin("b", 0.5 * hh),
  ];
};
export let pageStyle = (headerHeight = margin_top) => [
  root({ p: 0, headerHeight }),
  overlay,
  margin("h", padding_horizontal),
  margin("v", 2 * headerHeight),
  backgroundColor("#fff"),
  // bw1,
];
export let bgct = backgroundColor(tr);
export let defaultAndroidRippleBorder = [
  border("", 1),
  borderRadius("", 12),
  tbc,
];

//

export let uuid = (len = 34) => {
  let sc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let allChars = sc.concat(sc.map((s) => s.toUpperCase())).concat(nums);
  // console.log(allChars);
  let result = "";
  for (let i = 0; i < len; i++) {
    if ((i + 1) % 5 === 0) result += "-";
    else result += allChars[Math.floor(Math.random() * allChars.length)];
  }
  return result;
};

// test style
let ts = StyleSheet.create({
  t: {
    position: "absolute",
  },
});
