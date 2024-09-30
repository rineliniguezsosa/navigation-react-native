import React from 'react';
import { View,Text } from 'react-native';
import { HamburguesMenu } from '../../components';
import { IconRocektOutline } from '../../../assets';

export const Tab1Screen = () => {
  return (
    <View>
        <HamburguesMenu/>
        <Text>Tab1Screen</Text>

        <IconRocektOutline/>
    </View>
  );
};
