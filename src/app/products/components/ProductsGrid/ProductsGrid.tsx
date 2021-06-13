import React from 'react';

import Product from './components/Product/Product';
import EmptyList from './components/Empty-List/EmptyList';

import './ProductsGrid.scss';

export interface ProductGridProps {
  products: any;
  loading: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, loading }) => {
  console.log(products);

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
        products.items.map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductGrid;