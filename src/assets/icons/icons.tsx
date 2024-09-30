import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { IoniIconProps } from '../../types/interfaces';

export const IoniIcon = ({name,coior,size}:IoniIconProps) =>{
    return (
        <Icon name={name} color={coior} size={size}/>
    );
};

