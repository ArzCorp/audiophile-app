import React from 'react';
import { Button } from 'react-native';

export default function CustomDrawerContent({ state, navigation }) {
  const routes = state.routes || [];
  console.log({ navigation });
  return routes.map(route => {
    console.log(route);
    return (
      <Button
        title={route.name}
        onPress={() => navigation.navigate(route.name)}
      />
    );
  });
}
