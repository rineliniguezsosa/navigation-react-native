/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createDrawerNavigator,DrawerContentComponentProps,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens';
import { globalColors } from '../styles/colors';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props)=> <CustomDrawer {...props}/>}
      screenOptions={{
        headerShown:false,
        drawerType:'slide',
        drawerActiveBackgroundColor:globalColors.primary,
        drawerActiveTintColor:globalColors.primary,
        drawerItemStyle:{
            borderRadius:100,
            paddingHorizontal:20,
        },
      }}
    >
      <Drawer.Screen name="StackNavigator " component={StackNavigator} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawer = (props:DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View
                style={{
                    height:200,
                    backgroundColor:globalColors.primary,
                    margin:30,
                    borderRadius:50,
                }}
            />

            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    );
};
