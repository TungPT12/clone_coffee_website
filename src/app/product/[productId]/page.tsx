/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./Product.module.scss";
import Footer from "@/components/Footer/Footer";
import Tabs from "@/components/Tab/Tab";
import { useParams } from "next/navigation";
import productService from "@/services/product/product.service";
import useSWR, { mutate } from "swr";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "@/lib/slice/features/cart/cartSlice";

const ProductDetail = () => {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState("N_active");
  // const [activeSize, setActiveSize] = useState({
  //   N: true,
  //   M: false,
  //   L: false,
  // });
  const dispatch = useDispatch();

  const { data: product } = useSWR("GET_PRODUCT_DETAIL", () => {
    return params.productId
      ? productService.getProductId(params.productId.toString())
      : null;
  });
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentSize, setCurrentSize] = useState("N");

  const [currentImage, setCurrentImage] = useState("");

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const renderSize = (prices: any) => {
    return prices.map((price: any) => {
      return (
        <span
          key={price._id}
          onClick={() => {
            setActiveSize(`${price.size}_active`);
            setCurrentPrice(price.new_price);
            setCurrentSize(price.size);
          }}
          className={`${styles["sizeProduct"]} ${
            activeSize === `${price.size}_active` ? styles[activeSize] : ""
          }`}
        >
          {price.size}
        </span>
      );
    });
  };

  useEffect(() => {
    setCurrentPrice(product?.price_new ? product?.price_new : 0);
    setCurrentImage(
      product ? (product.images.length !== 0 ? product?.images[0] : "") : ""
    );
  }, [product]);

  const handleAddToCart = (product: any) => {
    dispatch(cartActions.addProductToCart(product));
    alert("Thêm giỏ hàng thành công");
  };

  const renderListImageProducts = (images: any) => {
    return images.map((image: any, index: number) => {
      return (
        <div key={index} className="col-4 mt-4">
          <div className={`${styles["product"]} h-100 w-75`}>
            <div
              onClick={() => {
                setCurrentImage(image);
              }}
              className={`position-relative h-100 ${styles["wrapper-add-to-cart"]}`}
            >
              <img
                className={`w-100 h-100 ${styles["image-product"]}`}
                src={
                  image.includes("http")
                    ? image
                    : `${process.env.NEXT_PUBLIC_BASE_URL}${image}`
                }
              />
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="position-relative">
      <Navbar />
      <Banner title={`product Detail`} />
      <div className={`${styles["cart-wrapper"]} mt-4 pb-5`}>
        <div className={`${styles["contai"]} row`}>
          <div className={`${styles["image"]} col-lg-6 col-md-1`}>
            <div className={`${styles["product"]} w-100`}>
              <div
                className={`position-relative ${styles["wrapper-add-to-cart"]}`}
              >
                <img
                  className={` ${styles["image-product"]}`}
                  src={
                    currentImage
                      ? currentImage.includes("http")
                        ? currentImage
                        : `${process.env.NEXT_PUBLIC_BASE_URL}${product?.images[0]}`
                      : ""
                  }
                  alt={product?.name}
                />
                <div
                  className={`${styles["overlay-add-to-cart"]} d-flex justify-content-center align-items-center h-100 w-100 position-absolute top-0`}
                ></div>
              </div>
            </div>
            <div className="row">
              {renderListImageProducts(product?.images ? product?.images : [])}
            </div>
          </div>

          <div className={`${styles["detail"]} col-lg-6 col-md-1`}>
            <div className={`${styles["product-list"]}`}>
              <span className={`${styles["title-category"]} text-uppercase`}>
                {product?.name}
              </span>
              <div className={`${styles["category"]} text-capitalize`}>
                <span className={`${styles["price"]}`}>{currentPrice} VND</span>
                {/* <span>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  (1 customer review)
                </span> */}
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </span>

                <div className={`${styles["product-size"]}`}>
                  Size sản phẩm
                  {renderSize(product?.prices ? product?.prices : [])}
                  <span
                    onClick={(event) => {
                      setCurrentPrice(product ? product.price_new : 0);
                      setCurrentSize("N");
                      setActiveSize("N_active");
                      setCurrentPrice(
                        product?.price_new ? product?.price_new : 0
                      );
                    }}
                    className={`${styles["sizeProduct"]} ${
                      activeSize === "N_active" ? styles[activeSize] : ""
                    }`}
                  >
                    N
                  </span>
                </div>

                <span className={`${styles.spanButton} d-flex mt-2`}>
                  <div className={`d-flex   align-items-center`}>
                    <div
                      className={`d-flex align-items-center ${styles["wrapper-quantity"]}`}
                    >
                      <input
                        className={`${styles["input-quantity"]}`}
                        value={quantity}
                      />
                      <div
                        className={`d-flex flex-column ${styles["wrapper-btn"]} align-items-center h-100 justify-content-center`}
                      >
                        <button
                          onClick={increaseQuantity}
                          className={` ${styles["increase-btn"]}`}
                        >
                          +
                        </button>
                        <button
                          onClick={decreaseQuantity}
                          className={` ${styles["decrease-btn"]}`}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-uppercase h-100">
                    <button
                      onClick={() =>
                        handleAddToCart({
                          ...product,
                          productId: product?._id,
                          price_new: currentPrice,
                          quantity: quantity,
                          size: currentSize,
                        })
                      }
                      className={`${styles["add-to-cart-btn"]} ${styles.minusButton} h-100`}
                      type="button"
                    >
                      Add to cart
                    </button>
                  </div>
                </span>
              </div>
            </div>
            <div className={`${styles["tag-category"]} `}>
              <div className={`${styles["tag-tile-category"]} text-capitalize`}>
                <span>SKU: PR111</span>
                <span>CATEGORY: {product?.category}</span>
                <span>TAGS: Black, Casual, Classic</span>
              </div>
              <div className="mt-3">
                <Tabs />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles["related-product"]}`}>
          <h1 className={`${styles["title-category"]} text-uppercase`}>
            RELATED PRODUCTS
          </h1>
          <div className={`${styles["title-product"]} row`}>
            <div className="col-lg-3">
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
            <div className="col-lg-3">
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
            <div className="col-lg-3">
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
            <div className="col-lg-3">
              <div className={`${styles["product"]} w-100`}>
                <div
                  className={`position-relative ${styles["wrapper-add-to-cart"]}`}
                >
                  <img
                    className={`${styles["image-product"]}`}
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
export default ProductDetail;
