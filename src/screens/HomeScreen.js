import React from 'react';
import HomeBanner from '../components/HomeBanner';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Zx9SpeakerBanner from '../components/Zx9SpeakerBanner';
import Zx7SpeakerBanner from '../components/Zx7SpeakerBanner';
import Yx1EarphonesBanner from '../components/Yx1EarphonesBanner';
import Layout from '../components/Layout';

export default function HomeScreen() {
  return (
    <Layout>
      <HomeBanner />
      <CustomDrawerContent />
      <Zx9SpeakerBanner />
      <Zx7SpeakerBanner />
      <Yx1EarphonesBanner />
    </Layout>
  );
}
