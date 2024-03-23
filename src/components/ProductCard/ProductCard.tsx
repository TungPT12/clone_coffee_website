/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./ProductCard.module.scss";
import { cartActions } from "@/lib/slice/features/cart/cartSlice";
import { useDispatch } from "react-redux";
const ProductCard = ({
  id,
  imageUrl,
  name,
  price_new,
}: {
  id: string;
  imageUrl: string;
  name: string;
  price_new: number;
}) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product: any) => {
    dispatch(cartActions.addProductToCart(product));
  };
  const DefaultImage =
    "https://q8laser.com/wp-content/uploads/2021/08/ly-cafe-vector.jpg";
  const handleImageError = (event: any) => {
    event.target.src = DefaultImage;
  };
  return (
    <div className={`${styles["product-item"]} col-4`}>
      <div className={`${styles["product"]} w-100`}>
        <div className={`position-relative ${styles["wrapper-add-to-cart"]}`}>
          <picture>
            <img
              alt="áds"
              className={`w-100 ${styles["image-product"]}`}
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageUrl}`}
              onError={handleImageError}
            />
          </picture>
          <div
            className={`${styles["overlay-add-to-cart"]} d-flex justify-content-center align-items-center h-100 w-100 position-absolute top-0`}
          >
            <button
              onClick={() => {
                handleAddToCart({
                  images: [imageUrl],
                  price_new: price_new,
                  quantity: 1,
                  size: "N",
                  productId: id,
                  name: name,
                });
              }}
              className={`${styles["add-to-cart-btn"]} border-0 text-uppercase `}
            >
              Add to cart
            </button>
          </div>
        </div>
        <Link
          href={`/product/${id}`}
          className={`w-100 text-center mt-2 text-decoration-none ${styles["link-product"]}`}
        >
          <h5 className={`${styles["tiltle"]}`}>{name}</h5>
          <h6 className={`${styles["sub-text"]}`}>{price_new}</h6>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
