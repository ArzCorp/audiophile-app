import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import CustomDrawerContent from '../components/CustomDrawerContent';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <HomeBanner />
      <CustomDrawerContent />
    </ScrollView>
  );
}
