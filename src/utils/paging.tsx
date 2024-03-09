import { Product } from "@/types/entities/product.entity";

const paging = (array: Product[], elmentToShow: number, page: number) => {
  const startIndex = (page - 1) * elmentToShow;
  const endIndex = page * elmentToShow;
  return array.slice(startIndex, endIndex);
};

export default paging;
