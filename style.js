import * as RN from "react-native";

export let isAndroid = RN.Platform.OS === "android";
export let dim = RN.Dimensions.get("screen");
export let mt = 50;
// hex to rgba
export function hexToRGB(hex, alpha) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
}

// color opositor
export let co = (hex) => {
  let g11 = [
    ["a", 10],
    ["b", 11],
    ["c", 12],
    ["d", 13],
    ["e", 14],
    ["f", 15],
  ];
  let res = "#";
  let fg10 = (char) => {
    for (let tup of g11) if (tup[0] === char.toLocaleLowerCase()) return tup[1];
    return parseInt(char);
  };
  let G10 = (num) => {
    for (let tup of g11) {
      if (tup[1] === num) {
        return tup[0];
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

export let uuid = (len = 34, dash = 5) => {
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
  let allChars = sc
    .concat(sc.map((s) => s.toUpperCase()))
    .concat(nums.map((n) => n.toString()));
  // console.log(allChars);
  let result = "";
  for (let i = 0; i < len; i++) {
    if ((i + 1) % dash === 0) result += "-";
    else result += allChars[Math.floor(Math.random() * allChars.length)];
  }
  return result;
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
export let tr = "transparent";
export let minWidth = (size) => ({
  minWidth: size,
});
export let width = (size) => ({
  width: size,
});
export let maxWidth = (size) => ({
  maxWidth: size,
});
export let minHeight = (size) => ({
  minHeight: size,
});
export let height = (size) => ({
  height: size,
});
export let maxHeight = (size) => ({
  maxHeight: size,
});
export let layout = (w, h) => [width(w), height(h)];
export let squareLayout = (size) => layout(size, size);
export let margin = (type, size) => {
  let m = {
    // marginTop: 0,
    // marginBottom: 0,
    // marginLeft: 0,
    // marginRight: 0,
    // marginHorizontal: 0,
    // marginVertical: 0,
    // margin: 0
  };
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
  return m;
};
export let padding = (type, size) => {
  let p = {
    // paddingTop: 0,
    // paddingBottom: 0,
    // paddingLeft: 0,
    // paddingRight: 0,
    // paddingHorizontal: 0,
    // paddingVertical: 0,
    // padding: 0
  };
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
  return p;
};
export let border = (type, size) => {
  let b = {
    // borderTopWidth: 0,
    // borderBottomWidth: 0,
    // borderLeftWidth: 0,
    // borderRightWidth: 0,
    // borderWidth: 0,
    // borderStartWidth: 0,
    // borderEndWidth: 0
  };
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
    case "e":
      b.borderEndWidth = size;
      break;
    case "s":
      b.borderStartWidth = size;
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
  return b;
};
export let borderRadius = (type, size) => {
  let br = {
    // borderTopLeftRadius: 0,
    // borderTopRightRadius: 0,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
    // borderRadius: 0,
  };
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
    case "rt":
      br.borderTopRightRadius = size;
      break;
    case "tl":
    case "lt":
      br.borderTopLeftRadius = size;
      break;
    case "br":
    case "rb":
      br.borderBottomRightRadius = size;
      break;
    case "bl":
    case "lb":
      br.borderBottomLeftRadius = size;
      break;
    case "btr":
    case "trb":
      br.borderTopRightRadius = size;
      br.borderBottomRightRadius = size;
      br.borderBottomLeftRadius = size;
      break;
    case "btl":
    case "tlb":
      br.borderTopLeftRadius = size;
      br.borderBottomRightRadius = size;
      br.borderBottomLeftRadius = size;
      break;
    case "tbr":
    case "brt":
      br.borderBottomRightRadius = size;
      br.borderTopRightRadius = size;
      br.borderTopLeftRadius = size;
      break;
    case "tbl":
    case "blt":
      br.borderBottomLeftRadius = size;
      br.borderTopRightRadius = size;
      br.borderTopLeftRadius = size;
      break;
    default:
      br.borderRadius = size;
      break;
  }
  return br;
};
export let color = (c) => ({ color: c });
export let borderColor = (c) => ({ borderColor: c });
export let backgroundColor = (c) => ({ backgroundColor: c });
export let textDecorationColor = (c) => ({ textDecorationColor: c });
export let flex = (size) => ({ flex: size });
export let fontSize = (size) => ({ fontSize: size });
export let fontFamily = (c) => ({ fontFamily: c });
export let letterSpacing = (size) => ({ letterSpacing: size });
export let lineHeight = (c) => ({ lineHeight: c });
export let opacity = (size) => ({ opacity: size });
export let zIndex = (size) => ({ zIndex: size });
export let top = (size) => ({ top: size });
export let bottom = (size) => ({ bottom: size });
export let left = (size) => ({ left: size });
export let right = (size) => ({ right: size });

export let fontWeight = (type) => {
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
  return { fontWeight: fw };
};
export let justifyContent = (type) => {
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
  return { justifyContent: jc };
};
export let alignItems = (type) => {
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
    default:
      break;
  }
  return { alignItems: ai };
};
export let textAlign = (type) => {
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
  return { textAlign: ta };
};
export let flexDirection = (type) => {
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
  return { flexDirection: fd };
};
export let overflow = (type) => {
  let of = "visible";
  switch (type) {
    case "h":
      of = "hidden";
      break;
    case "s":
      of = "scroll";
      break;
    default:
      break;
  }
  return { overflow: of };
};
export let textDecorationLine = (type) => {
  let tdl = "underline";
  switch (type) {
    case "ul":
      tdl = "underline line-through";
      break;
    case "lt":
      tdl = "line-through";
      break;
    case "n":
      tdl = "none";
      break;
    default:
      break;
  }
  return { textDecorationLine: tdl };
};
export let textDecorationStyle = (type) => {
  let tds = "solid";
  switch (type) {
    case "-":
      tds = "dashed";
      break;
    case ".":
      tds = "dotted";
      break;
    case "d":
      tds = "double";
      break;
    default:
      break;
  }
  return { textDecorationStyle: tds };
};
export let display = (isFlex = true) => ({ display: isFlex ? "flex" : "none" });
export let position = (isAbs = true) => ({
  position: isAbs ? "absolute" : "relative",
});
export let fontStyle = (isItalic = true) => ({
  fontStyle: isItalic ? "italic" : "normal",
});
export let shadow = (dark, alpha) => hexToRGB(dark ? white : black, alpha);
export let icon = (dark) =>
  dark ? require("./assets/adaptive-icon.png") : require("./assets/icon.png");
//  Quick styles
export let bgct = backgroundColor(tr);
export let bct = borderColor(tr);
export let jcc = justifyContent("c");
export let jcfs = justifyContent("fs");
export let jcfe = justifyContent("fe");
export let jcse = justifyContent("se");
export let jcsa = justifyContent("sa");
export let jcsb = justifyContent("sb");
export let aic = alignItems("c");
export let aifs = alignItems("fs");
export let aife = alignItems("fe");
export let ais = alignItems("s");
export let aib = alignItems("b");
export let tac = textAlign("c");
export let taa = textAlign("a");
export let tar = textAlign("r");
export let tal = textAlign("l");
export let taj = textAlign("j");
export let fw1 = fontWeight("1");
export let fw2 = fontWeight("2");
export let fw3 = fontWeight("3");
export let fw4 = fontWeight("4");
export let fw5 = fontWeight("5");
export let fw6 = fontWeight("6");
export let fw7 = fontWeight("7");
export let fw8 = fontWeight("8");
export let fw9 = fontWeight("9");
export let fwb = fontWeight("b");
export let fdr = flexDirection("r");
export let fdrr = flexDirection("rr");
export let fdc = flexDirection("c");
export let fdrc = flexDirection("rc");
export let ofh = overflow("h");
export let ofv = overflow("v");
export let ofs = overflow("s");
export let compShow = display();
export let full = squareLayout("100%");
export let fullWidth = width("100%");
export let fullHeight = height("100%");
export let center = [jcc, aic];
export let row = [compShow, fdr];
export let overlay = [position(), zIndex(1)];
export let Root = layout(dim.width, dim.height);
export let root = layout(dim.width, dim.height - mt);
export let phm4 = padding("h", mt / 4);

export let cb = (size, radius, color) => [
  border("", size),
  borderRadius("", radius),
  borderColor(color),
];
export let cbr = cb(1, 12, tr);
//  end
let ttt = RN.StyleSheet.create({
  b: {
  }
});