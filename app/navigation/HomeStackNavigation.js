import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { globalConstants } from "../constants";

import DashboardScreen from "../screens/dashboardScreen";
import AllBikes from "../screens/allBikes";
import BikeDetailsScreen from "../screens/bikeDetailsScreen";
import TopupsScreen from "../screens/topUps";
import RecentRides from "../screens/recentRides";
import FundWallet from "../screens/fundWallet";

import { screenOptionStyle } from "./screenOptionStyle";

const Stack = createStackNavigator();

const lightHeader = {
  headerStyle: {
    backgroundColor: globalConstants.SCREEN_BG
  },
  headerTintColor: globalConstants.PRIMARY_COLOR
},
  darkHeader = {
    headerStyle: {
      backgroundColor: globalConstants.SECONDARY_COLOR,
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0 // remove shadow on iOS
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      color: '#fff'
    },
  }
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
      <Stack.Screen
        name="Topups"
        component={TopupsScreen}
        options={( { route } ) => ( { title: route.params.name, ...lightHeader } )}
      />
      <Stack.Screen
        name="RecentRidesScreen"
        component={RecentRides}
        options={{
          title: "Recent Rides",
          ...lightHeader
        }}
      />
      <Stack.Screen
        name="FundWallet"
        component={FundWallet}
        options={{
          title: "Fund Wallet",
          ...darkHeader
        }}
      />
    </Stack.Navigator>
  );
};
