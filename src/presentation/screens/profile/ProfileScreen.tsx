/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View,Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components';

export const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={{flex:1,paddingHorizontal:20,marginTop:top}}>
        <Text>ProfileScreen</Text>

        <PrimaryButton label="Abrir menú" onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}/>
    </View>
  );
};
