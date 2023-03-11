import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CustomNavigationTab from './CustomNavigationTab';
import { IMAGE_TABS } from '../utils/constans';

export default function CustomDrawerContent({ state }) {
  const allRoutes = state.routes || [];
  const routes = allRoutes.filter(route => route.name !== 'Home');

  return (
    <ScrollView style={styles['custom-drawer__container']}>
      {routes.map(route => (
        <CustomNavigationTab
          imageURL={IMAGE_TABS.find(image => image.tab === route.name).image}
          key={route.name}
          title={route.name}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  'custom-drawer__container': {
    height: '100%',
    marginBottom: 32,
    paddingHorizontal: 24,
  },
});
