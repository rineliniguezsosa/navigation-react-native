import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen,ProductsScreen } from '../screens';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name="HomeScreen" component={HomeScreen} />
       <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
    </Stack.Navigator>
  );
};
