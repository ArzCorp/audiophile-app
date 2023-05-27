import { Text } from 'react-native';
import { COLORS, FONT_WEIGHT } from '../utils/constans';
import { FONT_SIZE } from '../styles/globalStyles';

export default function TextField({
  children,
  weight = 'regular',
  size = 'body',
  align = 'left',
  uppercase,
  style,
}) {
  const fontWeight = FONT_WEIGHT[weight];
  const text = uppercase ? children.toUpperCase() : children;
  return (
    <Text
      style={[
        {
          fontFamily: 'Manrope',
          fontWeight,
          textAlign: align,
          color: COLORS.WHITE,
        },
        FONT_SIZE[size],
        style,
      ]}>
      {text}
    </Text>
  );
}
