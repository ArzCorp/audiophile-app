import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from './Button';
import HomeBannerImage from '../assets/home-banner.png';
import { BLACK_COLOR, WHITE_COLOR } from '../utils/constans';

export default function HomeBanner() {
  return (
    <View style={styles.banner__container}>
      <Image style={styles.banner__image} source={HomeBannerImage} />
      <Text style={[styles.banner__text, styles['banner__text--new']]}>
        NEW PRODUCT
      </Text>
      <Text style={[styles.banner__text, styles['banner__text--title']]}>
        XX99 Mark II HeadphoneS
      </Text>
      <Text style={[styles.banner__text, styles['banner__text--details']]}>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Text>
      <View style={styles['banner__button--container']}>
        <Button title="SEE PRODUCT" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner__container: {
    paddingTop: 108,
    paddingBottom: 116,
    backgroundColor: BLACK_COLOR,
  },
  banner__text: {
    color: WHITE_COLOR,
    textAlign: 'center',
  },
  ['banner__text--new']: {
    opacity: 0.5,
    marginBottom: 24,
    fontSize: 14,
  },
  ['banner__text--title']: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  ['banner__text--details']: {
    opacity: 0.75,
    fontSize: 15,
    paddingHorizontal: 24,
    marginBottom: 28,
  },
  banner__image: {
    width: '100%',
    position: 'absolute',
    top: -100,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  ['banner__button--container']: {
    paddingHorizontal: 108,
  },
});
