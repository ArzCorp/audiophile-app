import { API_URL } from '@env';
import { METHODS } from './constans';

export const request = ({ body, endpoint, method = METHODS.GET }) =>
  new Promise(async (resolve, reject) => {
    try {
      const URL = `${API_URL}${endpoint}`;
      const fetchConfig = {
        method,
      };

      const response = await fetch(URL, fetchConfig);
      const { error, data, message } = await response.json();

      if (error) throw new Error(message);

      resolve(data);

      if (body) fetchConfig.body = JSON.stringify(body);
    } catch (error) {
      reject(error.message);
    }
  });
