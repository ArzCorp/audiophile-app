import { ScrollView } from 'react-native';
import { COLORS } from '../utils/constans';
import Header from './Header';
import Footer from './Footer';
import CustomDrawerContent from './CustomDrawerContent';

export default function Layout({ children, showNavbar }) {
  return (
    <ScrollView style={{ backgroundColor: COLORS.WHITE }}>
      <Header />
      {children}
      {showNavbar ? <CustomDrawerContent /> : null}
      <Footer />
    </ScrollView>
  );
}
