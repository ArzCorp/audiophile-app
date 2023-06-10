import { ScrollView } from 'react-native';
import { COLORS } from '../utils/constans';
import Header from './Header';
import Footer from './Footer';
import CustomDrawerContent from './CustomDrawerContent';
import { useRef } from 'react';

export default function Layout({ children, showNavbar }) {
  const scrollViewComponent = useRef();

  const scrollToTop = () => {
    scrollViewComponent.current.scrollTo({ y: 0 });
  };

  return (
    <ScrollView
      style={{ backgroundColor: COLORS.WHITE }}
      ref={scrollViewComponent}>
      <Header />
      {children}
      {showNavbar ? <CustomDrawerContent /> : null}
      <Footer handleNavbarItemClick={scrollToTop} />
    </ScrollView>
  );
}
