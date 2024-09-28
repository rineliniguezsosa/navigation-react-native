import React from 'react';
import { View,Text } from 'react-native';
import { useRoute,RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/interfaces';
import { globalStyles } from '../../styles/globalStyles';

export const ProductScreen = () => {
    const params = useRoute<RouteProp<RootStackParamList,'ProductScreen'>>().params;
    console.log(params);
  return (
    <View style={globalStyles.container}>
        <Text>ProductScreen</Text>

        <Text>{params.id} - {params.name}</Text>
    </View>
  );
};
