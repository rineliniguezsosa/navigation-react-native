/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View,Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { StackActions, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components';


export const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
        <Text style={{marginBottom:10}}>SettingScreen</Text>
        {/* return back */}
        <PrimaryButton label="Regresar" onPress={()=> navigation.goBack()}/>
        {/* return Home */}
        <PrimaryButton label="Regresar al Home" onPress={()=> navigation.dispatch(StackActions.popToTop())}/>
    </View>
  );
};
