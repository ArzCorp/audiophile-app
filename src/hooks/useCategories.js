import { useEffect, useState } from 'react';
import { request } from '../utils/request';
import { EMPTY_STRING, ENDPOINTS, ERRORS } from '../utils/constans';

export const useCategories = () => {
  const [categories, setCaregories] = useState([]);
  const [error, setError] = useState(EMPTY_STRING);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    setLoading(true);
    setError(EMPTY_STRING);

    try {
      const categories = await request({ endpoint: ENDPOINTS.CATEGORIES });
      setCaregories(categories);
    } catch (error) {
      console.error(error);
      setError(ERRORS.GENERAL);
    }

    setLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories, error, loading };
};
