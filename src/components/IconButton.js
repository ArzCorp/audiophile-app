import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { ORANGE_COLOR } from '../utils/constans';

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
    color: ORANGE_COLOR,
    width: 10,
    height: 10,
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 13,
  },
});
