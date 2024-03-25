"use client";
import Link from "next/link";
import styles from "./ProvisionalInvoice.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import oderService from "@/services/order/order.service";

function ProvisionalInvoice({
  // products
  handleOrder,
  subTotal,
  total,
  couponCode,
  setCouponCode,
}: {
  handleOrder: any;
  subTotal: number;
  total: number;
  couponCode: string;
  setCouponCode: any;
}) {
  const { access_token } = useSelector((state: RootState) => state.authn);
  const { products, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const dataProduct = {
    products: products.map((product: any) => ({
      productId: product._id,
      size: product.size,
      quantity: product.quantity,
    })),
  };

  return (
    <div className={`${styles["cart"]}`}>
      <h1 className={`${styles["title-provisional-invoice"]}`}>CART TOTALS</h1>
      <div>
        <div className={`d-flex ${styles["provisional-invoice-row"]}`}>
          <span
            className={`${styles["provisional-invoice-title"]} text-capitalize f-1`}
          >
            Subtotal
          </span>
          <span className={`f-3`}> ${subTotal}</span>
        </div>
        <div className={`d-flex ${styles["provisional-invoice-row"]}`}>
          <span
            className={`${styles["provisional-invoice-title"]} text-capitalize f-1`}
          >
            total
          </span>
          <span className={`f-3`}>${total}</span>
        </div>
      </div>
      <button
        onClick={handleOrder}
        className={`${styles["proceed-checkout"]} mt-4 text-white text-decoration-none`}
      >
        PROCEED TO CHECKOUT
      </button>
      <div style={{ visibility: "hidden" }}>
        <h1>Đây là thanh toán</h1>
      </div>
    </div>
  );
}

export default ProvisionalInvoice;
