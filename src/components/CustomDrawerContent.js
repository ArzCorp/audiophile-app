import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CustomNavigationTab from './CustomNavigationTab';
import { CATEGORY_IMAGES, COLORS, IMAGE_TABS } from '../utils/constans';
import { useCategories } from '../hooks/useCategories';

export default function CustomDrawerContent() {
  const { categories } = useCategories();

  return (
    <ScrollView style={styles['custom-drawer__container']}>
      {categories.map(category => (
        <CustomNavigationTab
          imageURL={CATEGORY_IMAGES[category.name]}
          key={category.name}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  'custom-drawer__container': {
    backgroundColor: COLORS.WHITE,
    height: '100%',
    marginBottom: 32,
    paddingHorizontal: 24,
  },
});
