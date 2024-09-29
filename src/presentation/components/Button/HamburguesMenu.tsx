/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';


export const HamburguesMenu = () => {
    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> {
                <Pressable onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}>
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
