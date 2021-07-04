import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon,
    Text
} from "@ui-kitten/components";
import { globalConstants } from "../constants";
import { globalStyles } from "../shared/globalStyles";

import { HomeStackNavigator } from "./HomeStackNavigation";
import AboutScreen from "../screens/aboutScreen";
import ProfileScreen from "../screens/profile";

const
    { Navigator, Screen } = createBottomTabNavigator(), HomeIcon = ( props ) => {
        return ( <Icon {...props} fill={globalConstants.PRIMARY_COLOR} name="home-outline" /> )
    },
    HomeIconActive = ( props ) => {
        return ( <Icon {...props} fill={globalConstants.SECONDARY_COLOR} name="home-outline" /> )
    },
    RideIcon = ( props ) => (
        <Icon
            {...props}
            fill={globalConstants.PRIMARY_COLOR}
            name="compass-outline"
        />
    ),
    RideIconActive = ( props ) => (
        <Icon
            {...props}
            fill={globalConstants.SECONDARY_COLOR}
            name="compass-outline"
        />
    ),
    ProfileIcon = ( props ) => (
        <Icon
            {...props}
            fill={globalConstants.PRIMARY_COLOR}
            name="person-outline"
        />
    ),
    ProfileIconActive = ( props ) => (
        <Icon
            {...props}
            fill={globalConstants.SECONDARY_COLOR}
            name="person-outline"
        />
    ),
    AboutIcon = ( props ) => (
        <Icon
            {...props}
            fill={globalConstants.PRIMARY_COLOR}
            name="smiling-face-outline"
        />
    ),
    AboutIconActive = ( props ) => (
        <Icon
            {...props}
            fill={globalConstants.SECONDARY_COLOR}
            name="smiling-face-outline"
        />
    ),
    tabTitle = ( title, index, activeIndex ) => {
        return (
            <Text style={[ index === activeIndex ? globalStyles.textSecondary : globalStyles.textPrimary, globalStyles.textSmall ]}>
                {title}
            </Text>
        );
    },
    BottomTabBar = ( { navigation, state } ) => {

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
                <BottomNavigationTab title={() => tabTitle( "Rides", 1, state.index )} icon={state.index === 1 ? RideIconActive : RideIcon} />
                <BottomNavigationTab title={() => tabTitle( "Profile", 2, state.index )} icon={state.index === 2 ? ProfileIconActive : ProfileIcon} />
                <BottomNavigationTab title={() => tabTitle( "About", 3, state.index )} icon={state.index === 3 ? AboutIconActive : AboutIcon} />
            </BottomNavigation>
        );
    },
    BottomNavigator = () => (
        <Navigator tabBar={( props ) => <BottomTabBar {...props} />}>
            <Screen name="Home" component={HomeStackNavigator} />
            <Screen name="Rides" component={ProfileScreen} />
            <Screen name="Profile" component={ProfileScreen} />
            <Screen name="About" component={AboutScreen} />
        </Navigator>
    );


export default BottomNavigator;
