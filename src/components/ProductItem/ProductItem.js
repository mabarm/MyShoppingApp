import React from 'react';
import HomeScreenStyles from '../../screens/homeScreen/HomeScreenStyles';
import {Text, Image, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductItemStyles from './ProductItemStyles';

const ProductItem = ({item}) => {
  console.log('mamnata item', item);
  return (
    <View style={ProductItemStyles.mainContainer}>
      <Image
        source={{
          uri: item.image,
        }}
        style={ProductItemStyles.image}
      />
      <View style={ProductItemStyles.rightContainer}>
        <Text numberOfLines={2} style={ProductItemStyles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={3} style={ProductItemStyles.description}>
          Features & details - MAGSPEED WHEEL: Ultra-fast, precise, quiet
          MagSpeed electromagnetic scrolling - DARKFIELD 4000 DPI SENSOR:
          Darkfield 4000 DPI sensor for precise tracking on any surface, even
          glass (up to 4mm in thickness) - COMFORTABLE DESIGN: Tactile reference
          for hand positioning makes it easy to stay oriented and in your flow -
          FLOW CROSS-COMPUTER CONTROL: Supports flow cross-computer control
          across multiple screens. Pair up to 3 devices via Bluetooth Low Energy
          or Unifying USB receiver
        </Text>
        {/* Rating */}
        <View style={ProductItemStyles.ratingContainer}>
          {[0, 0, 0, 0, 0].map((element, index) => {
            return (
              <FontAwesome
                style={ProductItemStyles.star}
                name={index >= Math.floor(item.avgRating) ? 'star-o' : 'star'}
                size={18}
                color="orange"
                key={`${item.id} - ${index}`}
              />
            );
          })}
          <Text>{item.ratings}</Text>
        </View>
        <View style={ProductItemStyles.priceContainer}>
          <Text style={ProductItemStyles.price}>From {item.price} </Text>
          {item.oldPrice && (
            <Text style={ProductItemStyles.oldPrice}>{item.oldPrice}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
