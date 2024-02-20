import { Category } from './category';

export type Product = {
  id: number; // Omit loai bo
  title: string;
  price: number;
  image: string;
  description: string;
  category: string; // Omit loai bo
  rate:number
};

export type Categorises ={
  id : string; //,
  category: string,
}

export type ProductAdmin = Omit<Product, 'id' | 'category' | 'rate'> & {
  id: number;
  category: Category;
  rate: number
};

export type ProductAdd = Omit<Product, 'id' | 'rating'> & {
  rate: number;
};
