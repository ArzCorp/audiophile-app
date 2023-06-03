import { Image } from 'react-native';
import { View } from 'react-native';
import Button from './Button';
import TextField from './TextField';
import yx1EarphonesBanner from '../assets/images/yx1-earphones-banner.png';
import { StyleSheet } from 'react-native';
import { COLORS } from '../utils/constans';

export default function Yx1EarphonesBanner() {
  return (
    <View style={styles.banner__container}>
      <Image source={yx1EarphonesBanner} style={styles.banner__image} />
      <View style={styles['banner__text-container']}>
        <TextField size="h4" weight="bold" style={styles.banner__text}>
          YX1 EARPHONES
        </TextField>
        <Button ghost title="SEE PRODUCT" left width={160} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner__container: {
    margin: 24,
  },
  banner__image: {
    width: '100%',
    minHeight: 200,
  },
  'banner__text-container': {
    backgroundColor: COLORS.GRAY,
    padding: 24,
    marginTop: 24,
  },
  banner__text: {
    marginBottom: 32,
    color: COLORS.BLACK,
  },
});
