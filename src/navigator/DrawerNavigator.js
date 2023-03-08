import { createDrawerNavigator } from '@react-navigation/drawer';
import CheckoutScreen from '../screens/CheckoutScreen';
import EarphonesScreen from '../screens/EarphonesScreen';
import HeadphonesScreen from '../screens/HeadphonesScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import SpeakersScreen from '../screens/SpeakersScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Headphones" component={HeadphonesScreen} />
      <Drawer.Screen name="Speakers" component={SpeakersScreen} />
      <Drawer.Screen name="Earphones" component={EarphonesScreen} />
      <Drawer.Screen name="Product" component={ProductScreen} />
      <Drawer.Screen name="Checkout" component={CheckoutScreen} />
    </Drawer.Navigator>
  );
}
