export type Category = {
    id: string;
    category: string;
  
  };
  
  export type CategoryAdd = Omit<Category, 'id'>