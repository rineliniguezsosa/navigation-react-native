/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View,Text,FlatList } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { PrimaryButton } from '../../components';
import { useNavigation,NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/interfaces';

const Products = [
  {
    id:1,name:'Product 1',
  },
  {
    id:2,name:'Product 2',
  },
  {
    id:3,name:'Product 3',
  },
  {
    id:4,name:'Product 4',
  },
  {
    id:5,name:'Product 5',
  },
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={globalStyles.container}>
        <Text style={{marginBottom:10,fontSize:30}}>Products</Text>

        <FlatList
          data={Products}
          renderItem={({item})=>(
            <PrimaryButton label={item.name} onPress={()=> navigation.navigate('ProductScreen',{id:item.id,name:item.name})} />
          )}
        />

        <Text style={{marginBottom:10,fontSize:30}}>Settings</Text>

        <PrimaryButton label="Setting" onPress={()=> navigation.navigate('SettingScreen')}/>
    </View>
  );
};
