/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Carousel.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "@/lib/slice/features/cart/cartSlice";
import BillCart from "../BillCart/BillCart";
// import { useCartContext } from "../Context/CartContext";

function CarouselProduct({ products }: any) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [orderData, setOrder] = useState(null);

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

  const handleAddToCart = (product: any) => {
    setIsOpen(true);
    dispatch(cartActions.addProductToCart(product));
  };

  const renderProducts = (products: any) => {
    return products.map((product: any, index: any) => {
      return (
        <div
          key={product._id}
          className={`${styles["product"]} h-100 d-flex justify-content-center flex-column align-items-center w-100`}
        >
          <div
            className={`position-relative ${styles["wrapper-add-to-cart"]} w-100 d-flex justify-content-center text-center px-3`}
          >
            <img
              className={`${styles["image-product"]} w-100`}
              alt={product?.name}
              src={
                product?.images[0]?.includes("http")
                  ? product?.images[0]
                  : product?.images[0]
                  ? `${process.env.NEXT_PUBLIC_BASE_URL}/${product?.images[0]}`
                  : "https://q8laser.com/wp-content/uploads/2021/08/ly-cafe-vector.jpg"
              }
              onError={handleImageError}
            />
            <div
              className={`${styles["overlay-add-to-cart"]} d-flex justify-content-center align-items-center h-100 w-100 position-absolute top-0`}
            >
              <button
                onClick={() => {
                  handleAddToCart({
                    ...product,
                    quantity: 1,
                    size: "N",
                    productId: product._id,
                  });
                }}
                className={`${styles["add-to-cart-btn"]} border-0 text-uppercase `}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className={`w-100 text-center mt-2`}>
            <Link
              href={`/product/${product?._id}`}
              className={`${styles["tiltle"]}`}
            >
              {product?.name}
            </Link>
            <h6 className={`${styles["sub-text"]} ${styles["origin-price"]}`}>
              {product?.price_original} VND
            </h6>
            <h6 className={`${styles["sub-text"]} ${styles["new-price"]}`}>
              {product?.price_new} VND
            </h6>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Carousel
        className="d-flex justify-content-center gap-2 align-items-center"
        swipeable={true}
        draggable={true}
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
        {renderProducts(products)}
      </Carousel>
      <BillCart
        isOpenCart={isOpen}
        setIsOpenCart={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}

export default CarouselProduct;
