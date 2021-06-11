import Api from 'common/api';
import { Product } from 'common/types';

const getProducts = async () => {
  const response = await Api.get<Product[]>('/products');
  return response.data;
};

export { getProducts };
