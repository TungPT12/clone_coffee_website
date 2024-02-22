import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./Shop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategoryAPI } from "@/api/category";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
const Shop = () => {
  const { token } = useSelector((state: RootState) => state.authn);
  const [categories, setCategories] = useState([]);

  const getCategories = (token: string) => {
    getCategoryAPI(token)
      .then((response: any) => {
        if (response.state !== 200) {
          throw new Error("Lỗi");
        }
        const data = response.data;
        return data;
      })
      .then((data: any) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderCategories = (categories: any) => {
    return categories.map((category: any, index: number) => {
      return <span key={category._id}>coffee house</span>;
    });
  };

  useEffect(() => {
    getCategories(token);
  }, [token]);

  return (
    <div className="position-relative">
      <Navbar />
      <Banner title={`shop`} />
      <div className={`${styles["cart-wrapper"]} mt-4 pb-5`}>
        <div className="row">
          <div className={`${styles["cart"]} col-10`}>
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
            <div className={`${styles["list-product"]} row`}>
              <div className={`${styles["product-item"]} col-4`}>
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
                  <Link
                    href={`/product/${1}`}
                    className={`w-100 text-center mt-2 text-decoration-none `}
                  >
                    <h5 className={`${styles["tiltle"]}`}>TYPES OF COFFEE</h5>
                    <h6 className={`${styles["sub-text"]}`}>$15.00</h6>
                  </Link>
                </div>
              </div>
              <div className={`${styles["product-item"]} col-4`}>
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
                  <Link
                    href={`/product/${1}`}
                    className={`w-100 text-center mt-2 text-decoration-none `}
                  >
                    <h5 className={`${styles["tiltle"]}`}>TYPES OF COFFEE</h5>
                    <h6 className={`${styles["sub-text"]}`}>$15.00</h6>
                  </Link>
                </div>
              </div>
              <div className={`${styles["product-item"]} col-4`}>
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
                  <Link
                    href={`/product/${1}`}
                    className={`w-100 text-center mt-2 text-decoration-none `}
                  >
                    <h5 className={`${styles["tiltle"]}`}>TYPES OF COFFEE</h5>
                    <h6 className={`${styles["sub-text"]}`}>$15.00</h6>
                  </Link>
                </div>
              </div>
              <div className={`${styles["product-item"]} col-4`}>
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
                  <Link
                    href={`/product/${1}`}
                    className={`w-100 text-center mt-2 text-decoration-none `}
                  >
                    <h5 className={`${styles["tiltle"]}`}>TYPES OF COFFEE</h5>
                    <h6 className={`${styles["sub-text"]}`}>$15.00</h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.paging}>
              <span className={`${styles.icon} ${styles.smallerIcon}`}>
                &#8249;
              </span>
              <div className={styles.pagingItem}>
                <span>1</span>
              </div>
              <div className={styles.pagingItem}>
                <span>2</span>
              </div>
              <span className={`${styles.icon} ${styles.smallerIcon}`}>
                &#8250;
              </span>
            </div>
          </div>
          <div className={`${styles["category-item"]} col-2`}>
            <div>
              <span className={`${styles["title-category"]} text-uppercase`}>
                product categorys
              </span>
              <div className={`${styles["category"]} text-capitalize`}>
                {/* <span>coffee house</span>
                <span>Drink</span>
                <span>Breakfast</span>
                <span>Tea</span> */}
                {renderCategories(categories)}
              </div>
            </div>
            {/* <div className={`${styles["tag-category"]} text-uppercase`}>
              <span className={`${styles["title-category"]}`}>
                PRODUCT TAGS
              </span>
              <div className={`${styles["tag-tile-category"]} text-capitalize`}>
                <span>Coffee</span>
                <span>Drink</span>
                <span>Breakfast</span>
                <span>Tea</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Shop;
