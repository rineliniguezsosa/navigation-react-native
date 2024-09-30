/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { IoniIcon } from '../../../assets';


export const HamburguesMenu = () => {
    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> (
                <Pressable style={{marginLeft:5}} onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <IoniIcon size={50} name="menu-outline" />
                </Pressable>
            ),
        });
    },[]);
  return (<></>);
};
