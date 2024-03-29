"use client";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./Order.module.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClose, faEye } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BillOrder from "@/components/BillOrder/BillOrder";
import orderService from "@/services/order/order.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import useSWR, { mutate } from "swr";

export default function Cart() {
  const [activeTab, setActiveTab] = useState({
    all: true,
    pending: false,
  });
  const [isOpenBillOrder, setIsOpenBillOrder] = useState(false);
  const [listSlug, setlistSlug] = useState([]);
  const [listId, setlistId] = useState();
  const notifyFail = () => toast.error("Có lỗi xảy ra");
  const [orderData, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let item = localStorage.getItem("orderGuest");
    let slugs = localStorage.getItem("listSlug");
    if (item) {
      var myObject = JSON.parse(item);
      setlistId(myObject);
    }
    if (slugs) {
      let myObject = JSON.parse(slugs);
      setlistSlug(myObject);
    }
    // console.log(listSlug.length)
  }, []);

  const closeBillOrder = () => {
    setIsOpenBillOrder(false);
  };

  // const { data: listOrders } = useSWR("GET_LIST_ORDER", () => {
  //   return orderService.getOrdersBySlug(listSlug);
  // });
  const { data: listOrders } = useSWR("GET_LIST_ORDER", () => {
    console.log(listSlug);
    return orderService.getOrdersBySlug(listSlug);
  });

  const viewOrder = (slug: any) => {
    orderService
      .getOrder(slug.slug)
      .then((data: any) => {
        return data;
      })
      .then((data: any) => {
        setOrder(data);
        setIsOpenBillOrder(true);
      })
      .catch((error: Error) => {
        notifyFail();
      });
  };

  //   if (activeTab.all) {
  //     return (
  //       <div className={`${styles.tabContent}`}>
  //         <div className={`${styles["cart-wrapper"]}`}>
  //           <div className="cart-product">
  //             <div className={`${styles["t-head"]} `}>
  //               <div className={`d-flex ${styles["th"]}`}>
  //                 <div className={`f-1 py-3 ${styles[""]}`}></div>
  //                 <div className={`f-1 py-3 ${styles["image-header"]}`}></div>
  //                 <div className="f-3 py-3">Mã gọi món</div>
  //                 <div className="f-1-sm f-2 py-3 px-1">Số sản phẩm</div>
  //                 <div className="f-2 py-3 px-1">Trạng thái</div>
  //                 <div className="f-2 py-3 px-1">Tổng tiền</div>
  //               </div>
  //             </div>
  //             <div className={`${styles["t-body"]} `}>
  //               <div className={`${styles["t-row"]} w-100 d-flex`}>
  //                 <div
  //                   className={`f-1 py-3 pointer-event ${styles["wrap-icon-close"]} d-flex align-items-center`}
  //                 >
  //                   <FontAwesomeIcon
  //                     icon={faClose}
  //                     className={`${styles["icon-close"]}`}
  //                   />
  //                 </div>
  //                 <div
  //                   className={`${styles["image"]} f-1 py-3 align-items-center`}
  //                 ></div>
  //                 <div className={`f-3  py-3 d-flex align-items-center`}>
  //                   <span className="f-2">65e8dd64591a4093da00314f</span>
  //                 </div>
  //                 <div className=" f-1-sm f-2 py-3 px-1 d-flex align-items-center">
  //                   2
  //                 </div>
  //                 <div
  //                   className={`d-flex py-3 f-2 px-1 d-flex align-items-center`}
  //                 >
  //                   <div
  //                     className={`d-flex align-items-center ${styles["wrapper-quantity"]}`}
  //                   >
  //                     <p color="success">Pending</p>
  //                   </div>
  //                 </div>
  //                 <div className="f-2 py-3 d-flex align-items-center">$123</div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className={`${styles["coupon"]} py-5`}></div>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className={`${styles.tabContent}`}>
  //         <div className={`${styles["cart-wrapper"]}`}>
  //           <div className="cart-product">
  //             <div className={`${styles["t-head"]} `}>
  //               <div className={`d-flex ${styles["th"]}`}>
  //                 <div className={`f-1 py-3 ${styles[""]}`}></div>
  //                 <div className={`f-1 py-3 ${styles["image-header"]}`}></div>
  //                 <div className="f-3 py-3">Mã gọi món</div>
  //                 <div className="f-1-sm f-2 py-3 px-1">Số sản phẩm</div>
  //                 <div className="f-2 py-3 px-1">Trạng thái</div>
  //                 <div className="f-2 py-3 px-1">Tổng tiền</div>
  //               </div>
  //             </div>
  //             <div className={`${styles["t-body"]} `}>
  //               <div className={`${styles["t-row"]} w-100 d-flex`}>
  //                 <div
  //                   className={`f-1 py-3 pointer-event ${styles["wrap-icon-close"]} d-flex align-items-center`}
  //                 >
  //                   <FontAwesomeIcon
  //                     icon={faClose}
  //                     className={`${styles["icon-close"]}`}
  //                   />
  //                 </div>
  //                 <div
  //                   className={`${styles["image"]} f-1 py-3 align-items-center`}
  //                 ></div>
  //                 <div className={`f-3  py-3 d-flex align-items-center`}>
  //                   <span className="f-2">65e8dd64591a4093da00314f</span>
  //                 </div>
  //                 <div className=" f-1-sm f-2 py-3 px-1 d-flex align-items-center">
  //                   2
  //                 </div>
  //                 <div
  //                   className={`d-flex py-3 f-2 px-1 d-flex align-items-center`}
  //                 >
  //                   <div
  //                     className={`d-flex align-items-center ${styles["wrapper-quantity"]}`}
  //                   >
  //                     <p color="success">Access</p>
  //                   </div>
  //                 </div>
  //                 <div className="f-2 py-3 d-flex align-items-center">$123</div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className={`${styles["coupon"]} py-5`}></div>
  //         </div>
  //       </div>
  //     );
  //   }
  // };
  const renderProduct = (listOrders: any) => {
    return (
      <div>
        {listOrders?.map((slug: any, index: number) => (
          <div key={slug.slug} className={`${styles["t-row"]} w-100 d-flex`}>
            <div className="f-1 py-3 d-flex align-items-center">
              {index + 1}
            </div>
            <div className="f-1 py-3 d-flex align-items-center ">
              {slug.slug}
            </div>
            <div className="f-1 py-3 d-flex align-items-center ">
              {moment(slug.createdAt).format("YYYY-MM-DD HH:mm:ss")}
            </div>
            <div className="f-1 py-3 d-flex align-items-center ">
              {slug.total_price} VND
            </div>

            <div className="f-1 py-3 d-flex align-items-center">
              <p style={{ backgroundColor: "orange", fontWeight: "bold" }}>
                {slug.status}
              </p>
            </div>
            <div
              className={`${styles["button"]} f-1 py-3 d-flex align-items-center`}
            >
              <button
                onClick={() => {
                  viewOrder(slug);
                }}
                className={`${styles["button-view"]}`}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
        <BillOrder
          isOpen={isOpenBillOrder}
          setIsOpen={closeBillOrder}
          orderData={orderData}
        />
      </div>
    );
  };

  useEffect(() => {
    mutate("GET_LIST_ORDER");
  }, [listSlug]);

  return (
    <div className="position-relative">
      <Navbar />
      <Banner title={`Lịch sử gọi món`} />

      <div className={styles.tabContainer}>
        <div className={styles.tabCtroll}>
          {/* <div
            className={`${styles["tab"]} ${
              activeTab.all ? styles["active"] : ""
            } text-uppercase`}
            onClick={() => {
              setActiveTab({
                all: true,
                pending: false,
              });
            }}
          >
            Tất cả
          </div> */}
          {/* <div
            className={`${styles["tab"]} ${
              activeTab.pending ? styles["active"] : ""
            } text-uppercase`}
            onClick={() => {
              setActiveTab({
                all: false,
                pending: true,
              });
            }}
          >
            đang xử lý
          </div> */}
        </div>

        <div className={`${styles.tabContent}`}>
          {listOrders ? (
            <div className={`${styles["cart-wrapper"]}`}>
              <div className="cart-product">
                <div className={`${styles["t-head"]} `}>
                  <div className={`d-flex ${styles["th"]}`}>
                    <div className="f-1 py-3 d-flex align-items-center">
                      STT
                    </div>
                    <div className="f-1 py-3 d-flex align-items-center ">
                      Mã gọi món
                    </div>
                    <div className="f-1 py-3 d-flex align-items-center ">
                      Ngày tạo
                    </div>
                    <div className="f-1 py-3 d-flex align-items-center ">
                      Tổng tiền
                    </div>

                    <div className="f-1 py-3 d-flex align-items-center ">
                      Trạng thái
                    </div>
                    <div className="f-1 py-3 d-flex align-items-center ">
                      Hành động
                    </div>
                  </div>
                </div>
                <div className={`${styles["t-body"]} `}>
                  {!listOrders ? (
                    <h1>Đang load thằng ngủ chờ tí!</h1>
                  ) : (
                    renderProduct(listOrders)
                  )}
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="d-flex text-warning fw-500 align-items-center ps-2 pb-2 mb-1 pt-0  ">
                <FontAwesomeIcon
                  icon={faWarning}
                  className="icon-warning me-2"
                />
                Bạn chưa có đơn hàng nào cả
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
