import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DrawerNavigator from './navigator/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#7e22ce',
  },
});
