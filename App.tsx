// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <Text>App</Text>
    </NavigationContainer>
  );
};
