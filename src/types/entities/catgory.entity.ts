// type product = {
//   _id: string;
//   name: string;
//   images: string[];
//   price_original: number;
//   price_new: number;
// };

import { Product } from "./product.entity";

export type StoreCatgory = {
  _id: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  products: Product[];
  name: string;
};
