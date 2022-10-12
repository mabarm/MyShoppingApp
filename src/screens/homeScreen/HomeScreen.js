import React from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import products from '../../data/products';
import {FlatList} from 'react-native';

const HomeScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => <ProductItem item={item} />}
      ListHeaderComponent={() => <></>}
      ListHeaderComponentStyle={{marginTop: 10}}
    />
  );
};

export default HomeScreen;
