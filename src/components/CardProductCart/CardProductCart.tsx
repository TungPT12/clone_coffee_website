/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CardProductCart.module.scss";
import { useEffect, useState } from "react";
import { authnAction } from "@/lib/slice/features/authn/authnSlice";
import { useDispatch } from "react-redux";
import { cartActions } from "@/lib/slice/features/cart/cartSlice";

const CardProductCart = ({
  product,
  handleIncrease,
  handleDecrease,
  handleDelete,
}: {
  product: any;
  handleIncrease: () => {};
  handleDecrease: any;
  handleDelete: any;
}) => {
  const dispatch = useDispatch();
  const DefaultImage =
    "https://q8laser.com/wp-content/uploads/2021/08/ly-cafe-vector.jpg";
  const handleImageError = (event: any) => {
    event.target.src = DefaultImage;
  };
  const [quantity, setQuantity] = useState<number>(
    product.quantity ? product.quantity : 0
  );
  useEffect(() => {
    setQuantity(product.quantity);
  }, [product]);

  console.log("product", product);
  return (
    <div key={product._id} className={`${styles["t-row"]} w-100 d-flex`}>
      <div
        className={`f-1 py-3 pointer-event ${styles["wrap-icon-close"]} d-flex align-items-center`}
      >
        <FontAwesomeIcon
          onClick={handleDelete}
          icon={faClose}
          className={`${styles["icon-close"]}`}
        />
      </div>
      <div className={`${styles["image"]} f-1 py-3 align-items-center`}>
        <img
          className="w-100"
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/${product.image}`}
          onError={handleImageError}
        />
      </div>
      <div className={`f-3  py-3 d-flex align-items-center`}>
        <span className="f-2">{product.name}</span>
      </div>
      <div className="f-2 py-3 d-flex align-items-center">{product.size}</div>

      <div className=" f-1-sm f-2 py-3 px-1 d-flex align-items-center">
        {product.price_new}
      </div>
      <div className={`d-flex py-3 f-2 px-1 d-flex align-items-center`}>
        <div
          className={`d-flex align-items-center ${styles["wrapper-quantity"]}`}
        >
          <input
            // type="number"
            className={`${styles["input-quantity"]}`}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (Number.isInteger(value) && value > 0) {
                setQuantity(value);
                dispatch(
                  cartActions.updateCart({
                    ...product,
                    quantity: value,
                  })
                );
              }
            }}
            value={quantity}
          />
          <div
            className={`d-flex flex-column ${styles["wrapper-btn"]} align-items-center h-100 justify-content-center`}
          >
            <button
              onClick={handleIncrease}
              className={` ${styles["increase-btn"]}`}
            >
              +
            </button>
            <button
              onClick={handleDecrease}
              className={` ${styles["decrease-btn"]}`}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="f-2 py-3 d-flex align-items-center">
        {product.quantity * product.price_new}
      </div>
    </div>
  );
};
export default CardProductCart;
