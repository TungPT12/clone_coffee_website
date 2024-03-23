/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./Cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faWarning } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer/Footer";
import ProvisionalInvoice from "@/components/ProvisionalInvoice/ProvisionalInvoice";
import Banner from "@/components/Banner/Banner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { cartActions } from "@/lib/slice/features/cart/cartSlice";
import CardProductCart from "@/components/CardProductCart/CardProductCart";
import oderService from "@/services/order/order.service";
import Bill from "@/components/Bill/Bill";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const notifySuccess = () => toast.success("Mua hàng thành công");
  const notifyFail = () => toast.error("Mua hàng thất bại");

  const [open, setopen] = useState(false);
  const { products, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  const [orderData, setOrder] = useState(null);
  // Promise.all(
  //   products.map((product: any) => {
  //     return productService.getProductId(product.productId);
  //   })
  // )
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error: any) => {
  //     console.log(error);
  //   });
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState("");
  const [isOpenBill, setIsOpenBill] = useState(false);

  const storeIdGuest = (id: string) => {
    const localStore = localStorage.getItem("orderGuest");
    if (localStore) {
      let orderGuest = JSON.parse(localStore);
      orderGuest.push(id);
      localStorage.setItem("orderGuest", JSON.stringify(orderGuest));
    } else {
      let orderGuest = [];
      orderGuest.push(id);
      localStorage.setItem("orderGuest", JSON.stringify(orderGuest));
    }
  };

  const order = (dataProduct: any) => {
    const formatProduct = dataProduct.reduce(
      (initProducts: any[], product: any) => {
        console.log(initProducts);
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

    oderService(orderData)
      .then((data: any) => {
        return data;
      })
      .then((data: any) => {
        setOrder(data);
        if (!data.customer_id) {
          storeIdGuest(data._id);
        }
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
  // const order = (dataProduct: any) => {

  //   const orderData = {
  //     products: dataProduct,
  //   };

  //   oderService(orderData)
  //     .then((data: any) => {
  //       return data;
  //     })
  //     .then((data: any) => {
  //       alert("ban mua hang thanh cong");
  //     })
  //     .then(() => {
  //       // localStorage.removeItem("cart");
  //     })
  //     .catch((error: Error) => {
  //       alert("ban mua hang that bai");
  //     });
  // };

  // const inCreaseQuantity = (item: any) => {
  //   dispatch(cartActions.addProductToCart(item));
  // };

  // const deCreaseQuantity = (item: any) => {
  //   dispatch(cartActions.decreaseProduct(item));
  // };

  useEffect(() => {
    if (orderData) {
      setIsOpenBill(true);
    }
  }, [orderData]);

  const renderCart = (products: any) => {
    if (products.length === 0) {
      return (
        <div className="d-flex text-warning fw-500 align-items-center ps-2 pb-2 mb-1 pt-0  ">
          <FontAwesomeIcon icon={faWarning} className="icon-warning me-2" />
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
    <div className="position-relative">
      <Navbar />
      <Banner title={`cart`} />
      <div className={`${styles["cart-wrapper"]} mt-4 pb-5`}>
        <div className="cart-product">
          <div className={`${styles["t-head"]} `}>
            <div className={`d-flex ${styles["th"]}`}>
              <div className={`f-1 py-3 ${styles[""]}`}></div>
              <div className={`f-1 py-3 ${styles["image-header"]}`}></div>
              <div className="f-3 py-3">Product</div>
              <div className="f-1-sm f-2 py-3 px-1">Size</div>
              <div className="f-1-sm f-2 py-3 px-1">Price</div>
              <div className="f-2 py-3 px-1">Quantity</div>
              <div className="f-2 py-3 px-1">Subtotal</div>
            </div>
          </div>
          <div className={`${styles["t-body"]} `}>{renderCart(products)}</div>
        </div>
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
        {/* <Bill id="1333weweqwewq23" isOpen={open} setIsOpen={setopen} /> */}

        <ProvisionalInvoice
          handleOrder={() => {
            order(products);
          }}
          subTotal={totalPrice}
          total={totalPrice}
          couponCode={couponCode}
          setCouponCode={setCouponCode}
        />
        <Bill isOpen={isOpenBill} setIsOpen={closeBill} orderData={orderData} />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
