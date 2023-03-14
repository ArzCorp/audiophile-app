import React from 'react';
import { View } from 'react-native';
import Button from '../components/Button';

export default function HomeScreen() {
  return (
    <View>
      <Button
        onClick={() => console.log('Soy una prop')}
        width={'50%'}
        center
        ghost
        title="Button center"
      />
      <Button
        onClick={() => console.log('Soy una prop')}
        width={'50%'}
        left
        dark
        title="Button left"
      />
      <Button
        onClick={() => console.log('Soy una prop')}
        width={'50%'}
        right
        title="Button right"
      />
    </View>
  );
}
