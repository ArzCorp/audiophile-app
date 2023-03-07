import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={() => <Text>Home</Text>} />
      <Drawer.Screen name="Example" component={() => <Text>Example</Text>} />
    </Drawer.Navigator>
  );
}
