import { View } from 'react-native';
import Layout from '../components/Layout';
import TextField from '../components/TextField';
import { StyleSheet } from 'react-native';
import { COLORS } from '../utils/constans';
import useProducts from '../hooks/useProducts';
import Product from '../components/Product';

export default function ProductsScreen({ route }) {
  const { productCategory } = route.params;
  const { products } = useProducts(productCategory);
  console.log({ productCategory });
  return (
    <Layout showNavbar>
      <View style={styles['product__title--container']}>
        <TextField size="h4" align="center" weight="bold">
          {productCategory}
        </TextField>
      </View>
      <View style={styles.products__container}>
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  'product__title--container': {
    backgroundColor: COLORS.BLACK,
    paddingVertical: 32,
  },
  products__container: {
    flex: 1,
    gap: 120,
    marginHorizontal: 24,
    marginTop: 64,
    marginBottom: 120,
  },
});
