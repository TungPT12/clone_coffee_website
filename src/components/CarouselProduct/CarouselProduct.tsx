"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./Carousel.module.scss";

function CarouselProduct() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      className="d-flex justify-content-between gap-2"
      swipeable={true}
      draggable={true}
      //   showDots={true}
      autoPlay
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .7s"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="d-flex justify-content-center mx-4"
    >
      <div className={`${styles["product"]} w-100`}>
        <div className={`position-relative ${styles["wrapper-add-to-cart"]}`}>
          <img
            className={`w-100 ${styles["image-product"]}`}
            src="https://i.pinimg.com/564x/f8/81/ad/f881ad2778cc7d7c88791e14c9419b52.jpg"
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
      <div className={`${styles["product"]} w-100`}>
        <div className={`position-relative ${styles["wrapper-add-to-cart"]}`}>
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
      <div className={`${styles["product"]} w-100`}>
        <div className={`position-relative ${styles["wrapper-add-to-cart"]}`}>
          <img
            className={`w-100 ${styles["image-product"]}`}
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-3.png"
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
      <div className={`${styles["product"]} w-100`}>
        <div className={`position-relative ${styles["wrapper-add-to-cart"]}`}>
          <img
            className={`w-100 ${styles["image-product"]}`}
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-3.png"
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
      <div className={`${styles["product"]} w-100`}>
        <div className={`position-relative ${styles["wrapper-add-to-cart"]}`}>
          <img
            className={`w-100 ${styles["image-product"]}`}
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png"
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
      <div className={`${styles["product"]} w-100`}>
        <div className={`position-relative ${styles["wrapper-add-to-cart"]}`}>
          <img
            className={`w-100 ${styles["image-product"]}`}
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png"
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
      <div className={`${styles["product"]} w-100`}>
        <div className={`position-relative ${styles["wrapper-add-to-cart"]}`}>
          <img
            className={`w-100 ${styles["image-product"]}`}
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png"
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
      <div className={`${styles["product"]} w-100`}>
        <div className={`position-relative ${styles["wrapper-add-to-cart"]}`}>
          <img
            className={`w-100 ${styles["image-product"]}`}
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png"
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
      <div className={`${styles["product"]} w-100`}>
        <div className={`position-relative ${styles["wrapper-add-to-cart"]}`}>
          <img
            className={`w-100 ${styles["image-product"]}`}
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png"
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
      <div className={`${styles["product"]} w-100`}>
        <div className={`position-relative ${styles["wrapper-add-to-cart"]}`}>
          <img
            className={`w-100 ${styles["image-product"]}`}
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png"
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
    </Carousel>
  );
}

export default CarouselProduct;
