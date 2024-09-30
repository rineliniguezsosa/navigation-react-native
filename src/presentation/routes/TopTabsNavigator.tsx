/* eslint-disable react/react-in-jsx-scope */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AboutScreen, ProfileScreen } from '../screens';
import { HamburguesMenu } from '../components';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
    <HamburguesMenu/>
    <Tab.Navigator>
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tab.Screen name="AboutScreen" component={AboutScreen} />
    </Tab.Navigator>
    </>
  );
};
