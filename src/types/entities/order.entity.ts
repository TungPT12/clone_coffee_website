export type Order = {
  _id: string;
  customer_id: any;
  products: any[];
  total_price: number;
  type: string;
  payment_status: string;
  items: Item[];
  status: string;
  slug: string;
  QRCode: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Item = {
  product: string;
  quantity: number;
  _id: string;
};
