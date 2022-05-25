import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import MapView, {
  Callout,
  Marker,
  UrlTile,
  MAP_TYPES,
} from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import { DataTable } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
  SlideInRight,
  SlideOutRight,
  FadeInRight,
  FadeOutRight,
} from "react-native-reanimated";
import { isNull, isEqual, isEmpty, chunk } from "lodash";
import {
  header,
  datas,
  baseLocation,
  mapTypes,
  defaultMapType,
  BaseActiveSearchLocation,
  white,
  lightblue,
  thuc,
  black,
  TextInputPlaceholder,
  Cancel,
  Edit,
  Save,
  osmBaseUrl,
  Submit,
} from "./Constants";
import { styles } from "./style";
let AnimatedEntypo = Animated.createAnimatedComponent(Entypo);
let AnimatedTH = Animated.createAnimatedComponent(TouchableHighlight);
let CheckBox = ({
  value = false,
  toggle,
  activeBGInArrayRGB = ["255", "255", "255"],
  checkIconColor = black,
  borderColor = black,
  size = 20,
  disabled = false,
}) => {
  let bgOpacity = useSharedValue(value ? 1 : 0);
  let bgStyle = useAnimatedStyle(() => ({
    backgroundColor: `rgba(${activeBGInArrayRGB.join(",")}, ${
      bgOpacity.value
    })`,
  }));
  let onPress = () => {
    if (toggle) toggle();
    bgOpacity.value = value ? 0 : 1;
  };
  return (
    <AnimatedTH
      underlayColor={thuc}
      onPress={onPress}
      style={[
        {
          width: size,
          height: size,
          borderWidth: 1,
          borderRadius: size / 5,
          borderColor,
        },
        bgStyle,
        styles.jcc,
        styles.aic,
      ]}
      disabled={disabled}
    >
      <>
        {value && (
          <AnimatedEntypo
            name="check"
            size={size * 0.75}
            color={checkIconColor}
            entering={FadeIn}
            exiting={FadeOut}
          />
        )}
      </>
    </AnimatedTH>
  );
};

