/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';


export const HamburguesMenu = () => {
    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> {
                <Pressable>
                    <Text>Menu</Text>
                </Pressable>;
            },
        });
    },[]);
  return (
    <>
    </>
  );
};
