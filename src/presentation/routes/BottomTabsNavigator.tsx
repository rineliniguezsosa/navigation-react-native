/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen,Tab3Screen } from '../screens';
import { globalColors } from '../styles/colors';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor:globalColors.background,
      }}
      screenOptions={{
        tabBarLabelStyle:{
          marginBottom:5,
        },
        headerStyle:{
          elevation:0,
          borderColor:'transparent',
        },
        tabBarStyle:{
          borderTopWidth:0,
          elevation:0,
        },
      }}
    >
      <Tab.Screen name="Tab1Screen" options={{title:'Tab1',tabBarIcon:({color})=> <Text style={{color}}>Tab1</Text>}} component={Tab1Screen} />
      <Tab.Screen name="TopTabsNavigator" options={{title:'Tab2',tabBarIcon:({color})=> <Text style={{color}}>Tab1</Text>}} component={TopTabsNavigator} />
      <Tab.Screen name="Tab3Screen" options={{title:'Tab2',tabBarIcon:({color})=> <Text style={{color}}>Tab1</Text>}} component={Tab3Screen} />
    </Tab.Navigator>
  );
};
