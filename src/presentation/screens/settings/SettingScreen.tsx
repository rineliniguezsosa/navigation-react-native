/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View,Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components';


export const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
        <Text style={{marginBottom:10}}>SettingScreen</Text>

        <PrimaryButton label="Regresar" onPress={()=> navigation.goBack()}/>
    </View>
  );
};
