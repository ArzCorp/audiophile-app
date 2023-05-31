import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Zx9SpeakerBanner from '../components/Zx9SpeakerBanner';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <HomeBanner />
      <CustomDrawerContent />
      <Zx9SpeakerBanner />
    </ScrollView>
  );
}
