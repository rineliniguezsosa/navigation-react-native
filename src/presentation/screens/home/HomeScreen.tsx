import React from 'react';
import { View,Text,Pressable } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

export const HomeScreen = () => {
  return (
    <View style={globalStyles.container}>
        <Text>HomeScreen</Text>

        <Pressable style={globalStyles.primaryButton}>
            <Text style={globalStyles.buttonText}>Ir a productos</Text>
        </Pressable>
    </View>
  );
};
