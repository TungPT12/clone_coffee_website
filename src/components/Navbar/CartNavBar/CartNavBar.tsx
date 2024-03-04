/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./CartNavBar.module.scss";
import { useEffect, useState } from "react";

function CartNavBar() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const cartString = localStorage.getItem("cart");
    if (cartString) {
      const cartData = JSON?.parse(cartString);
      setCart(cartData);
    }
  }, []);

  const cartNull = () => {
    if (!cart) {
      return <>Không có sản phẩm trong giỏ hàng</>;
    } else {
      renderCartItems(cart);
    }
  };
  const renderCartItems = (cart: any) => {
    {
      cart &&
        cart.map((cartItem: any, index: number) => {
          return (
            <div className={`${styles["cart"]}`} key={index}>
              <img
                src={
                  cartItem?.images[0]?.includes("http")
                    ? cartItem.images[0]
                    : `${process.env.base_url}${cartItem?.images[0]}`
                }
                alt=""
                className={`${styles["image"]}`}
              />
              <div className={`${styles["description"]}`}>
                <span className={`${styles["title"]}`}>{cartItem?.name}</span>
                <span>Quantity: {cartItem?.price_original}</span>
                <span>${cartItem?.price_original}</span>
              </div>
            </div>
          );
        });
    }
  };

  return (
    <ul className={`position-relative ${styles["second-navbar"]} p-3`}>
      <div className={`${styles["product"]}`}>
        {cartNull()}
        <div className={`${styles["total-cart"]}`}>
          <div className={`${styles["money-cart"]}`}>
            <span>Total:</span>
            <span>$21</span>
          </div>
          <Link href={`/cart`} className={`${styles["btn-view-cart"]} mt-3`}>
            View Cart
          </Link>
        </div>
      </div>
    </ul>
  );
}

export default CartNavBar;
