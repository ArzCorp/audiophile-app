import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { View, Pressable, Image, StyleSheet } from 'react-native';
import { BLACK_COLOR, WHITE_COLOR } from '../utils/constans';
import audiophileLogo from '../assets/audiophile-logo.png';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  const openMenu = () => {
    navigation.openDrawer();
  };

  const openShoppingCart = () => {
    console.log('Open shopping Cart');
  };

  return (
    <View style={styles.header__container}>
      <Pressable onPress={openMenu}>
        <FontAwesomeIcon style={styles.Header__icon} icon={faBars} />
      </Pressable>
      <Image style={styles.header__logo} source={audiophileLogo} />
      <Pressable onPress={openShoppingCart}>
        <FontAwesomeIcon style={styles.Header__icon} icon={faCartShopping} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 34,
    backgroundColor: BLACK_COLOR,
  },
  Header__icon: {
    color: WHITE_COLOR,
    width: 23,
    height: 23,
  },
  header__logo: {
    width: 143,
    height: 25,
  },
});
