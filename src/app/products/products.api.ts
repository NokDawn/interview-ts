import Api from 'common/api';
import { Sample } from 'common/types';

export interface APIProps {
  searchQuery?: string;
}

const getProducts = async (
  page: number = 1,
  limit: number = 4,
  searchQuery: string = '',
  promo: boolean = false,
  active: boolean = false
) => {
  console.log(typeof promo);
  console.log(promo);

  const query = `/products?page=${page}&limit=${limit}${
    searchQuery && `&search=${searchQuery}`
  }${promo ? '&promo=true' : ''}${active ? '&active=true' : ''}`;

  console.log(query);

  const response = await Api.get<Sample>(query);
  console.log(response);
  return response.data;
};

export { getProducts };
