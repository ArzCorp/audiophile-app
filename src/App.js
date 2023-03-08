import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './navigator/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
