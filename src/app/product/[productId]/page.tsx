import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./Product.module.scss";

import Footer from "@/components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Tabs from "@/components/Tab/Tab";
const Shop = () => {
  return (
    <div className="position-relative">
      <Navbar />
      <Banner title={`product Detail`} />
      <div className={`${styles["cart-wrapper"]} mt-4 pb-5`}>
        <div className="row">
          <div className="col-6">
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
                ></div>
              </div>
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
                    ></div>
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
                    ></div>
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
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div>
              <span className={`${styles["title-category"]} text-uppercase`}>
                ETHIOPIA COFFEE
              </span>
              <div className={`${styles["category"]} text-capitalize`}>
                <span>$15.00</span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  (1 customer review)
                </span>
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </span>

                <span className={`${styles.spanButton} d-flex`}>
                  <div className={`${styles.buttonQuality}`}>
                    <button
                      className={`${styles.button} ${styles.plusButton}`}
                      type="button"
                    >
                      +
                    </button>
                    <input
                      defaultValue={0}
                      min={0}
                      max={10}
                      className={`${styles.qualityInput} text-uppercase h-0`}
                      type="number"
                    />
                    <button
                      className={`${styles.button} ${styles.minusButton}`}
                      type="button"
                    >
                      -
                    </button>
                  </div>
                  <div className="d-flex">
                    <button
                      className={`${styles["add-to-cart-btn"]} ${styles.minusButton}`}
                      type="button"
                    >
                      Add to cart
                    </button>
                  </div>
                </span>
              </div>
            </div>
            <div className={`${styles["tag-category"]} text-uppercase`}>
              <div className={`${styles["tag-tile-category"]} text-capitalize`}>
                <span>SKU: PR111</span>
                <span>CATEGORY: Fresh Coffee</span>
                <span>TAGS: Black, Casual, Classic</span>
              </div>
              <div>
                <Tabs />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles["related-product"]}`}>
          <h1 className={`${styles["title-category"]} text-uppercase`}>
            RELATED PRODUCTS
          </h1>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Shop;