let SearchResultRow = ({
  address,
  display_name = "",
  boundingbox = [],
  icon = "",
  lat = 0,
  lon = 0,
  onPress,
}) => {
  let latitudeDelta = Math.abs(+boundingbox[0] - +boundingbox[1]);
  let longitudeDelta = Math.abs(+boundingbox[2] - +boundingbox[3]);
  return (
    <AnimatedTH
      underlayColor={thuc}
      onPress={() =>
        onPress({
          coordinate: {
            latitude: +lat,
            longitude: +lon,
            latitudeDelta,
            longitudeDelta,
          },
          title: display_name,
          description: address?.country,
        })
      }
      style={[styles.br12, styles.srrrb]}
    >
      <View
        style={[styles.row, styles.aic, styles.br12, styles.f1, styles.srrowv]}
      >
        {isEmpty(icon) ? (
          <View style={styles.srri} />
        ) : (
          <Image source={{ uri: icon }} style={styles.srri} />
        )}
        <View style={[styles.aife, styles.jcse, styles.srrtv]}>
          <Text style={styles.srrtt}>{display_name}</Text>
          <Text style={styles.srrst}>{address?.country}</Text>
        </View>
      </View>
    </AnimatedTH>
  );
};
export default function App() {
  let [Header, setHeader] = useState(header);
  let [Data, setData] = useState(datas);
  let [ActiveImamzadehIndex, setActiveImamzadehIndex] = useState(null);
  let [ActiveCoordinate, setActiveCoordinate] = useState(baseLocation);
  let [ActiveSearchLocation, setActiveSearchLocation] = useState(
    BaseActiveSearchLocation,
  );
  let [search, setSearch] = useState("");
  let [mapType, setMapType] = useState(defaultMapType);
  let [SearchResults, setSearchResults] = useState([]);
  let [isCanMoveMarker, setIsCanMoveMarker] = useState(false);
  let [showMapTypeView, setShowMapTypeView] = useState(false);

  let sortHeader = (i = 0) => {
    let nH = Header.map((h, j) => {
      let ch = h;
      if (i === j) ch.isActive = !ch.isActive;
      return ch;
    });
    setHeader(nH);
  };
  let onBtnPress = () => {};
  let reset = () => {
    setIsCanMoveMarker(false);
    setActiveImamzadehIndex(null);
  };
  let btns = [
    {
      text: isCanMoveMarker ? Cancel : Edit,
      onPress: () => {
        setIsCanMoveMarker((i) => !i);
      },
    },
    {
      text: Save,
      onPress: () => {
        setData((data) =>
          data.map((d, i) =>
            isEqual(i, ActiveImamzadehIndex)
              ? { ...d, location: ActiveCoordinate, isLocation: true }
              : d,
          ),
        );
        reset();
      },
    },
    {
      text: Submit,
      onPress: () => {
        setData((data) =>
          data.map((d, i) =>
            isEqual(i, ActiveImamzadehIndex) ? { ...d, isVerified: true } : d,
          ),
        );
        reset();
      },
    },
  ];
  let onSearchUpdate = async (text = "") => {
    setSearch(text);
    try {
      let searches = await (
        await fetch(decodeURIComponent(`${osmBaseUrl}q=${text}`))
      ).json();
      setSearchResults(searches);
    } catch (e) {
      console.log(`Can't find any place`);
      setSearchResults([]);
    }
  };
  let toggleMapType = () => setShowMapTypeView((m) => !m);
  /**
   * is not null ActiveImamzadehIndex
   */
  let inaii = !isNull(ActiveImamzadehIndex);
  return (
    <View style={[styles.fw, styles.fh, styles.mt, styles.aic]}>
      <MapView
        region={ActiveSearchLocation.coordinate}
        style={[styles.fw, styles.fh, styles.aic]}
        mapType={mapType}
        // onRegionChangeComplete={({ latitude, longitude }) => {
        //   if (isCanMoveMarker) {
        //     setActiveCoordinate((a) => ({
        //       ...a,
        //       latitude,
        //       longitude,
        //     }));
        //   }
        // }}
      >
        {inaii && (
          <Marker
            draggable={isCanMoveMarker}
            onDragEnd={({ nativeEvent: { coordinate } }) => {
              /**
               * new active search location
               */
              let nasl = {
                ...ActiveSearchLocation.coordinate,
                ...coordinate,
              };
              console.log(nasl);
              setActiveCoordinate(nasl);
              setActiveSearchLocation((a) => ({ ...a, coordinate: nasl }));
            }}
            {...ActiveSearchLocation}
          />
        )}
        {Data.filter(({ isVerified }) => isVerified).map(
          ({ name, country, state, location }, i) => (
            <Marker
              key={i}
              coordinate={location}
              title={name}
              description={`${state} ${country}`}
            />
          ),
        )}
        {/* <UrlTile
    urlTemplate="https://{s}.tile.openstreetmap.org/tiles/osmde/{z}/{x}/{y}.png"
    maximumZ={19}
  /> */}
      </MapView>
      <Animated.View
        style={[
          styles.mtbv,
          styles.overlay,
          styles.mtbvdft,
          styles.wbg,
          styles.br12,
        ]}
        entering={SlideInRight}
        exiting={SlideOutRight}
      >
        <TouchableHighlight
          underlayColor={thuc}
          onPress={toggleMapType}
          style={[styles.f1, styles.jcc, styles.aic]}
        >
          <Text>{mapType}</Text>
        </TouchableHighlight>
      </Animated.View>
      <View
        style={[styles.fw, styles.troh, styles.aic, styles.overlay, styles.tt]}
      >
        <View style={[styles.fw, styles.tcv, styles.wbg]}>
          <ScrollView>
            <DataTable>
              <View style={[styles.trh, styles.row]}>
                {Header.map(({ text, isActive }, i) => (
                  <View
                    key={i}
                    style={[
                      {
                        flex: i === 0 ? 2.2 : 1,
                        borderLeftWidth: i !== Header.length - 1 ? 1 : 0,
                        borderLeftColor: white,
                      },
                      styles.row,
                      styles.jcse,
                      styles.aic,
                      styles.bbg,
                    ]}
                  >
                    <Text style={[styles.trt, styles.wc]}>{text}</Text>
                    <TouchableHighlight
                      style={[styles.shb, styles.jcc, styles.aic]}
                      onPress={() => sortHeader(i)}
                      underlayColor={thuc}
                    >
                      <Entypo
                        name={`chevron-${isActive ? "up" : "down"}`}
                        size={18}
                        // color="blue"
                        color={white}
                      />
                    </TouchableHighlight>
                  </View>
                ))}
              </View>
              {Data.map(
                ({ name, country, state, isLocation, isVerified }, i) => (
                  <TouchableHighlight
                    underlayColor={thuc}
                    onPress={() => {
                      setActiveImamzadehIndex(i);
                      if (Data[i].isLocation)
                        setActiveSearchLocation((a) => ({
                          ...a,
                          coordinate: Data[i].location,
                        }));
                      setIsCanMoveMarker(false);
                    }}
                    key={i}
                    style={[
                      styles.trh,
                      styles.row,
                      i % 2 === 0 && { backgroundColor: lightblue },
                    ]}
                  >
                    <>
                      <DataTable.Cell
                        style={[
                          {
                            flex: 2.2,
                          },
                          styles.jcc,
                          styles.br,
                          styles.bl,
                        ]}
                      >
                        {name}
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={[styles.f1, styles.jcc, styles.bl]}
                      >
                        {country}
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={[styles.f1, styles.jcc, styles.bl]}
                      >
                        {state}
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={[styles.f1, styles.jcc, styles.bl]}
                      >
                        <CheckBox value={isLocation} disabled />
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={[styles.f1, styles.jcc, styles.bl]}
                      >
                        <CheckBox value={isVerified} disabled />
                      </DataTable.Cell>
                    </>
                  </TouchableHighlight>
                ),
              )}
            </DataTable>
          </ScrollView>
        </View>
        {inaii && (
          <Animated.View
            style={[styles.wbg, styles.br12, styles.sv]}
            entering={FadeIn}
            exiting={FadeOut}
          >
            <TextInput
              style={[styles.f1, styles.sti]}
              value={search}
              onChangeText={onSearchUpdate}
              placeholder={TextInputPlaceholder}
              placeholderTextColor={black}
              returnKeyType="search"
            />
          </Animated.View>
        )}
      </View>
      {!isEmpty(search) && !isEmpty(SearchResults) && (
        <View style={[styles.fw, styles.srrv, styles.overlay, styles.wbg]}>
          <ScrollView style={[styles.srcv]}>
            {SearchResults.map((s, i) => (
              <SearchResultRow
                key={i}
                onPress={(location) => {
                  setActiveSearchLocation(location);
                  setSearch("");
                  setActiveCoordinate(location.coordinate);
                }}
                {...s}
              />
            ))}
          </ScrollView>
        </View>
      )}
      {inaii && (
        <Animated.View
          style={[
            styles.bbrv,
            styles.overlay,
            styles.jcse,
            styles.row,
            styles.aic,
          ]}
          entering={SlideInDown}
          exiting={SlideOutDown}
        >
          {btns.map(({ text, onPress }, i) => (
            <View style={[styles.wbg, styles.bbv]} key={i}>
              <TouchableHighlight
                style={[styles.aic, styles.jcc, styles.f1, styles.bb]}
                underlayColor={thuc}
                onPress={onPress}
              >
                <Text>{text}</Text>
              </TouchableHighlight>
            </View>
          ))}
        </Animated.View>
      )}
      {showMapTypeView && (
        <Animated.View
          style={[
            styles.mtrv,
            styles.overlay,
            styles.mtbvdft,
            styles.overlay,
            styles.br12,
            styles.wbg,
            styles.jcse,
            styles.aic,
          ]}
          entering={FadeInRight}
          exiting={FadeOutRight}
        >
          {chunk(mapTypes, 2).map((row, i) => (
            <Animated.View key={i} style={[styles.row, styles.mtbvirv]}>
              {row.map((k, j) => (
                <TouchableHighlight
                  underlayColor={thuc}
                  onPress={() => {
                    setMapType(k);
                    toggleMapType();
                  }}
                  key={i * 2 + j}
                  style={[styles.mtbirv, styles.br12, styles.aic, styles.jcc]}
                >
                  <Text>{k}</Text>
                </TouchableHighlight>
              ))}
            </Animated.View>
          ))}
        </Animated.View>
      )}
    </View>
  );
}
