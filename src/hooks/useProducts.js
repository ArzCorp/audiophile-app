import { useEffect, useState } from 'react';
import { EMPTY_STRING } from '../utils/constans';
import { request } from '../utils/request';

export default function useProducts(productCategory) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(EMPTY_STRING);

  const getProducts = async productCategory => {
    setLoading(true);
    try {
      const response = await request({
        endpoint: `/products/${productCategory}`,
      });
      setProducts(response);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts(productCategory);
  }, [productCategory]);

  return { products, error, loading };
}
