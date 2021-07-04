import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Text
} from "@ui-kitten/components";
import { HomeStackNavigator } from "../../navigation/HomeStackNavigation";
import { globalConstants } from "../../constants";
import { globalStyles } from "../../shared/globalStyles";
import AboutScreen from "../aboutScreen";
import ProfileScreen from "../profile";

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = ( props ) => {
  return ( <Icon {...props} fill={globalConstants.PRIMARY_COLOR} name="home-outline" /> )
};
const HomeIconActive = ( props ) => {
  return ( <Icon {...props} fill={globalConstants.SECONDARY_COLOR} name="home-outline" /> )
};

const ProfileIcon = ( props ) => (
  <Icon
    {...props}
    fill={globalConstants.PRIMARY_COLOR}
    name="radio-button-on-outline"
  />
);

const ProfileIconActive = ( props ) => (
  <Icon
    {...props}
    fill={globalConstants.SECONDARY_COLOR}
    name="radio-button-on-outline"
  />
);
const AboutIcon = ( props ) => (
  <Icon
    {...props}
    fill={globalConstants.PRIMARY_COLOR}
    name="smiling-face-outline"
  />
);
const AboutIconActive = ( props ) => (
  <Icon
    {...props}
    fill={globalConstants.SECONDARY_COLOR}
    name="smiling-face-outline"
  />
);
const tabTitle = ( title, index, activeIndex ) => {
  return (
    <Text style={[ index === activeIndex ? globalStyles.textSecondary : globalStyles.textPrimary, globalStyles.textSmall ]}>
      {title}
    </Text>
  );
};
const BottomTabBar = ( { navigation, state } ) => {

  const handleTabClick = ( index ) => {
    navigation.navigate( state.routeNames[ index ] );
  }
  return (
    <BottomNavigation
      indicatorStyle={{
        backgroundColor: globalConstants.SECONDARY_COLOR,
        color: globalConstants.PRIMARY_COLOR,
        height: 2
      }}
      selectedIndex={state.index}
      onSelect={handleTabClick}
    >
      <BottomNavigationTab title={() => tabTitle( "Home", 0, state.index )} icon={state.index === 0 ? HomeIconActive : HomeIcon} />
      <BottomNavigationTab title={() => tabTitle( "Profile", 1, state.index )} icon={state.index === 1 ? ProfileIconActive : ProfileIcon} />
      <BottomNavigationTab title={() => tabTitle( "About", 2, state.index )} icon={state.index === 2 ? AboutIconActive : AboutIcon} />
    </BottomNavigation>
  );
}
const Home = () => (
  <Navigator tabBar={( props ) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={HomeStackNavigator} />
    <Screen name="Profile" component={ProfileScreen} />
    <Screen name="About" component={AboutScreen} />
  </Navigator>
);

export default Home;
