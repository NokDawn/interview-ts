import { Sample } from 'common/types';
import React, { useEffect, useRef, useState } from 'react';

import Header from 'components/Header/Header';
import Input from 'components/Input/Input';
import ProductGrid from './components/ProductsGrid/ProductsGrid';

import ReactPaginate from 'react-paginate';
import { useMediaQuery } from 'react-responsive';
import { useDebounce } from 'use-debounce';

import { AppRoute } from 'routing/AppRoute.enum';
import { getProducts } from './products.api';

import { GrSearch } from 'react-icons/gr';

import './Products.scss';

export const Products = () => {
  const [products, setProducts] = useState<Sample | null>(null);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isPromo, setIsPromo] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue] = useDebounce(searchQuery, 500);
  const [activeValue] = useDebounce(isActive, 500);
  const [promoValue] = useDebounce(isPromo, 500);

  const isTablet = useMediaQuery({ minWidth: '768px' });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const products = await getProducts(
        currentPage + 1,
        8,
        searchValue,
        promoValue,
        activeValue
      );
      const { totalPages } = products.meta;
      setProducts(products);
      setLoading(false);
      setTotalPages(totalPages);
    };
    fetchProducts();
  }, [searchValue, activeValue, promoValue, currentPage]);

  console.log(products);
  console.log(searchQuery);

  return (
    <div className='products'>
      <div className='wrapper'>
        {isTablet ? (
          <Header showButton>
            <Input
              name='search'
              placeholder='Search'
              onChange={(e) => setSearchQuery(e.target.value)}
            >
              <GrSearch />
            </Input>
            <div className='products__filter'>
              <Input
                checkbox
                name='active'
                label='Active'
                onChange={(e) => setIsActive(e.target.checked)}
              />
              <Input
                checkbox
                name='promo'
                label='Promo'
                className='products__filter-last'
                onChange={(e) => setIsPromo(e.target.checked)}
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
              <Input
                checkbox
                name='active'
                label='Active'
                onChange={(e) => setIsActive(e.target.checked)}
              />
              <Input
                checkbox
                name='promo'
                label='Promo'
                className='products__filter-last'
                onChange={(e) => setIsPromo(e.target.checked)}
              />
            </div>
          </>
        )}
      </div>
      <ProductGrid products={products?.items} loading={loading} />
      {products && loading === false && (
        <div className='products__pagination'>
          <div className='wrapper'>
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={2}
              marginPagesDisplayed={3}
              initialPage={currentPage}
              onPageChange={(e) => setCurrentPage(e.selected)}
              containerClassName='products__pagination__container'
              pageClassName='products__pagination__container-page'
              previousClassName='products__pagination__container-previous'
              nextClassName='products__pagination__container-next'
              activeClassName='products__pagination__container-active'
              pageLinkClassName='products__pagination__container-link'
            />
          </div>
        </div>
      )}
    </div>
  );
};
