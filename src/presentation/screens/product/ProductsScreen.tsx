/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View,Text,FlatList } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { PrimaryButton } from '../../components';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
        <Text style={{marginBottom:10,fontSize:30}}>Products</Text>

        <FlatList
          data={Products}
          renderItem={({item})=>(
            <PrimaryButton label={item.name} onPress={()=> navigation.navigate('ProductScreen' as never)} />
          )}
        />

        <Text style={{marginBottom:10,fontSize:30}}>Settings</Text>

        <PrimaryButton label="Setting" onPress={()=> navigation.navigate('SettingScreen' as never)}/>
    </View>
  );
};
