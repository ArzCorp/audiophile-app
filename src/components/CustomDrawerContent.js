import React from 'react';
import { Button } from 'react-native';
import CustomNavigationTab from './CustomNavigationTab';

export default function CustomDrawerContent({ state, navigation }) {
  const routes = state.routes || [];
  return routes.map(route => {
    console.log(state);
    return (
      <CustomNavigationTab
        key={route.name}
        title={route.name}
        imageUri={`./src/assets/assets/tab-image-${route.name.toLowerCase()}.png`}
      />
    );
  });
}
