import Api from 'common/api';
import { Sample } from 'common/types';

const getProducts = async () => {
  const response = await Api.get<Sample>('/products?page=1&limit=4');
  return response.data;
};

export { getProducts };
