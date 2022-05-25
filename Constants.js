import { Platform } from "react-native";
import { MAP_TYPES } from "react-native-maps";
export let isAndroid = Platform.OS === "android";
export let thuc = "rgba(0,0,0,0.17)";
export let tr = "transparent";
export let center = "center";
export let white = "white";
export let black = "black";
export let lightblue = "lightblue";
export let blue = "blue";
export let osmBaseUrl =
  "https://nominatim.openstreetmap.org/?addressdetails=1&format=json&";
export let header = [
  {
    text: "نام امام زاده",
    isActive: false,
  },
  {
    text: "کشور",
    isActive: false,
  },
  {
    text: "استان",
    isActive: false,
  },
  {
    text: "مکان",
    isActive: false,
  },
  {
    text: "تایید",
    isActive: false,
  },
];
export let baseLocation = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
export let datas = [
  {
    name: "داوود بن حسن",
    country: "ایران",
    state: "تهران",
    isLocation: false,
    isVerified: false,
    location: {},
  },
  {
    name: "حسن بن رضا",
    country: "ایران",
    state: "مشهد",
    isLocation: false,
    isVerified: false,
    location: {},
  },
  {
    name: "احمدرضا",
    country: "ایران",
    state: "چهارمحال",
    isLocation: false,
    isVerified: false,
    location: {},
  },
];
export let BaseActiveSearchLocation = {
  coordinate: baseLocation,
  title: "Test",
  description: "Hi!",
};
export let defaultMapType = MAP_TYPES.STANDARD;
let mapTypes = [];
for (let mt in MAP_TYPES) mapTypes.push(MAP_TYPES[mt]);
export let Edit = "ویرایش";
export let Cancel = "لغو";
export let Save = "ذخیره";
export let Submit = "تایید";
export let TextInputPlaceholder = "جست و جوی مکان";

export { mapTypes };
