/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import CustomModal from "../Modal/Modal";
import styles from "./BillOrder.module.scss";
import useSWR from "swr";
import orderService from "@/services/order/order.service";

const BillOrder = ({
  orderData,
  isOpen,
  setIsOpen,
}: {
  orderData: any;
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const DefaultImage =
    "https://q8laser.com/wp-content/uploads/2021/08/ly-cafe-vector.jpg";

  const handleImageError = (event: any) => {
    event.target.src = DefaultImage;
  };
  const renderProducts = (products: any) => {
    return products.map((product: any) => {
      return (
        <div key={product.product._id} className={styles.product}>
          <img
            src={
              "https://q8laser.com/wp-content/uploads/2021/08/ly-cafe-vector.jpg"
              // product?.product.images[0]?.includes("http")
              //   ? product?.product.images[0]
              //   : product?.product.images[0]
              //   ? `${process.env.NEXT_PUBLIC_BASE_URL}/${product?.product.images[0]}`
              //   : "https://q8laser.com/wp-content/uploads/2021/08/ly-cafe-vector.jpg"
            }
            onError={handleImageError}
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

  const hanldeCopy = () => {
    var orderCodeElement = document.getElementById("orderCode");

    if (orderCodeElement !== null) {
      var orderCode = orderCodeElement.textContent;

      // Tạo một phần tử input tạm thời để sao chép nội dung vào clipboard
      var tempInput = document.createElement("input");

      // Gán giá trị của mã gọi món cho phần tử input
      tempInput.value = orderCode ?? "";

      // Thêm phần tử input tạm thời vào DOM để có thể sao chép nội dung
      document.body.appendChild(tempInput);

      // Chọn toàn bộ nội dung trong phần tử input
      tempInput.select();

      // Sao chép nội dung vào clipboard
      document.execCommand("copy");

      // Xóa phần tử input tạm thời khỏi DOM
      document.body.removeChild(tempInput);
    }
  };

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
          <div
            className={`${styles["close-icon"]}`}
            onClick={() => {
              setIsOpen(false);
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
          <h3 className={`${styles.title} mb-3`}>Thông tin phiếu gọi món</h3>
          <h6 id="orderCode" className={styles.orderCode}>
            <div style={{ display: "flex" }}>
              <p>Mã gọi món: </p>
              <h6>{orderData.slug}</h6>
            </div>
          </h6>
          <div className={styles.orderCode} style={{ display: "flex", gap: 2 }}>
            <h6>Trạng thái: </h6>
            {orderData.status === "pending" ? (
              <>
                <p style={{ color: "orange", marginTop: "-3px" }}>
                  Chưa thanh toán
                </p>
              </>
            ) : (
              <>
                <p style={{ color: "green", marginTop: "-3px" }}>
                  Đã thanh toán
                </p>
              </>
            )}
          </div>

          <h6 className={styles.orderCode}>Chi tiết đơn hàng</h6>
          <div className={`${styles["wrapper-product"]}`}>
            {renderProducts(orderData.items)}
          </div>
          <div className={styles.total}>
            <p className={styles.totalLabel}>Tổng tiền:</p>
            <p className={styles.totalAmount}>
              {orderData.total_price.toLocaleString("vi-VN")} VND
            </p>
          </div>
          <div className={styles.groupButton}>
            <button
              onClick={() => {
                hanldeCopy();
              }}
              className={styles.cancelButton}
            >
              Sao chép mã
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

export default BillOrder;
