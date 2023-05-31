import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native';
import TextField from './TextField';
import Button from './Button';
import zx9SpeakerImage from '../assets/images/zx9-speaker.png';
import bgRings from '../assets/images/bg-rings.png';
import { StyleSheet } from 'react-native';
import { COLORS } from '../utils/constans';

export default function Zx9SpeakerBanner() {
  return (
    <View style={styles.banner__container}>
      <Image source={bgRings} style={styles['banner__bg-rings']} />
      <View style={styles['banner__speaker-image--container']}>
        <Image
          source={zx9SpeakerImage}
          style={styles['banner__speaker-image']}
        />
      </View>
      <View style={styles['banner__content--container']}>
        <TextField
          align="center"
          size="h2"
          weight="bold">{`ZX9\nSPEAKER`}</TextField>
        <TextField
          style={styles.banner__description}
          align="center"
          weight="medium">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </TextField>
        <Button dark title="See Product"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner__container: {
    minHeight: 600,
    margin: 24,
    paddingBottom: 55,
    backgroundColor: COLORS.ORANGE,
    position: 'relative',
  },
  'banner__bg-rings': {
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  'banner__speaker-image--container': {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  'banner__content--container': {
    paddingHorizontal: 24,
  },
  'banner__speaker-image': {
    marginTop: 55,
    marginBottom: 32,
  },
  banner__description: {
    marginVertical: 24,
  },
});
