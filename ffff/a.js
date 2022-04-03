import { Dimensions } from "react-native";
import { Keyframe } from "react-native-reanimated";
import { dim } from "../style";
export let a = Dimensions.get("screen");
export let b = 51;
export let c = b / 1.5;
export let d = "transparent";
export let e = "#000000";
export let f = "#ffffff";
export let g = "rgba(0,0,0,0.21)";
export let h = "rgba(255,255,255,0.21)";
export let i = {
  a: {
    a: new Keyframe({
      0: {
        transform: [
          {
            translateX: -dim.width,
          },
          {
            translateY: -a.height,
          },
          {
            scale: 0,
          },
          {
            rotate: "-360deg",
          },
        ],
      },
      25: {
        transform: [
          {
            translateX: -0.75 * dim.width,
          },
          {
            translateY: -0.75 * a.height,
          },
          {
            scale: 0.25,
          },
          {
            rotate: "-270deg",
          },
        ],
      },
      50: {
        transform: [
          {
            translateX: -0.5 * dim.width,
          },
          {
            translateY: -0.5 * a.height,
          },
          {
            scale: 0.5,
          },
          {
            rotate: "-180deg",
          },
        ],
      },
      75: {
        transform: [
          {
            translateX: -0.25 * dim.width,
          },
          {
            translateY: -0.25 * a.height,
          },
          {
            scale: 0.75,
          },
          {
            rotate: "-90deg",
          },
        ],
      },
      100: {
        transform: [
          {
            translateX: 0,
          },
          {
            translateY: 0,
          },
          {
            scale: 1,
          },
          {
            rotate: "0deg",
          },
        ],
      },
    }),
    b: new Keyframe({
      100: {
        transform: [
          {
            translateX: dim.width,
          },
          {
            translateY: a.height,
          },
          {
            scale: 0,
          },
          {
            rotate: "360deg",
          },
        ],
      },
      75: {
        transform: [
          {
            translateX: 0.75 * dim.width,
          },
          {
            translateY: 0.75 * a.height,
          },
          {
            scale: 0.25,
          },
          {
            rotate: "270deg",
          },
        ],
      },
      50: {
        transform: [
          {
            translateX: 0.5 * dim.width,
          },
          {
            translateY: 0.5 * a.height,
          },
          {
            scale: 0.5,
          },
          {
            rotate: "180deg",
          },
        ],
      },
      25: {
        transform: [
          {
            translateX: 0.25 * dim.width,
          },
          {
            translateY: 0.25 * a.height,
          },
          {
            scale: 0.75,
          },
          {
            rotate: "90deg",
          },
        ],
      },
      0: {
        transform: [
          {
            translateX: 0,
          },
          {
            translateY: 0,
          },
          {
            scale: 1,
          },
          {
            rotate: "0deg",
          },
        ],
      },
    }),
  },
  b: {
    a: new Keyframe({
      from: {
        transform: [
          {
            translateX: -dim.width,
          },
          {
            translateY: -a.height,
          },
          {
            scale: 0,
          },
          {
            rotate: "-360deg",
          },
        ],
      },
      to: {
        transform: [
          {
            translateX: 0,
          },
          {
            translateY: 0,
          },
          {
            scale: 1,
          },
          {
            rotate: "0deg",
          },
        ],
      },
    }),
    b: new Keyframe({
      from: {
        transform: [
          {
            translateX: 0,
          },
          {
            translateY: 0,
          },
          {
            scale: 1,
          },
          {
            rotate: "0deg",
          },
        ],
      },
      to: {
        transform: [
          {
            translateX: dim.width,
          },
          {
            translateY: a.height,
          },
          {
            scale: 0,
          },
          {
            rotate: "360deg",
          },
        ],
      },
    }),
  },
  c: {
    a: new Keyframe({
      from: {
        transform: [
          {
            scale: 0,
          },
          {
            rotate: `-180deg`,
          },
        ],
      },
      to: {
        transform: [
          {
            scale: 1,
          },
          {
            rotate: `0deg`,
          },
        ],
      },
    }),
    b: new Keyframe({
      from: {
        transform: [
          {
            scale: 1,
          },
          {
            rotate: `0deg`,
          },
        ],
      },
      to: {
        transform: [
          {
            scale: 0,
          },
          {
            rotate: `180deg`,
          },
        ],
      },
    }),
  },
  d: {
    a: new Keyframe({
      0: {
        transform: [
          {
            translateY: a.height,
          },
          {
            rotateX: `-30deg`,
          },
        ],
      },
      10: {
        transform: [
          {
            translateY: a.height * 0.9,
          },
          {
            rotateX: `30deg`,
          },
        ],
      },
      20: {
        transform: [
          {
            translateY: a.height * 0.8,
          },
          {
            rotateX: `-30deg`,
          },
        ],
      },
      30: {
        transform: [
          {
            translateY: a.height * 0.7,
          },
          {
            rotateX: `30deg`,
          },
        ],
      },
      40: {
        transform: [
          {
            translateY: a.height * 0.6,
          },
          {
            rotateX: `-30deg`,
          },
        ],
      },
      50: {
        transform: [
          {
            translateY: a.height * 0.5,
          },
          {
            rotateX: `30deg`,
          },
        ],
      },
      60: {
        transform: [
          {
            translateY: a.height * 0.4,
          },
          {
            rotateX: `-30deg`,
          },
        ],
      },
      70: {
        transform: [
          {
            translateY: a.height * 0.3,
          },
          {
            rotateX: `30deg`,
          },
        ],
      },
      80: {
        transform: [
          {
            translateY: a.height * 0.2,
          },
          {
            rotateX: `-30deg`,
          },
        ],
      },
      90: {
        transform: [
          {
            translateY: a.height * 0.1,
          },
          {
            rotateX: `30deg`,
          },
        ],
      },
      100: {
        transform: [
          {
            translateY: 0,
          },
          {
            rotateX: `0deg`,
          },
        ],
      },
    }),
    b: new Keyframe({
      100: {
        transform: [
          {
            translateY: a.height,
          },
          {
            rotateX: `0deg`,
          },
        ],
      },
      90: {
        transform: [
          {
            translateY: a.height * 0.9,
          },
          {
            rotateX: `30deg`,
          },
        ],
      },
      80: {
        transform: [
          {
            translateY: a.height * 0.8,
          },
          {
            rotateX: `-30deg`,
          },
        ],
      },
      70: {
        transform: [
          {
            translateY: a.height * 0.7,
          },
          {
            rotateX: `30deg`,
          },
        ],
      },
      60: {
        transform: [
          {
            translateY: a.height * 0.6,
          },
          {
            rotateX: `-30deg`,
          },
        ],
      },
      50: {
        transform: [
          {
            translateY: a.height * 0.5,
          },
          {
            rotateX: `30deg`,
          },
        ],
      },
      40: {
        transform: [
          {
            translateY: a.height * 0.4,
          },
          {
            rotateX: `-30deg`,
          },
        ],
      },
      30: {
        transform: [
          {
            translateY: a.height * 0.3,
          },
          {
            rotateX: `30deg`,
          },
        ],
      },
      20: {
        transform: [
          {
            translateY: a.height * 0.2,
          },
          {
            rotateX: `-30deg`,
          },
        ],
      },
      10: {
        transform: [
          {
            translateY: a.height * 0.1,
          },
          {
            rotateX: `30deg`,
          },
        ],
      },
      0: {
        transform: [
          {
            translateY: 0,
          },
          {
            rotateX: `-30deg`,
          },
        ],
      },
    }),
  },
};
export let k = m(e, 0.18);
export let j = ({ a = 0.6, b = 12, c = d }) => ({
  borderWidth: a,
  borderRadius: b,
  borderColor: c,
});
export let l = j({ c: k });
export let o = (a = f) => ({ backgroundColor: a });
export let p = o(k);
export function m(a, c = 1) {
  const r = parseInt(a.slice(1, 3), 16);
  const g = parseInt(a.slice(3, 5), 16);
  const b = parseInt(a.slice(5, 7), 16);

  if (c) {
    return `rgba(${r}, ${g}, ${b}, ${c})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
}
