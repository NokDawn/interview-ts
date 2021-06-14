import { API } from 'common/types';
import React, { useEffect, useState } from 'react';

import Header from 'components/Header/Header';
import Input from 'components/Input/Input';
import ProductGrid from './components/ProductsGrid/ProductsGrid';

import ReactPaginate from 'react-paginate';
import { useMediaQuery } from 'react-responsive';
import { useDebounce } from 'use-debounce';

import { getProducts } from './products.api';

import { GrSearch } from 'react-icons/gr';

import './Products.scss';

export const Products = () => {
  const [products, setProducts] = useState<API | null>(null);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isPromo, setIsPromo] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // Debounces
  const [searchValue] = useDebounce(searchQuery, 500);
  const [activeValue] = useDebounce(isActive, 500);
  const [promoValue] = useDebounce(isPromo, 500);

  const isTablet = useMediaQuery({ minWidth: '768px' });

  useEffect(() => {
    const fetchProducts = async () => {
      // loading to true
      setLoading(true);

      // fetch Products
      const products = await getProducts(
        currentPage + 1,
        isTablet ? 8 : 4,
        searchValue,
        promoValue,
        activeValue
      );

      // get Total Pages
      const { totalPages } = products.meta;

      // save products && stop loading data && save total pages
      setProducts(products);
      setLoading(false);
      setTotalPages(totalPages);
    };
    fetchProducts();
  }, [searchValue, activeValue, promoValue, currentPage, isTablet]);

  const searchInputs = (
    <>
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
    </>
  );

  return (
    <div className='products'>
      <div className='wrapper'>
        {isTablet ? (
          <Header showButton>{searchInputs}</Header>
        ) : (
          <>
            <Header showButton />
            {searchInputs}
          </>
        )}
      </div>
      <ProductGrid products={products?.items} loading={loading} />
      {products?.items && loading === false && (
        <div className='products__pagination'>
          <div className='wrapper'>
            <span
              className='products__pagination-first'
              style={{ color: currentPage === 0 ? 'gray' : '' }}
              onClick={() => setCurrentPage(0)}
            >
              First
            </span>
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
            <span
              className='products__pagination-last'
              style={{ color: currentPage === totalPages - 1 ? 'gray' : '' }}
              onClick={() => setCurrentPage(totalPages - 1)}
            >
              Last
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
