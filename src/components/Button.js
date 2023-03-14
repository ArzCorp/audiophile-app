import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { BLACK_COLOR, ORANGE_COLOR, WHITE_COLOR } from '../utils/constans';

export default function Button({
  onClick = () => console.log('Default value'),
  width = '100%',
  center,
  left,
  right,
  ghost,
  dark,
  title = 'default text',
}) {
  const horizontalStyles = center
    ? 'center'
    : left
    ? 'flex-start'
    : right
    ? 'flex-end'
    : 'flex-end';

  const verticalStyles = center ? 'center' : 'flex-start';

  const bgColorStyles = ghost ? WHITE_COLOR : dark ? BLACK_COLOR : ORANGE_COLOR;

  const textStyles = ghost ? BLACK_COLOR : WHITE_COLOR;
  const borderColorStyles = ghost ? BLACK_COLOR : 'transparent';

  return (
    <View
      style={[
        styles.button__container,
        {
          justifyContent: horizontalStyles,
          alignContent: verticalStyles,
        },
      ]}>
      <Pressable
        style={[
          styles.button__bg,
          {
            width,
            backgroundColor: bgColorStyles,
            borderColor: borderColorStyles,
          },
        ]}
        onPress={onClick}>
        <Text
          style={[
            styles.button__text,
            {
              color: textStyles,
            },
          ]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button__container: {
    width: '100%',
    flexDirection: 'row',
  },
  button__bg: {
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  button__text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 13,
  },
});
