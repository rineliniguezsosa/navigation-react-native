import React from 'react';
import { View,Text } from 'react-native';
import { HamburguesMenu } from '../../components';
import { IoniIcon } from '../../../assets';

export const Tab1Screen = () => {
  return (
    <View>
        <HamburguesMenu/>
        <Text>Tab1Screen</Text>

        <IoniIcon name="rocket-outline" color="red" size={20}/>
    </View>
  );
};
