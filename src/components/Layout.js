import { ScrollView } from 'react-native';
import { COLORS } from '../utils/constans';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <ScrollView style={{ backgroundColor: COLORS.WHITE }}>
      <Header />
      {children}
      <Footer />
    </ScrollView>
  );
}
