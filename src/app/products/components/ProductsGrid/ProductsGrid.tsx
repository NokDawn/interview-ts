import React from 'react';

import Product from './components/Product/Product';
import EmptyList from './components/Empty-List/EmptyList';
import Spinner from 'components/Spinner/Spinner';

import { ProductGridProps } from './ProductsGrid.types';

import './ProductsGrid.scss';

const ProductGrid: React.FC<ProductGridProps> = ({ products, loading }) => {
  // Fetching data
  if (loading) {
    return (
      <div className='products-grid'>
        <Spinner />
      </div>
    );
  }

  // No data available
  if (products?.length === 0 && loading === false) {
    return (
      <div className='products-grid'>
        <EmptyList />
      </div>
    );
  }

  // Show data
  return (
    <div className='products-grid'>
      {products &&
        products.map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductGrid;
