"use client";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./Order.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";
import { useState } from "react";

export default function Cart() {
  const [activeTab, setActiveTab] = useState({
    isShowDescription: true,
    isShowInformation: false,
    isShowReview: false,
  });

  const renderTabs = () => {
    if (activeTab.isShowDescription) {
      return (
        <div className={`${styles.tabContent}`}>
          <div className={`${styles["cart-wrapper"]}`}>
            <div className="cart-product">
              <div className={`${styles["t-head"]} `}>
                <div className={`d-flex ${styles["th"]}`}>
                  <div className={`f-1 py-3 ${styles[""]}`}></div>
                  <div className={`f-1 py-3 ${styles["image-header"]}`}></div>
                  <div className="f-3 py-3">Mã gọi món</div>
                  <div className="f-1-sm f-2 py-3 px-1">Số sản phẩm</div>
                  <div className="f-2 py-3 px-1">Trạng thái</div>
                  <div className="f-2 py-3 px-1">Tổng tiền</div>
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
                  <div
                    className={`${styles["image"]} f-1 py-3 align-items-center`}
                  ></div>
                  <div className={`f-3  py-3 d-flex align-items-center`}>
                    <span className="f-2">65e8dd64591a4093da00314f</span>
                  </div>
                  <div className=" f-1-sm f-2 py-3 px-1 d-flex align-items-center">
                    2
                  </div>
                  <div
                    className={`d-flex py-3 f-2 px-1 d-flex align-items-center`}
                  >
                    <div
                      className={`d-flex align-items-center ${styles["wrapper-quantity"]}`}
                    >
                      <p color="success">Pending</p>
                    </div>
                  </div>
                  <div className="f-2 py-3 d-flex align-items-center">$123</div>
                </div>
              </div>
            </div>
            <div className={`${styles["coupon"]} py-5`}>
              {/* <button
            type="submit"
            className={`${styles["apply-coupon-btn"]} text-white`}
            value="Apply coupon"
          >
            Apply coupon
          </button> */}
            </div>
          </div>
        </div>
      );
    } else if (activeTab.isShowInformation) {
      return (
        <div className={`${styles.tabContent}`}>
          <div className={`${styles["cart-wrapper"]}`}>
            <div className="cart-product">
              <div className={`${styles["t-head"]} `}>
                <div className={`d-flex ${styles["th"]}`}>
                  <div className={`f-1 py-3 ${styles[""]}`}></div>
                  <div className={`f-1 py-3 ${styles["image-header"]}`}></div>
                  <div className="f-3 py-3">Mã gọi món</div>
                  <div className="f-1-sm f-2 py-3 px-1">Số sản phẩm</div>
                  <div className="f-2 py-3 px-1">Trạng thái</div>
                  <div className="f-2 py-3 px-1">Tổng tiền</div>
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
                  <div
                    className={`${styles["image"]} f-1 py-3 align-items-center`}
                  ></div>
                  <div className={`f-3  py-3 d-flex align-items-center`}>
                    <span className="f-2">65e8dd64591a4093da00314f</span>
                  </div>
                  <div className=" f-1-sm f-2 py-3 px-1 d-flex align-items-center">
                    2
                  </div>
                  <div
                    className={`d-flex py-3 f-2 px-1 d-flex align-items-center`}
                  >
                    <div
                      className={`d-flex align-items-center ${styles["wrapper-quantity"]}`}
                    >
                      <p color="success">Access</p>
                    </div>
                  </div>
                  <div className="f-2 py-3 d-flex align-items-center">$123</div>
                </div>
              </div>
            </div>
            <div className={`${styles["coupon"]} py-5`}>
              {/* <button
            type="submit"
            className={`${styles["apply-coupon-btn"]} text-white`}
            value="Apply coupon"
          >
            Apply coupon
          </button> */}
            </div>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="position-relative">
      <Navbar />
      <Banner title={`Lịch sử gọi món`} />

      <div className={styles.tabContainer}>
        <div className={styles.tabCtroll}>
          <div
            className={`${styles["tab"]} ${
              activeTab.isShowDescription ? styles["active"] : ""
            } text-uppercase`}
            onClick={() => {
              setActiveTab({
                isShowInformation: false,
                isShowReview: false,
                isShowDescription: true,
              });
            }}
          >
            Tất cả
          </div>
          <div
            className={`${styles["tab"]} ${
              activeTab.isShowInformation ? styles["active"] : ""
            }text-uppercase`}
            onClick={() => {
              setActiveTab({
                isShowDescription: false,
                isShowInformation: true,
                isShowReview: false,
              });
            }}
          >
            PENDING
          </div>
        </div>
        {renderTabs()}
      </div>
      <Footer />
    </div>
  );
}
