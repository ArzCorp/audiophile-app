import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Hola mundo desde React Native</Text>
    </View>
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
