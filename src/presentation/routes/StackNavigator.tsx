/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen,ProductsScreen,SettingScreen,ProductScreen } from '../screens';
import { RootStackParamList } from '../../types/interfaces';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShow:false,
    });
  },[]);

  return (
    <Stack.Navigator>
       <Stack.Screen name="HomeScreen" component={HomeScreen} />
       <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
       <Stack.Screen name="ProductScreen" component={ProductScreen} />
       <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};
