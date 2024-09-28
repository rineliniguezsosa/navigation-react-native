import React from 'react';
import { Pressable,Text } from 'react-native';
import { PrimaryButtonProps } from '../../../types/interfaces';
import { globalStyles } from '../../styles/globalStyles';

export const PrimaryButton = ({label,onPress}:PrimaryButtonProps) => {
  return (
    <Pressable style={globalStyles.primaryButton} onPress={onPress}>
        <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
