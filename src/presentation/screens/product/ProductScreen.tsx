/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View,Text } from 'react-native';
import { useRoute,useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/interfaces';
import { globalStyles } from '../../styles/globalStyles';

export const ProductScreen = () => {
    const params = useRoute<RouteProp<RootStackParamList,'ProductScreen'>>().params;
    const navigation = useNavigation();
    console.log(params);

    useEffect(() => {
        navigation.setOptions({
            title:params.name,
        });
    }, []);

  return (
    <View style={globalStyles.container}>
        <Text>ProductScreen</Text>

        <Text>{params.id} - {params.name}</Text>
    </View>
  );
};
