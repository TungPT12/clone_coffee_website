/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import CustomModal from "../Modal/Modal";
import styles from "./Bill.module.scss";

const Bill = ({
  orderData,
  isOpen,
  setIsOpen,
}: {
  orderData: any;
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const renderProducts = (products: any) => {
    return products.map((product: any) => {
      return (
        <div key={product.product._id} className={styles.product}>
          <img
            src={product.product.images[0]}
            alt={product.product.name}
            className={styles.productImage}
          />
          <div className={styles.productInfo}>
            <p className={styles.productName}>{product.product.name}</p>
            <p className={styles.productQuantity}>
              Số lượng: {product.quantity}
            </p>
            <p className={styles.productQuantity}>Kích thước: {product.size}</p>
          </div>
        </div>
      );
    });
  };
  console.log(orderData);
  return (
    <CustomModal
      isOpen={isOpen}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      background="#00000047"
    >
      {orderData ? (
        <div className={styles.bill}>
          <h3 className={`${styles.title} mb-3`}>Thông tin phiếu gọi món</h3>
          <h6 className={styles.orderCode}>Mã gọi món: {orderData._id}</h6>
          <h6 className={styles.orderCode}>Chi tiết đơn hàng</h6>
          <div className={`${styles["wrapper-product"]}`}>
            {renderProducts(orderData.items)}
          </div>
          <div className={styles.total}>
            <p className={styles.totalLabel}>Tổng tiền:</p>
            <p className={styles.totalAmount}>{orderData.total_price}</p>
          </div>
          <div className={styles.groupButton}>
            <button
              className={styles.cancelButton}
              // onClick={setIsOpen}
            >
              Copy mã gọi món
            </button>

            <button className={styles.cancelButton} onClick={setIsOpen}>
              Đóng
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </CustomModal>
  );
};

export default Bill;
