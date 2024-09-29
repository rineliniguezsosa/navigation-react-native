/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1Screen" component={Tab1Screen} />
    </Tab.Navigator>
  );
};
