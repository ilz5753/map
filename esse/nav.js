import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
let S = createStackNavigator();
export let Stack = ({ navigatorOptions, data }) => {
  return (
    <S.Navigator {...navigatorOptions}>
      {data.map((_d, i) => (
        <S.Screen key={i} {..._d} />
      ))}
    </S.Navigator>
  );
};
