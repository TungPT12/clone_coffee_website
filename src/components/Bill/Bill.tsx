import { useState } from "react";
import CustomModal from "../Modal/Modal";
import styles from "./Bill.module.scss";

const Bill = ({
  id,
  isOpen,
  setIsOpen,
}: {
  id: string;
  isOpen: boolean;
  setIsOpen: any;
}) => {
  return (
    <CustomModal
      isOpen={isOpen}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      background="#00000047"
    >
      <div className={styles.bill}>
        <h3 className={`${styles.title} mb-3`}>Thông tin phiếu gọi món</h3>
        <h6 className={styles.orderCode}>Mã gọi món: {id}</h6>
        <h6 className={styles.orderCode}>Chi tiết đơn hàng</h6>
        <div className={`${styles["wrapper-product"]}`}>
          <div className={styles.product}>
            <img
              src="https://hopdungthucan.com/wp-content/uploads/2022/05/anh-dep-ben-ly-cafe_110730424.jpg"
              alt="Product Image"
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <p className={styles.productName}>Cà phê sữa</p>
              <p className={styles.productQuantity}>Số lượng:2</p>
              <p className={styles.productQuantity}>Kích thước: L</p>
            </div>
          </div>

          <div className={styles.product}>
            <img
              src="https://static.wixstatic.com/media/b22946_583ec85d9b7a4d3ea73503b86bdb8c0a~mv2.jpg/v1/fill/w_511,h_642,al_c,q_80,enc_auto/b22946_583ec85d9b7a4d3ea73503b86bdb8c0a~mv2.jpg"
              alt="Product Image"
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <p className={styles.productName}>Cà phê sữa</p>
              <p className={styles.productQuantity}>Số lượng:2</p>
              <p className={styles.productQuantity}>Kích thước: L</p>
            </div>
          </div>

          <div className={styles.product}>
            <img
              src="https://hopdungthucan.com/wp-content/uploads/2022/05/anh-dep-ben-ly-cafe_110730424.jpg"
              alt="Product Image"
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <p className={styles.productName}>Cà phê sữa</p>
              <p className={styles.productQuantity}>Số lượng:2</p>
              <p className={styles.productQuantity}>Kích thước: L</p>
            </div>
          </div>
          <div className={styles.product}>
            <img
              src="https://hopdungthucan.com/wp-content/uploads/2022/05/anh-dep-ben-ly-cafe_110730424.jpg"
              alt="Product Image"
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <p className={styles.productName}>Cà phê sữa</p>
              <p className={styles.productQuantity}>Số lượng:2</p>
              <p className={styles.productQuantity}>Kích thước: L</p>
            </div>
          </div>
          <div className={styles.product}>
            <img
              src="https://hopdungthucan.com/wp-content/uploads/2022/05/anh-dep-ben-ly-cafe_110730424.jpg"
              alt="Product Image"
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <p className={styles.productName}>Cà phê sữa</p>
              <p className={styles.productQuantity}>Số lượng:2</p>
              <p className={styles.productQuantity}>Kích thước: L</p>
            </div>
          </div>
          <div className={styles.product}>
            <img
              src="https://hopdungthucan.com/wp-content/uploads/2022/05/anh-dep-ben-ly-cafe_110730424.jpg"
              alt="Product Image"
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <p className={styles.productName}>Cà phê sữa</p>
              <p className={styles.productQuantity}>Số lượng:2</p>
              <p className={styles.productQuantity}>Kích thước: L</p>
            </div>
          </div>
        </div>
        <div className={styles.total}>
          <p className={styles.totalLabel}>Tổng tiền:</p>
          <p className={styles.totalAmount}>12</p>
        </div>
        <div className={styles.groupButton}>
          <button
            className={styles.cancelButton}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Copy mã gọi món
          </button>

          <button
            className={styles.cancelButton}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Hủy bỏ
          </button>
        </div>
      </div>
    </CustomModal>
  );
};

export default Bill;
