import React from 'react';
import { View } from 'react-native';
import IconButton from '../components/IconButton';
import { API_URL } from '@env';

export default function HomeScreen() {
  console.log(API_URL);
  return (
    <View>
      <IconButton title="SHOP" />
    </View>
  );
}
