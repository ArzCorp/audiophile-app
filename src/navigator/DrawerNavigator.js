import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import EarphonesScreen from '../screens/EarphonesScreen';
import HeadphonesScreen from '../screens/HeadphonesScreen';
import HomeScreen from '../screens/HomeScreen';
import SpeakersScreen from '../screens/SpeakersScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Headphones" component={HeadphonesScreen} />
      <Drawer.Screen name="Speakers" component={SpeakersScreen} />
      <Drawer.Screen name="Earphones" component={EarphonesScreen} />
    </Drawer.Navigator>
  );
}
