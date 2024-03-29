/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./CartNavBar.module.scss";
import { useContext, useEffect, useState } from "react";
import { useCartContext } from "@/components/Context/CartContext";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

function CartNavBar() {
  const DefaultImage =
    "https://q8laser.com/wp-content/uploads/2021/08/ly-cafe-vector.jpg";

  const { products, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const handleImageError = (event: any) => {
    event.target.src = DefaultImage;
  };
  // useEffect(() => {
  //   const savedCart = localStorage.getItem("cart");
  //   if (savedCart) {
  //     setCart(JSON.parse(savedCart));
  //   }
  // }, []);

  // const { cart } = useCartContext();

  const renderCartItems = (products: any[]) => {
    return products.map((product: any) => (
      <div
        className={`${styles["cart"]}`}
        key={`${product._id}-${product.size}`}
      >
        <picture>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${product?.image}`}
            alt={product.name}
            className={`${styles["image"]}`}
            onError={handleImageError}
          />
        </picture>

        <div className={`${styles["description"]}`}>
          <span className={`${styles["title"]}`}>{product?.name}</span>
          <div>
            <span className="me-3">Quantity:</span>
            <span>{product?.quantity}</span>
          </div>
          <span>
            {(product?.quantity * product.price_new).toLocaleString("vi-VN")}{" "}
            VND
          </span>
        </div>
      </div>
    ));
  };

  // const cartNull = () => {
  //   if (!cart || cart.length === 0) {
  //     return <p>Không có sản phẩm trong giỏ hàng</p>;
  //   } else {
  //     return renderCartItems(cart);
  //   }
  // };

  return (
    <ul className={`position-relative ${styles["second-navbar"]} p-3`}>
      <div className={`${styles["product"]}`}>
        {/* {cartNull()} */}
        {products.length === 0 ? (
          <div className={`${styles["no-cart"]}`}>
            <FontAwesomeIcon icon={faWarning} className="icon-warning me-2" />
            Giỏ hàng trống
          </div>
        ) : (
          renderCartItems(products)
        )}
        <div className={`${styles["total-cart"]}`}>
          <div className={`${styles["money-cart"]}`}>
            <span>Total:</span>
            <span>{totalPrice.toLocaleString("vi-VN")} VND</span>
          </div>
          <Link
            href={`/cart?scrollToElement=cart`}
            className={`${styles["btn-view-cart"]} mt-3`}
          >
            View Cart
          </Link>
        </div>
      </div>
    </ul>
  );
}

export default CartNavBar;
