export type Profile = {
  _id: string;
  username: string;
  slug: string;
  password: string;
  email: string;
  role: string;
  avatar: string;
  product: any[];
  orders: any[];
  feedbacks: any[];
  score: number;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
  refreshToken: string;
};
