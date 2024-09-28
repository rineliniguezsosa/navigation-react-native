import React from 'react';
import { View,Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { PrimaryButton } from '../../components';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
        <Text>HomeScreen</Text>

        <PrimaryButton label="Productos" onPress={()=> navigation.navigate('ProductsScreen' as never)}/>
    </View>
  );
};
