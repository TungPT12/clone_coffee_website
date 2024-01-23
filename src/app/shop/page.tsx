import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./Shop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer/Footer";
const Shop = () => {
  return (
    <div className="position-relative">
      <Navbar />
      <Banner title={`shop`} />
      <div className={`${styles["cart-wrapper"]} mt-4 pb-5`}>
        <div className="row">
          <div className="col-10">
            <div className={styles["search-container"]}>
              <input
                type="text"
                className={styles["search-input"]}
                placeholder="Search"
              />
              <span className={styles["search-icon"]}>
                <FontAwesomeIcon
                  icon={faSearch}
                  className={`fa fa-search ${styles["fa-search"]}`}
                />
              </span>
            </div>
            <div className="row">
              <div className="col-4">
                <div className={`${styles["product"]} w-100`}>
                  <div
                    className={`position-relative ${styles["wrapper-add-to-cart"]}`}
                  >
                    <img
                      className={`w-100 ${styles["image-product"]}`}
                      src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png"
                    />
                    <div
                      className={`${styles["overlay-add-to-cart"]} d-flex justify-content-center align-items-center h-100 w-100 position-absolute top-0`}
                    >
                      <button
                        className={`${styles["add-to-cart-btn"]} border-0 text-uppercase `}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className={`w-100 text-center mt-2`}>
                    <h5 className={`${styles["tiltle"]}`}>TYPES OF COFFEE</h5>
                    <h6 className={`${styles["sub-text"]}`}>$15.00</h6>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={`${styles["product"]} w-100`}>
                  <div
                    className={`position-relative ${styles["wrapper-add-to-cart"]}`}
                  >
                    <img
                      className={`w-100 ${styles["image-product"]}`}
                      src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png"
                    />
                    <div
                      className={`${styles["overlay-add-to-cart"]} d-flex justify-content-center align-items-center h-100 w-100 position-absolute top-0`}
                    >
                      <button
                        className={`${styles["add-to-cart-btn"]} border-0 text-uppercase `}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className={`w-100 text-center mt-2`}>
                    <h5 className={`${styles["tiltle"]}`}>TYPES OF COFFEE</h5>
                    <h6 className={`${styles["sub-text"]}`}>$15.00</h6>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={`${styles["product"]} w-100`}>
                  <div
                    className={`position-relative ${styles["wrapper-add-to-cart"]}`}
                  >
                    <img
                      className={`w-100 ${styles["image-product"]}`}
                      src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png"
                    />
                    <div
                      className={`${styles["overlay-add-to-cart"]} d-flex justify-content-center align-items-center h-100 w-100 position-absolute top-0`}
                    >
                      <button
                        className={`${styles["add-to-cart-btn"]} border-0 text-uppercase `}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className={`w-100 text-center mt-2`}>
                    <h5 className={`${styles["tiltle"]}`}>TYPES OF COFFEE</h5>
                    <h6 className={`${styles["sub-text"]}`}>$15.00</h6>
                  </div>
                </div>
              </div>
              <div className="col-4">
                {" "}
                <div className={`${styles["product"]} w-100`}>
                  <div
                    className={`position-relative ${styles["wrapper-add-to-cart"]}`}
                  >
                    <img
                      className={`w-100 ${styles["image-product"]}`}
                      src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png"
                    />
                    <div
                      className={`${styles["overlay-add-to-cart"]} d-flex justify-content-center align-items-center h-100 w-100 position-absolute top-0`}
                    >
                      <button
                        className={`${styles["add-to-cart-btn"]} border-0 text-uppercase `}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className={`w-100 text-center mt-2`}>
                    <h5 className={`${styles["tiltle"]}`}>TYPES OF COFFEE</h5>
                    <h6 className={`${styles["sub-text"]}`}>$15.00</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles["pagination"]} pagination d-flex justify-content-center`}
            >
              <a href="#" className="page-link active">
                1
              </a>
              <a href="#" className="page-link">
                2
              </a>
              <a href="#" className="page-link">
                3
              </a>
            </div>
          </div>
          <div className="col-2">
            <div>
              <span className={`${styles["title-category"]}`}>
                PRODUCT CATEGORIES
              </span>
              <div className={`${styles["category"]}`}>
                <span>Coffee</span>
                <span>Drink</span>
                <span>Breakfast</span>
                <span>Tea</span>
              </div>
            </div>
            <div className={`${styles["tag-category"]}`}>
              <span className={`${styles["title-category"]}`}>PRODUCT TAG</span>
              <div className={`${styles["tag-tile-category"]}`}>
                <span>Coffee,</span>
                <span>Drink,</span>
                <span>Breakfast,</span>
                <span>Tea.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Shop;
