export interface ProductProps {
  product: SingleProductProps;
}

export interface SingleProductProps {
  id: number;
  image: string;
  active: boolean;
  description: string;
  name: string;
  promo: boolean;
  rating: number;
}
