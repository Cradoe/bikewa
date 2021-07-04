import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    Drawer, DrawerItem,
    IndexPath
} from "@ui-kitten/components";
import AboutScreen from "../screens/aboutScreen";
import BottomNavigator from "./BottomNavigator";
import * as Linking from 'expo-linking';


const { Navigator, Screen } = createDrawerNavigator();


const DrawerContent = ( { navigation, state } ) => (
    <Drawer
        selectedIndex={new IndexPath( state.index )}
        onSelect={index => navigation.navigate( state.routeNames[ index.row ] )}>
        <DrawerItem title='Home' />
        <DrawerItem title='About' />
        <DrawerItem
            title="Reviews"
            onPress={() => Linking.openURL( 'https://ismailobadimu.com' )}
        />
        <DrawerItem
            title="Help"
            onPress={() => Linking.openURL( 'https://ismailobadimu.com' )}
        />
        <DrawerItem
            title="Website"
            onPress={() => Linking.openURL( 'https://ismailobadimu.com' )}
        />
    </Drawer>
);

export const DrawerNavigatorMenu = () => (
    <Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Screen name='Home' component={BottomNavigator} />
        <Screen name='About' component={AboutScreen} />
    </Navigator>
);

export default DrawerNavigatorMenu;
