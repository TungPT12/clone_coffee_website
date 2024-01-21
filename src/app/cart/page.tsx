import Navbar from "@/components/Navbar/Navbar";
import styles from "./Cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer/Footer";
import ProvisionalInvoice from "@/components/ProvisionalInvoice/ProvisionalInvoice";
import Banner from "@/components/Banner/Banner";
export default function Cart() {
  return (
    <div className="position-relative">
      <Navbar />
      <Banner title={`cart`} />
      <div className={`${styles["cart-wrapper"]} mt-4 pb-5`}>
        <div className="cart-product">
          <div className={`${styles["t-head"]} `}>
            <div className={`d-flex ${styles["th"]}`}>
              <div className={`f-1 py-3 ${styles[""]}`}></div>
              <div className={`f-1 py-3 ${styles[""]}`}></div>
              <div className="f-3 py-3">Product</div>
              <div className="f-2 py-3">Price</div>
              <div className="f-2 py-3">Quantity</div>
              <div className="f-2 py-3">Subtotal</div>
            </div>
          </div>
          <div className={`${styles["t-body"]} `}>
            <div className={`${styles["t-row"]} w-100 d-flex`}>
              <div
                className={`f-1 py-3 pointer-event ${styles["wrap-icon-close"]} d-flex align-items-center`}
              >
                <FontAwesomeIcon
                  icon={faClose}
                  className={`${styles["icon-close"]}`}
                />
              </div>
              <div className={`f-1 py-3 d-flex align-items-center`}>
                <img
                  className="w-100"
                  src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png"
                />
              </div>
              <div className={`f-3  py-3 d-flex align-items-center`}>
                <span className="f-2">Columnbia Coffe</span>
              </div>
              <div className="f-2 py-3 d-flex align-items-center">$123</div>
              <div className={`d-flex py-3 f-2 d-flex align-items-center`}>
                <div
                  className={`d-flex align-items-center ${styles["wrapper-quantity"]}`}
                >
                  <input className={`${styles["input-quantity"]}`} value={2} />
                  <div
                    className={`d-flex flex-column ${styles["wrapper-btn"]} align-items-center h-100 justify-content-center`}
                  >
                    <button className={` ${styles["increase-btn"]}`}>+</button>
                    <button className={` ${styles["decrease-btn"]}`}>-</button>
                  </div>
                </div>
              </div>
              <div className="f-2 py-3 d-flex align-items-center">$123</div>
            </div>
          </div>
        </div>
        <div className="coupon py-5">
          <input
            type="text"
            className={`${styles["input-coupon"]}`}
            // value=""
            placeholder="Coupon code"
          />
          <button
            type="submit"
            className={`${styles["apply-coupon-btn"]} text-white`}
            value="Apply coupon"
          >
            Apply coupon
          </button>
        </div>
        <ProvisionalInvoice />
      </div>
      <Footer />
    </div>
  );
}
