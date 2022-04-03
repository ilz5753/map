import { useNavigation, useTheme } from "@react-navigation/native";
import * as React from "react";
import * as RN from "react-native";
import { Template } from "../../../esse/template";
import {
  // Grid,
  Icon,
  Sheet,
  Text,
  View,
  Button,
  Section,
  TextInput,
  SHEET,
  ImageButton,
} from "../../../esse/components";
import {
  align_items,
  backgroundColor,
  bgct,
  black,
  border,
  borderColor,
  borderRadius,
  bw1,
  center,
  dim,
  display,
  flex_direction,
  fontSize,
  height,
  hexToRGB,
  justify_content,
  light_placeholder,
  margin,
  margin_top,
  padding,
  tbc,
  tr,
  white,
  width,
  text_align,
  color,
  full,
  uuid,
} from "../../../styles";
import { useDispatch, useSelector } from "react-redux";
import {
  apps,
  addApp,
  delApp,
  updateApp,
  updateActiveApp,
} from "../../app/appSlice";
import { NewAppTypes } from "../../../esse/staticDatas";
import APP from "../../../esse/AppModel";
import { Grid } from "../../../esse/AxiomModelComponents";
let br = [border("", 1), tbc, borderRadius("", 10)];
let RenderApp = ({ data }) => {
  let dis = useDispatch();
  let { colors } = useTheme();
  let { navigate } = useNavigation();
  let onPress = () => {
    dis(updateActiveApp(data.all()));
    navigate("appEditor");
    // console.log("all : ");
    // console.log(data.all());
  };
  return (
    <Button
      style={[
        full,
        br,
        align_items(""),
        // center,
      ]}
      onPress={onPress}
      // onPress={test}
      riprad={0}
      activeOpacity={1}
    >
      <View
        style={[
          width("80%"),
          height("80%"),
          margin("b", 5),
          br,
          // backgroundColor(white),
          borderColor(colors.border),
        ]}
      ></View>
      <Text style={[text_align("")]}>{data.getName()}</Text>
    </Button>
  );
};

