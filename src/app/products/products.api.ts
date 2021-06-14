import Api from 'common/api';
import { API } from 'common/types';

export interface APIProps {
  page?: number;
  limit?: number;
  searchQuery?: string;
  promo?: boolean;
  active?: boolean;
}

const getProducts = async (
  page = 1,
  limit = 4,
  searchQuery = '',
  promo = false,
  active = false
) => {
  const query = `/products?page=${page}&limit=${limit}${
    searchQuery && `&search=${searchQuery}`
  }${promo ? '&promo=true' : ''}${active ? '&active=true' : ''}`;

  const response = await Api.get<API>(query);
  return response.data;
};

export { getProducts };
