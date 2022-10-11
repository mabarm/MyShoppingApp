import React from 'react';
import {Text, Image, View} from 'react-native';
import HomeScreenStyles from './HomeScreenStyles';

const HomeScreen = () => {
  return (
    <View style={HomeScreenStyles.mainContainer}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jpg',
        }}
        style={HomeScreenStyles.image}
      />
      <View style={HomeScreenStyles.rightContainer}>
        <Text numberOfLines={2} style={HomeScreenStyles.title}>
          Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
        </Text>
        <Text numberOfLines={3} style={HomeScreenStyles.description}>
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
        <Text style={HomeScreenStyles.price}>from $13 </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
