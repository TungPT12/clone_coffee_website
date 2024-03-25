/* eslint-disable @next/next/no-img-element */
"use client";
import { cartActions } from "@/lib/slice/features/cart/cartSlice";
import Bill from "../Bill/Bill";
import CardProductCart from "../CardProductCart/CardProductCart";
import CustomModal from "../Modal/Modal";
import ProvisionalInvoice from "../ProvisionalInvoice/ProvisionalInvoice";
import styles from "./BillCart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import orderService from "@/services/order/order.service";

const BillCart = ({
  isOpenCart,
  setIsOpenCart,
}: {
  isOpenCart: boolean;
  setIsOpenCart: any;
}) => {
  const notifySuccess = () => toast.success("Mua hàng thành công");
  const notifyFail = () => toast.error("Mua hàng thất bại");

  const { products, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  const [isOpenOder, setIsOpenOder] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [orderData, setOrder] = useState(null);
  const [isOpenBill, setIsOpenBill] = useState(false);

  const storeIdGuest = (data: any) => {
    const localStore = localStorage.getItem("orderGuest");
    if (localStore) {
      let orderGuest = JSON.parse(localStore);
      orderGuest.push(data);
      localStorage.setItem("orderGuest", JSON.stringify(orderGuest));
    } else {
      let orderGuest = [];
      orderGuest.push(data);
      localStorage.setItem("orderGuest", JSON.stringify(orderGuest));
    }
  };
  useEffect(() => {
    if (orderData) {
      setIsOpenBill(true);
    }
  }, [orderData]);

  const order = (dataProduct: any) => {
    const formatProduct = dataProduct.reduce(
      (initProducts: any[], product: any) => {
        let newProduct = product;
        if (newProduct.size === "N") {
          newProduct = {
            ...newProduct,
            size: null,
          };
        }
        return initProducts.concat([newProduct]);
      },
      []
    );
    const orderData = {
      products: formatProduct,
    };

    orderService
      .createOrder(orderData)
      .then((data: any) => {
        return data;
      })
      .then((data: any) => {
        setOrder(data);

        storeIdGuest(data);

        dispatch(cartActions.resetCart());
        localStorage.removeItem("cart");
      })
      .then(() => {
        notifySuccess();
      })
      .catch((error: Error) => {
        notifyFail();
      });
  };

  const closeBill = () => {
    setOrder(null);
    setIsOpenBill(false);
  };

  const renderCart = (products: any) => {
    if (products.length === 0) {
      return (
        <div className="d-flex text-warning fw-500 align-items-center ps-2 pb-2 mb-1 pt-0  ">
          <FontAwesomeIcon icon={faWarning} className="icon-warning me-2" />
          Không có sản phẩm trong giỏ hàng
        </div>
      ); // No cart or empty cart
    }
    return products.map((product: any, index: number) => {
      return (
        <CardProductCart
          key={`${product._id}-${product.size}`}
          handleIncrease={() =>
            dispatch(
              cartActions.addProductToCart({
                ...product,
                quantity: 1,
              })
            )
          }
          handleDecrease={() => {
            if (product.quantity > 1) {
              dispatch(
                cartActions.decreaseProduct({
                  ...product,
                  quantity: 1,
                })
              );
            }
          }}
          handleDelete={() => {
            dispatch(cartActions.deleteProductsInCart(product));
          }}
          product={product}
        />
      );
    });
  };

  return (
    <>
      <CustomModal
        isOpen={isOpenCart}
        style={{
          display: "flex",
          justifyContent: "center",
          zIndex: 999,
        }}
        background="#00000047"
      >
        <div className={`${styles["cart-wrapper"]} `}>
          <div
            className={`${styles["close-icon"]}`}
            onClick={() => {
              setIsOpenCart(false);
              setIsOpenOder(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <h1 className={`${styles["cart-text"]} `}>Chi tiết gọi món</h1>

          <div className="cart-product">
            <div className={`${styles["t-head"]} `}>
              <div className={`d-flex ${styles["th"]}`}>
                <div className={`f-1 py-3 ${styles[""]}`}></div>
                <div className={`f-1 py-3 ${styles["image-header"]}`}></div>
                <div className={`f-3 py-3 ${styles["th-title"]}`}>Product</div>
                <div className={`f-1-sm f-2 py-3 px-1 ${styles["th-title"]}`}>
                  Size
                </div>
                <div className={`f-1-sm f-2 py-3 px-1 ${styles["th-title"]}`}>
                  Price
                </div>
                <div className={`f-2 py-3 ${styles["th-title"]}`}>Quantity</div>
                <div
                  className={`f-2 py-3 px-1 d-none-sm ${styles["th-title"]}`}
                >
                  Subtotal
                </div>
              </div>
            </div>
            <div className={`${styles["t-body"]} `}>{renderCart(products)}</div>
          </div>
          {isOpenOder ? (
            <div>
              <div className={`${styles["coupon"]} py-5`}>
                <input
                  value={couponCode}
                  type="text"
                  className={`${styles["input-coupon"]}`}
                  placeholder="Coupon code"
                  onChange={(event) => setCouponCode(event.target.value)}
                />
                <button
                  type="submit"
                  // onClick={() => {
                  //   setopen(true);
                  // }}
                  className={`${styles["apply-coupon-btn"]} text-white`}
                  value="Apply coupon"
                >
                  Apply coupon
                </button>
              </div>
              <ProvisionalInvoice
                handleOrder={() => {
                  order(products);
                }}
                subTotal={totalPrice}
                total={totalPrice}
                couponCode={couponCode}
                setCouponCode={setCouponCode}
              />
              <Bill
                isOpen={isOpenBill}
                setIsOpen={closeBill}
                orderData={orderData}
              />
            </div>
          ) : (
            <></>
          )}

          {isOpenOder ? (
            <></>
          ) : (
            <div className={`${styles["coupon"]} py-5 `}>
              <button
                type="submit"
                onClick={() => {
                  setIsOpenCart(false);
                  setIsOpenOder(false);
                }}
                className={`${styles["apply-coupon-btn"]} text-white`}
                value="Apply coupon"
              >
                Tiếp tục mua hàng
              </button>
              <button
                className={`${styles["apply-coupon-btn"]}  text-white text-decoration-none `}
                onClick={() => {
                  setIsOpenOder(true);
                }}
              >
                Đến phần thanh toán
              </button>
            </div>
          )}
        </div>
      </CustomModal>
    </>
  );
};

export default BillCart;
