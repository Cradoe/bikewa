import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { globalConstants } from "../constants";

import DashboardScreen from "../screens/dashboardScreen";
import AllBikes from "../screens/allBikes";
import BikeDetailsScreen from "../screens/bikeDetailsScreen";

import { screenOptionStyle } from "./screenOptionStyle";

const Stack = createStackNavigator();

const lightHeader = {
  headerStyle: {
    backgroundColor: globalConstants.SCREEN_BG
  },
  headerTintColor: globalConstants.PRIMARY_COLOR
};
export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllBikes"
        component={AllBikes}
        options={( { route } ) => ( { title: route.params.name, ...lightHeader } )}
      />

      <Stack.Screen
        name="BikeDetails"
        component={BikeDetailsScreen}
        options={( { route } ) => ( { title: route.params.name, ...lightHeader } )}
      />
    </Stack.Navigator>
  );
};
