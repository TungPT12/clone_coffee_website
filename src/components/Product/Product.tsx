import CarouselProduct from "../CarouselProduct/CarouselProduct";
import styles from "./Product.module.scss";
const Product = () => {
  return (
    <>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["header"]}`}>
          <h2 className={`${styles["title-big"]} wpb_wrapper`}>MENU GRADEN</h2>
          <img
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
            alt=""
          />
          <div className={`w-100 d-flex justify-content-center`}>
            <h6 className={`${styles["sub"]} wpb_wrapper w-50`}>
              This is menu for customer choose one and payment
            </h6>
          </div>
        </div>
        <div className={`${styles["mobile-product"]}`}>
          <div
            className={`position-relative ${styles["wrapper-add-to-cart"]} w-100 d-flex justify-content-center text-center px-3`}
          >
            <img
              className={`w-100 ${styles["image-product"]} h-100`}
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
          <div
            className={`position-relative ${styles["wrapper-add-to-cart"]} w-100 d-flex justify-content-center text-center px-3`}
          >
            <img
              className={`w-100 ${styles["image-product"]} h-100`}
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
          <div
            className={`position-relative ${styles["wrapper-add-to-cart"]} w-100 d-flex justify-content-center text-center px-3`}
          >
            <img
              className={`w-100 ${styles["image-product"]} h-100`}
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
        </div>
        <div className={`${styles["desk-product"]} overflow-hidden`}>
          <div className={`overflow-hidden`}>
            <h2 className={`${styles["title-category"]} `}>Coffee</h2>
            <CarouselProduct />
          </div>
          <div className={`overflow-hidden`}>
            <h2 className={`${styles["title-category"]} `}>Tea</h2>
            <CarouselProduct />
          </div>
          <div className={`overflow-hidden`}>
            <h2 className={`${styles["title-category"]} `}>Break Fast</h2>
            <CarouselProduct />
          </div>
          <div className={`overflow-hidden`}>
            <h2 className={`${styles["title-category"]} `}>Drinks</h2>
            <CarouselProduct />
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
