import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from './Button';
import HomeBannerImage from '../assets/images/home-banner.png';
import { COLORS } from '../utils/constans';
import TextField from './TextField.js';

export default function HomeBanner() {
  return (
    <View>
      <View style={styles.banner__container}>
        <Image style={styles.banner__image} source={HomeBannerImage} />
        <TextField
          size="overline"
          align="center"
          style={styles['banner__text--new']}>
          NEW PRODUCT
        </TextField>
        <TextField
          size="h2"
          align="center"
          weight="bold"
          uppercase
          style={styles['banner__text--title']}>
          {`XX99 Mark II\nHeadphones`}
        </TextField>
        <TextField
          weight="medium"
          align="center"
          style={styles['banner__text--details']}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </TextField>
        <View style={styles['banner__button--container']}>
          <Button title="SEE PRODUCT" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner__container: {
    position: 'relative',
    zIndex: 0,
    paddingTop: 108,
    paddingBottom: 116,
    backgroundColor: COLORS.BLACK,
  },
  ['banner__text--new']: {
    opacity: 0.5,
    marginBottom: 24,
  },
  ['banner__text--title']: {
    marginBottom: 24,
  },
  ['banner__text--details']: {
    opacity: 0.75,
    paddingHorizontal: 48,
    marginBottom: 28,
  },
  banner__image: {
    width: '100%',
    position: 'absolute',
    top: -90,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  ['banner__button--container']: {
    paddingHorizontal: 108,
  },
});
