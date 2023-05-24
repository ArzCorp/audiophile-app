import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { COLORS } from '../utils/constans';

export default function IconButton({ onClick = () => {}, title = 'Default' }) {
  return (
    <Pressable style={styles.button__container} onPress={onClick}>
      <Text>{title}</Text>
      <FontAwesomeIcon style={styles.button__icon} icon={faAngleRight} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button__container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button__icon: {
    color: COLORS.ORANGE,
    width: 10,
    height: 10,
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 13,
  },
});