function LetsGo678() {
  let dis = useDispatch();
  let { navigate } = useNavigation();
  let { colors } = useTheme();
  let Apps = useSelector(apps);
  let [App, setApp] = React.useState([
    new APP({
      id: "0",
      name: "todo",
      iconUri: "",
      type: "Productivity",
      template: "Todo list",
    }),
  ]);
  let [sheet, setSheet] = React.useState(false);
  let [ActiveAppType, setActiveAppType] = React.useState({});
  let toggleSheet = () => setSheet((s) => !s);
  let close = () => {
    toggleSheet();
    setActiveAppType({});
  };
  let createApp = () => {
    dis(addApp({ id: "1234", name: "Camera", icon: "", props: ActiveAppType }));
    navigate("appEditor");
    close();
  };
  let header = {
    title: "Apps",
    isShown: true,
    headerHeight: margin_top,
    morePadding: true,
    btns: {
      left: [],
      right: [
        {
          icon: (
            <Icon
              type="i"
              name="ellipsis-horizontal-circle-sharp"
              size={30}
              color={colors.primary}
            />
          ),
          // onPress: toggleSheet,
          detail: {
            text: "More options",
          },
        },
        {
          icon: <Icon name="plus" size={30} color={colors.primary} />,
          onPress: () => {
            toggleSheet();
            let myApp = new APP({
              id: "app1",
              name: "Camera",
              type: "Educational",
              template: "University Educational",
            });
            console.log("my App : ");
            console.log(myApp);
            console.log("====================================");
            console.log("my App : ", myApp.getName());
            console.log("====================================");
          },
          detail: {
            text: "Create New App",
          },
        },
      ],
    },
  };
  let newApp = {
    // dir: "t",
    show: sheet,
    hide: close,
    title: "New App",
    children: (
      <View>
        <Section title="Type">
          {NewAppTypes.map((appType, i) => (
            <Button
              key={i}
              style={[
                width(150),
                height(150),
                align_items(""),
                // justify_content('se'),
                backgroundColor(
                  ActiveAppType?.id === appType.id ? colors.notification : tr
                ),
              ]}
              onPress={() => setActiveAppType(appType)}
            >
              <View
                style={[
                  width(100),
                  height(100),
                  border("", 1),
                  borderColor(colors.border),
                  borderRadius("", 10),
                  margin("b", 10),
                ]}
              ></View>
              <Text>{appType.name}</Text>
            </Button>
          ))}
        </Section>
        {Object.keys(ActiveAppType).length !== 0 && (
          <Section title={`${ActiveAppType?.name} Templates`} showMore>
            {ActiveAppType?.templates.slice(0, 10).map((aatt, i) => (
              <Button
                key={i}
                style={[
                  width(250),
                  height(250),
                  align_items(""),
                  justify_content("se"),
                  backgroundColor(
                    aatt?.id === ActiveAppType?.activeTemplate.id
                      ? colors.notification
                      : tr
                  ),
                ]}
                onPress={() =>
                  setActiveAppType((a) => ({ ...a, activeTemplate: aatt }))
                }
              >
                <View
                  style={[
                    width(200),
                    height(200),
                    border("", 1),
                    borderColor(colors.border),
                    borderRadius("", 10),
                    margin("b", 10),
                  ]}
                ></View>
                <Text>{aatt?.name}</Text>
              </Button>
            ))}
          </Section>
        )}
        {/* <Section title="Type" showMore></Section>
        <Section title="Type" showMore></Section> */}
        <Button onPress={createApp} style={[width("100%"), height(margin_top)]}>
          <Text style={[fontSize(18), color(colors.primary)]}>Create</Text>
        </Button>
      </View>
    ),
  };
  return (
    <Template header={header} sheet={newApp}>
      <View style={[width("100%"), br]}>
        <Grid data={Apps} RenderItem={RenderApp} />
      </View>
    </Template>
  );
}
export default function LetsGo() {
  let dis = useDispatch();
  let { navigate } = useNavigation();
  let { colors } = useTheme();
  let Apps = useSelector(apps);
  let [Name, setName] = React.useState("todo");
  let [IconUri, setIconUri] = React.useState("");
  let [Type, setType] = React.useState("");
  let [AppTemplate, setAppTemplate] = React.useState("Todo List");
  let reset = () => {
    setName("");
    setIconUri("");
    setType("");
    setAppTemplate("");
  };
  let [sheet, setSheet] = React.useState(false);
  let toggleSheet = () => setSheet((s) => !s);
  let [Modal, setModal] = React.useState(false);
  let toggleModal = () => setModal((s) => !s);
  let close = () => {
    toggleSheet();
    reset();
    alert(<View />);
  };
  let createApp = () => {
    dis(
      addApp({
        id: uuid(),
        name: Name,
        iconUri: IconUri,
        type: Type,
        template: AppTemplate,
      })
    );
    navigate("appEditor");
    close();
  };
  let header = {
    title: "Apps",
    isShown: true,
    headerHeight: margin_top,
    morePadding: true,
    btns: {
      left: [],
      right: [
        // {
        //   icon: (
        //     <Icon
        //       type="i"
        //       name="ellipsis-horizontal-circle-sharp"
        //       size={30}
        //       color={colors.primary}
        //     />
        //   ),
        //   detail: {
        //     text: "More options",
        //   },
        // },
        {
          icon: <Icon name="plus" size={30} color={colors.primary} />,
          onPress: toggleSheet,
          detail: {
            text: "Create New App",
          },
        },
      ],
    },
  };
  let newApp = [
    {
      // dir: "t",
      show: sheet,
      hide: close,
      title: "New App",
      children: (
        <View>
          <Section isChildView title="Icon">
            <View style={[width("100%"), height(200), center]}>
              <ImageButton size={150} uri={IconUri} setUri={setIconUri} />
            </View>
          </Section>
          <Section title="Type" showMore={toggleModal} horizontal>
            {NewAppTypes.slice(0, 4).map((nat, i) => (
              <Button
                key={i}
                style={[
                  width(150),
                  height(150),
                  margin("", 10),
                  align_items(""),
                ]}
                btnStyle={[justify_content("se")]}
                onPress={() => setType(nat.name)}
                riprad={0}
                activeOpacity={1}
              >
                <View
                  key={i}
                  style={[
                    width(100),
                    height(100),
                    border("", 1),
                    borderRadius("", 10),
                    borderColor(colors.border),
                  ]}
                ></View>
                <Text>{nat.name}</Text>
              </Button>
            ))}
          </Section>
          {Type.length !== 0 && (
            <Section title={Type + " Templates"} showMore>
              <Text>No data</Text>
            </Section>
          )}
          <TextInput placeholder="name" onChangeText={setName} value={Name} />
          <Button
            onPress={createApp}
            style={[
              width("100%"),
              height(margin_top),
              margin("t", margin_top),
              backgroundColor(colors.primary),
            ]}
          >
            <Text style={[fontSize(18), color(white)]}>Create</Text>
          </Button>
        </View>
      ),
    },
    {
      show: Modal,
      hide: toggleModal,
      title: "Types",
      children: (
        <View>
          <Section title="Select your type">
            {NewAppTypes.map((nat, i) => (
              <Button
                key={i}
                style={[
                  width(300),
                  height(300),
                  margin("", 10),
                  align_items(""),
                ]}
                btnStyle={[justify_content("se")]}
                onPress={() => {
                  setType(nat.name);
                  toggleModal();
                }}
              >
                <View
                  key={i}
                  style={[
                    width(200),
                    height(200),
                    border("", 1),
                    borderRadius("", 10),
                    borderColor(colors.border),
                  ]}
                ></View>
                <Text>{nat.name}</Text>
              </Button>
            ))}
          </Section>
        </View>
      ),
    },
  ];
  return (
    <Template header={header} sheets={newApp}>
      <View style={[width("100%"), br]}>
        <Grid data={Apps} RenderItem={RenderApp} />
      </View>
    </Template>
  );
}
