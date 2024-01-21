/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./CartNavBar.module.scss";
function CartNavBar() {
  return (
    <ul className={`position-relative ${styles["second-navbar"]} p-3`}>
      <div className={`${styles["product"]}`}>
        <div className={`${styles["cart"]}`}>
          <img
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png"
            alt=""
            className={`${styles["image"]}`}
          />
          <div className={`${styles["description"]}`}>
            <span className={`${styles["title"]}`}>COLUMBIA COFFEE</span>
            <span>Quantity:1</span>
            <span>$21</span>
          </div>
        </div>
        <div className={`${styles["cart"]}`}>
          <img
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png"
            alt=""
            className={`${styles["image"]}`}
          />
          <div className={`${styles["description"]}`}>
            <span className={`${styles["title"]}`}>COLUMBIA COFFEE</span>
            <span>Quantity:1</span>
            <span>$21</span>
          </div>
        </div>
        <div className={`${styles["cart"]}`}>
          <img
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png"
            alt=""
            className={`${styles["image"]}`}
          />
          <div className={`${styles["description"]}`}>
            <span className={`${styles["title"]}`}>COLUMBIA COFFEE</span>
            <span>Quantity:1</span>
            <span>$21</span>
          </div>
        </div>
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
