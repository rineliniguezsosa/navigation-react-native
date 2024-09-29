/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View,Text,Pressable } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { PrimaryButton } from '../../components';
import { useNavigation,NavigationProp, DrawerActions } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/interfaces';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(()=>{
    navigation.setOptions({
      headerLeft:()=>{
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>;
      },
    });
  },[]);

  return (
    <View style={globalStyles.container}>
        <Text>HomeScreen</Text>

        <PrimaryButton label="Productos" onPress={()=> navigation.navigate('ProductsScreen')}/>

        <PrimaryButton label="Settings" onPress={()=> navigation.navigate('SettingScreen')}/>
    </View>
  );
};
