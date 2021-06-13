import React from 'react';

import Product from './components/Product/Product';
import EmptyList from './components/Empty-List/EmptyList';
import Spinner from 'components/Spinner/Spinner';

import './ProductsGrid.scss';
import { Product as ProductTypes } from 'common/types';

export interface ProductGridProps {
  products: ProductTypes[] | undefined;
  loading: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, loading }) => {
  console.log(products);

  if (loading) {
    return (
      <div className='products-grid'>
        <Spinner />
      </div>
    );
  }

  if (!products && loading === false) {
    return (
      <div className='products-grid'>
        <EmptyList />
      </div>
    );
  }

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
