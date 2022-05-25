import { StyleSheet, Dimensions } from "react-native";
import { white, blue, lightblue, center, isAndroid } from "./Constants";
let { width, height } = Dimensions.get("window");
export let styles = StyleSheet.create({
  /**
   * full width
   */
  fw: {
    width,
  },
  /**
   * full height
   */
  fh: {
    height,
  },
  /**
   * flex
   */
  f1: {
    flex: 1,
  },
  /**
   * borderRadius
   */
  br12: {
    borderRadius: 12,
  },
  /**
   * margin top from root view
   */
  mt: {
    marginTop: 36,
  },
  /**
   * align items center
   */
  aic: {
    alignItems: center,
  },
  /**
   * align items flex-end
   */
  aife: {
    alignItems: "flex-end",
  },
  /**
   * justify content center
   */
  jcc: {
    justifyContent: center,
  },
  /**
   * justify content space-evenly
   */
  jcse: {
    justifyContent: "space-evenly",
  },
  /**
   * table root overlay height
   */
  troh: {
    height: 250,
  },
  /**
   * overlay
   */
  overlay: {
    position: "absolute",
    zIndex: 1,
  },
  /**
   * table distance from top in overlay mode
   */
  tt: {
    top: 0,
  },
  /**
   * table child view
   */
  tcv: {
    height: 200,
    paddingHorizontal: 20,
  },
  /**
   * white background
   */
  wbg: {
    backgroundColor: white,
  },
  /**
   * white color
   */
  wc: {
    color: white,
  },
  /**
   * blue background
   */
  bbg: {
    backgroundColor: blue,
  },
  /**
   * row rtl
   */
  row: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  /**
   * sort header btn
   */
  shb: {
    width: 20,
    height: 20,
    borderRadius: 7.5,
  },
  /**
   * table row height
   */
  trh: {
    height: 45,
  },
  /**
   * table row text
   */
  trt: {
    fontSize: 18,
  },
  /**
   * borderLeft
   */
  bl: {
    borderLeftColor: lightblue,
    borderLeftWidth: 1,
  },
  /**
   * borderRight
   */
  br: {
    borderRightColor: lightblue,
    borderRightWidth: 1,
  },
  /**
   * search view
   */
  sv: {
    width: "90%",
    height: 45,
    borderWidth: 1,
    marginVertical: 5,
  },
  /**
   * search text input
   */
  sti: { paddingHorizontal: 10, fontSize: 21 },
  /**
   * bottom btns root view
   */
  bbrv: {
    width: "90%",
    height: 60,
    borderRadius: 15,
    bottom: isAndroid ? 20 : 60,
  },
  /**
   * bottom btn view
   */
  bbv: {
    width: 60,
    height: 45,
    borderRadius: 8,
  },
  /**
   * bottom btn
   */
  bb: {
    borderRadius: 8,
  },
  /**
   * search result root view
   */
  srrv: {
    height: height - 250,
    bottom: 0,
  },
  /**
   * search result scroll view
   */
  srcv: {
    paddingVertical: 10,
    paddingHorizontal: "5%",
  },
  /**
   * search result row root btn
   */
  srrrb: {
    width: "100%",
    height: 80,
    backgroundColor: "rgba(0,0,0,0.05)",
    marginVertical: 6,
  },
  /**
   * search result row view
   */
  srrowv: {
    paddingHorizontal: 3,
  },
  /**
   * search result row icon
   */
  srri: {
    width: 50,
    height: 50,
    borderRadius: 12.5,
    marginHorizontal: 6,
  },
  /**
   * search result row texts view
   */
  srrtv: {
    height: 60,
  },
  /**
   * search result row texts title
   */
  srrtt: {
    fontSize: 17,
    fontWeight: "600",
  },
  /**
   * search result row texts subtitle
   */
  srrst: {
    fontSize: 15,
    fontWeight: "400",
    color: "rgba(0,0,0,0.5)",
  },
  /**
   * map type btn view distance from top
   */
  mtbvdft: {
    top: height / 3.5,
  },
  /**
   * map type btn view
   */
  mtbv: {
    width: 60,
    height: 60,
    right: 20,
  },
  /**
   * map types root view
   */
  mtrv: {
    width: 240,
    height: 300,
    right: 85,
  },
  /**
   * map types btn view in root view
   */
  mtbvirv: {
    width: 220,
    height: 80,
  },
  /**
   * map types btn in root view
   */
  mtbirv: {
    width: 100,
    height: 80,
  },
});
