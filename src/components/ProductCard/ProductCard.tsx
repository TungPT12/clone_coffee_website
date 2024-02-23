/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./ProductCard.module.scss";
const ProductCard = ({
  id,
  imageUrl,
  name,
  price,
}: {
  id: string;
  imageUrl: string;
  name: string;
  price: Number;
}) => {
  return (
    <div className={`${styles["product-item"]} col-4`}>
      <div className={`${styles["product"]} w-100`}>
        <div className={`position-relative ${styles["wrapper-add-to-cart"]}`}>
          <img
            alt="áds"
            className={`w-100 ${styles["image-product"]}`}
            src={imageUrl}
          />
          <div
            className={`${styles["overlay-add-to-cart"]} d-flex justify-content-center align-items-center h-100 w-100 position-absolute top-0`}
          >
            <button
              className={`${styles["add-to-cart-btn"]} border-0 text-uppercase `}
            >
              Add to cart
            </button>
          </div>
        </div>
        <Link
          href={`/product/${id}`}
          className={`w-100 text-center mt-2 text-decoration-none `}
        >
          <h5 className={`${styles["tiltle"]}`}>{name}</h5>
          <h6 className={`${styles["sub-text"]}`}>${price}</h6>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
