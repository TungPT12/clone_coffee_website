type Owner = {
  _id: string;
  username: string;
};

type Price = {
  size: string;
  original_price: number;
  new_price: number;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};
export type Product = {
  _id: string;
  name: string;
  images: string[];
  price_original: number;
  price_new: number;
  prices: Price[];
  reviews: string[];
  owner: Owner;
  isPublished: boolean;
  quantityInStock: number;
  quantity: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Introduction = {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};
