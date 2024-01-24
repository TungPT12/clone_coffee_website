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
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .7s"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="d-flex justify-content-center mx-4"
    >
      <div
        className={`${styles["product"]} h-100 d-flex justify-content-center flex-column align-items-center w-75`}
      >
        <div
          className={`position-relative ${styles["wrapper-add-to-cart"]} w-100 d-flex justify-content-center text-center px-3`}
        >
          <img
            className={` w-100 ${styles["image-product"]} h-100`}
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
      <div
        className={`${styles["product"]} h-100 d-flex justify-content-center flex-column align-items-center w-75`}
      >
        <div
          className={`position-relative ${styles["wrapper-add-to-cart"]} w-100 d-flex justify-content-center text-center px-3`}
        >
          <img
            className={` w-100 ${styles["image-product"]} h-100`}
            src="data:image/jpeg;base64,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"
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
      <div
        className={`${styles["product"]} h-100 d-flex justify-content-center flex-column align-items-center w-75`}
      >
        <div
          className={`position-relative ${styles["wrapper-add-to-cart"]} w-100 d-flex justify-content-center text-center px-3`}
        >
          <img
            className={` w-100 ${styles["image-product"]} h-100`}
            src="https://media.istockphoto.com/id/1303583671/vi/anh/t%C3%A1ch-c%C3%A0-ph%C3%AA-v%E1%BB%9Bi-kh%C3%B3i-v%C3%A0-h%E1%BA%A1t-c%C3%A0-ph%C3%AA-tr%C3%AAn-n%E1%BB%81n-g%E1%BB%97-c%C5%A9.jpg?s=2048x2048&w=is&k=20&c=-lNY8zqILEeVxx0cIKKYUFeNIkzoB2GeFtk08_cqQWI="
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
      <div
        className={`${styles["product"]} h-100 d-flex justify-content-center flex-column align-items-center w-75`}
      >
        <div
          className={`position-relative ${styles["wrapper-add-to-cart"]} w-100 d-flex justify-content-center text-center px-3`}
        >
          <img
            className={` w-100 ${styles["image-product"]} h-100`}
            src="https://static.wixstatic.com/media/b16941_d28f80b43bf44335a4427555bcfc0257~mv2.jpg/v1/fill/w_640,h_816,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b16941_d28f80b43bf44335a4427555bcfc0257~mv2.jpg"
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
      <div
        className={`${styles["product"]} h-100 d-flex justify-content-center flex-column align-items-center w-75`}
      >
        <div
          className={`position-relative ${styles["wrapper-add-to-cart"]} w-100 d-flex justify-content-center text-center px-3`}
        >
          <img
            className={` w-100 ${styles["image-product"]} h-100`}
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
    </Carousel>
  );
}

export default CarouselProduct;
