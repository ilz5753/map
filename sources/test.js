import * as React from "react";
import * as RN from "react-native";
import {
  View,
  Text,
  ROOT,
  Template,
  Button,
  TreeModalView,
  GRID,
} from "../essentials/components";
import { bgct, fullWidth, height, mt } from "../style";
export default function Test() {
  let [Modals, setModals] = React.useState({ test: false });
  let toggleModal = (type = "t") =>
    setModals((m) => {
      switch (type) {
        default:
          return { ...m, test: !m.test };
      }
    });
  let header = {
    title: "Test",
    right: [
      // {
      //   type: "",
      //   name: "plus",
      //   onPress: toggleModal,
      // },
      {
        type: "",
        name: "plus",
        onPress: toggleModal,
      },
      {
        type: "",
        name: "plus",
        onPress: toggleModal,
      },
      {
        type: "i",
        name: "ellipsis-horizontal-circle-sharp",
        onPress: toggleModal,
      },
    ],
  };
  let sheets = [
    {
      title: "One",
      show: Modals.test,
      hide: toggleModal,
      children: <TreeModalView />,
    },
  ];
  return (
    <Template title="Test" header={header} sheets={sheets}>
      <Button style={[fullWidth, height(mt)]} onPress={toggleModal}>
        <Text>Modal</Text>
      </Button>
      <GRID
        data={Array(11).fill({ t: "abc" })}
        Render={({ t }) => <Text style={[bgct]}>{t}</Text>}
        cols={5}
      />
    </Template>
  );
}
