import { Product as ProductTypes } from 'common/types';

export interface ProductGridProps {
  products: ProductTypes[] | undefined;
  loading: boolean;
}
