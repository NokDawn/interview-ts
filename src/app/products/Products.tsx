import { Product } from 'common/types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header/Header';
import Input from 'components/Input/Input';

import { AppRoute } from 'routing/AppRoute.enum';
import { getProducts } from './products.api';

import { GrSearch } from 'react-icons/gr';

import './Products.scss';

export const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <div className='products'>
      <Header showButton />
      <Input name='search' placeholder='Search'>
        <GrSearch />
      </Input>
      <Link to={AppRoute.login}> Login </Link>
    </div>
  );
};
