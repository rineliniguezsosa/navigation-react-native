// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/presentation/routes/StackNavigator'; //if you want to see only the Stacknavigator
import { DrawerNavigator } from './src/presentation/routes/DrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
