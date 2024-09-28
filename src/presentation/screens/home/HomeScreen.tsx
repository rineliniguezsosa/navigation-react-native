import React from 'react';
import { View,Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { PrimaryButton } from '../../components';
import { useNavigation,NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/interfaces';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={globalStyles.container}>
        <Text>HomeScreen</Text>

        <PrimaryButton label="Productos" onPress={()=> navigation.navigate('ProductsScreen')}/>

        <PrimaryButton label="Settings" onPress={()=> navigation.navigate('SettingScreen')}/>
    </View>
  );
};
