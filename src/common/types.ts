export interface Product {
  id: number;
  active: boolean;
  description: string;
  image: string;
  name: string;
  promo: boolean;
  rating: number;
}

export interface Link {
  first: string;
  last: string;
  next: string;
  previous: string;
}

export interface Meta {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface Sample {
  items: Array<Product>;
  links: Link;
  meta: Meta;
}
