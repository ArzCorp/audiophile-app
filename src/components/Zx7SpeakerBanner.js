import { Image, View } from 'react-native';
import Button from './Button';
import zx7SpeakerBannerImage from '../assets/images/zx7-speaker-banner.png';
import { StyleSheet } from 'react-native';
import TextField from './TextField';
import { COLORS } from '../utils/constans';

export default function Zx7SpeakerBanner() {
  return (
    <View style={styles.banner__container}>
      <Image source={zx7SpeakerBannerImage} style={styles.banner__image} />
      <TextField style={styles.banner__text} size="h4" weight="bold">
        ZX7 SPEAKER
      </TextField>
      <Button ghost width={160} title="SEE PRODUCT" left />
    </View>
  );
}

const styles = StyleSheet.create({
  banner__container: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: 24,
    margin: 24,
    paddingBottom: 101,
  },
  banner__image: {
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 8,
  },
  banner__text: {
    color: COLORS.BLACK,
    marginTop: 101,
    marginBottom: 32,
  },
});
