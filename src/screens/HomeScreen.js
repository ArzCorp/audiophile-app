import React from 'react';
import { ScrollView } from 'react-native';
import { COLORS } from '../utils/constans';
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Zx9SpeakerBanner from '../components/Zx9SpeakerBanner';
import Zx7SpeakerBanner from '../components/Zx7SpeakerBanner';
import Yx1EarphonesBanner from '../components/Yx1EarphonesBanner';

export default function HomeScreen() {
  return (
    <ScrollView style={{ backgroundColor: COLORS.WHITE }}>
      <Header />
      <HomeBanner />
      <CustomDrawerContent />
      <Zx9SpeakerBanner />
      <Zx7SpeakerBanner />
      <Yx1EarphonesBanner />
    </ScrollView>
  );
}
