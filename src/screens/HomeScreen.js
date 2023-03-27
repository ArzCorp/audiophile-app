import React from 'react';
import { View } from 'react-native';
import IconButton from '../components/IconButton';
import { API_URL } from '@env';
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';

export default function HomeScreen() {
  console.log(API_URL);
  return (
    <View>
      <Header />
      <HomeBanner />
    </View>
  );
}
