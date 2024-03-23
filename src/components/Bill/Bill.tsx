/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
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
  const DefaultImage =
    "https://q8laser.com/wp-content/uploads/2021/08/ly-cafe-vector.jpg";

  // const [cart, setCart] = useState<any[]>(() => {
  //   const storedCart = localStorage.getItem("cart");
  //   return storedCart ? JSON.parse(storedCart) : [];
  // });

  // const { addToCart } = useCartContext();
  const handleImageError = (event: any) => {
    event.target.src = DefaultImage;
  };
  const renderProducts = (products: any) => {
    return products.map((product: any) => {
      return (
        <div key={product.product._id} className={styles.product}>
          <img
            src={
              product?.product.images[0]?.includes("http")
                ? product?.product.images[0]
                : product?.product.images[0]
                ? `${process.env.NEXT_PUBLIC_BASE_URL}/${product?.product.images[0]}`
                : "https://q8laser.com/wp-content/uploads/2021/08/ly-cafe-vector.jpg"
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
          <h3 className={`${styles.title} mb-3`}>Thông tin phiếu gọi món</h3>
          <h6 id="orderCode" className={styles.orderCode}>
            Mã gọi món: {orderData._id}
          </h6>
          <div className={`${styles.qrcode}`}>
            <picture>
              <img
                className="w-100"
                src={orderData.QRCode.replaceAll('"', "")}
                alt="star"
              />
            </picture>
          </div>

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
              onClick={() => {
                hanldeCopy();
              }}
              className={styles.cancelButton}
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
