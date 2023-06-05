import { Image, Pressable, StyleSheet } from 'react-native';
import { View } from 'react-native';
import TextField from './TextField';
import audiophileLogoImage from '../assets/images/audiophile-logo.png';
import { COLORS, SCREENS, SOCIAL_MEDIA_ICONS } from '../utils/constans';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function Footer() {
  const { navigate } = useNavigation();

  const navigateTo = page => {
    navigate(page);
  };

  return (
    <View style={styles.footer__container}>
      <View style={styles.footer__line}></View>
      <View style={styles.footer__logo_container}>
        <Image source={audiophileLogoImage} style={styles.footer__image} />
      </View>
      <View style={styles.footer__navbar}>
        {SCREENS.map(screen => (
          <Pressable
            key={screen}
            style={styles['footer__navbar--item']}
            onPress={() => navigateTo(screen)}>
            <TextField
              size="subtitle"
              weight="bold"
              align="center"
              style={styles['footer__navbar--text']}>
              {screen}
            </TextField>
          </Pressable>
        ))}
      </View>
      <TextField
        style={styles['footer__text--description']}
        weight="medium"
        align="center">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </TextField>
      <TextField style={styles.footer__text} weight="medium" align="center">
        Copyright 2021. All Rights Reserved
      </TextField>
      <View style={styles.footer__social_media}>
        {SOCIAL_MEDIA_ICONS.map(socialMediaIcon => (
          <Pressable key={socialMediaIcon.name}>
            <FontAwesomeIcon
              icon={socialMediaIcon.icon}
              color="white"
              size={24}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer__container: {
    position: 'relative',
    backgroundColor: COLORS.BLACK,
    paddingTop: 52,
    paddingBottom: 38,
    paddingHorizontal: 24,
  },
  footer__line: {
    backgroundColor: COLORS.ORANGE,
    width: 100,
    height: 4,
    position: 'absolute',
    top: 0,
    left: '43%',
  },
  footer__logo_container: {
    alignItems: 'center',
  },
  footer__image: {
    width: 143,
    height: 25,
  },
  footer__navbar: {
    paddingTop: 48,
  },
  'footer__navbar--item': {
    marginBottom: 16,
  },
  'footer__navbar--text': {
    textTransform: 'uppercase',
  },
  'footer__text--description': {
    opacity: 0.5,
    marginVertical: 48,
  },
  footer__text: {
    opacity: 0.5,
    paddingBottom: 48,
  },
  footer__social_media: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
});
