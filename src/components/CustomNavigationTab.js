import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Image } from 'react-native';
import { Pressable } from 'react-native';

export default function CustomNavigationTab({ imageUri, title }) {
  return (
    <Pressable onPress={() => console.log('Tab Navigation')}>
      <Image source={{ uri: imageUri }} />
      <View>
        <Text>{title}</Text>
        <Pressable onPress={() => console.log('Tab Navigation')}>
          <Text>Shop</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
