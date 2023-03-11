import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function CustomNavigationTab({ imageURL, title = '' }) {
  const navigation = useNavigation();
  const navigateToScreen = () => navigation.navigate(title);

  return (
    <View style={styles.tab__container}>
      <Image style={styles.tab__image} source={imageURL} />
      <View style={styles['tab__container--gray']}>
        <Text style={styles.tab__title}>{title}</Text>
        <Pressable onPress={navigateToScreen}>
          <Text style={styles.tab__button}>Shop</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tab__container: {
    marginBottom: 16,
  },
  tab__image: {},
  'tab__container--gray': {
    backgroundColor: '#F1F1F1',
    padding: 22,
    paddingTop: 88,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab__title: {
    fontSize: 15,
    marginBottom: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
  tab__button: {
    fontSize: 13,
    opacity: 0.4,
    color: '#000000',
    fontWeight: 'bold',
  },
});
