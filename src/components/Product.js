import { View } from 'react-native';
import TextField from './TextField';
import Button from './Button';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS } from '../utils/constans';

export default function Product({ name, description, main_image, is_new }) {
  return (
    <View>
      <Image source={{ uri: main_image }} />
      {is_new ? (
        <TextField
          style={styles['product__text--is_new']}
          size="overline"
          align="center">
          New product
        </TextField>
      ) : null}
      <TextField
        style={styles.product__text}
        align="center"
        size="h4"
        weight="bold">
        {name}
      </TextField>
      <TextField
        style={[styles.product__text, styles['product__text--description']]}
        align="center"
        weight="medium">
        {description}
      </TextField>
      <Button title="SEE PRODUCT" />
    </View>
  );
}

const styles = StyleSheet.create({
  'product__text--is_new': {
    color: COLORS.ORANGE,
    marginBottom: 24,
  },
  product__text: {
    color: COLORS.BLACK,
  },
  'product__text--description': {
    opacity: 0.5,
    marginVertical: 24,
  },
});
