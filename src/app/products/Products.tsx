import { Sample } from 'common/types';
import React, { Fragment, useEffect, useState } from 'react';

import Header from 'components/Header/Header';
import Input from 'components/Input/Input';
import ProductGrid from './components/ProductsGrid/ProductsGrid';

import ReactPaginate from 'react-paginate';
import { useMediaQuery } from 'react-responsive';

import { AppRoute } from 'routing/AppRoute.enum';
import { getProducts } from './products.api';

import { GrSearch } from 'react-icons/gr';

import './Products.scss';

export const Products = () => {
  const [products, setProducts] = useState<Sample | null>(null);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const isTablet = useMediaQuery({ minWidth: '768px' });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const products = await getProducts();
      const { totalPages } = products.meta;
      setProducts(products);
      setLoading(false);
      setTotalPages(totalPages);
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className='products'>
      <div className='wrapper'>
        {isTablet ? (
          <Header showButton>
            <Input name='search' placeholder='Search'>
              <GrSearch />
            </Input>
            <div className='products__filter'>
              <Input checkbox name='active' label='Active' />
              <Input
                checkbox
                name='promo'
                label='Promo'
                className='products__filter-last'
              />
            </div>
          </Header>
        ) : (
          <>
            <Header showButton />
            <Input name='search' placeholder='Search'>
              <GrSearch />
            </Input>
            <div className='products__filter'>
              <Input checkbox name='active' label='Active' />
              <Input
                checkbox
                name='promo'
                label='Promo'
                className='products__filter-last'
              />
            </div>
          </>
        )}
      </div>
      <ProductGrid products={products} loading={loading} />
      {products && loading === false && (
        <div className='products__pagination'>
          <div className='wrapper'>
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={2}
              marginPagesDisplayed={3}
              initialPage={0}
              containerClassName='products__pagination__container'
              pageClassName='products__pagination__container-page'
              previousClassName='products__pagination__container-previous'
              nextClassName='products__pagination__container-next'
              activeClassName='products__pagination__container-active'
              previousLabel='First'
            />
          </div>
        </div>
      )}
    </div>
  );
};
