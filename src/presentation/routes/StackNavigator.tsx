import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen,ProductsScreen,SettingScreen,ProductScreen } from '../screens';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name="HomeScreen" component={HomeScreen} />
       <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
       <Stack.Screen name="ProductScreen" component={ProductScreen} />
       <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};
