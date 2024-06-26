/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import CarouselProduct from "../CarouselProduct/CarouselProduct";
import styles from "./Product.module.scss";
import useSWR from "swr";
import categoryService from "@/services/category/category.service";
import productService from "@/services/product/product.service";
import { useDispatch } from "react-redux";
import { cartActions } from "@/lib/slice/features/cart/cartSlice";
import BillCart from "../BillCart/BillCart";
import Link from "next/link";
import { Translation } from "react-i18next";
const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: categories } = useSWR("GET_CATEGORY", categoryService.getAll);
  const { data: products } = useSWR("GET_PRODUCT", productService.getAll);
  const dispatch = useDispatch();
  const DefaultImage =
    "https://q8laser.com/wp-content/uploads/2021/08/ly-cafe-vector.jpg";
  const handleImageError = (event: any) => {
    event.target.src = DefaultImage;
  };
  const handleAddToCart = (product: any) => {
    setIsOpen(true);
    dispatch(cartActions.addProductToCart(product));
  };
  const renderCategories = (categories: any) => {
    return categories.map((category: any) => {
      return (
        <div key={category._id} className={`overflow-hidden`}>
          <h2 className={`${styles["title-category"]} `}>{category.name}</h2>
          <CarouselProduct products={category?.products} />
        </div>
      );
    });
  };

  const renderProduct = (products: any) => {
    return products.map((product: any) => {
      return (
        <div key={product._id} className={`${styles["wrapper-add-to-cart"]}`}>
          <div style={{ width: "100%" }}>
            <img
              className={`w-100 ${styles["image-product"]} h-100`}
              src={
                product?.images[0]?.includes("http")
                  ? product?.images[0]
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/${product?.images[0]}`
              }
              loading="lazy"
              onError={handleImageError}
            />
          </div>
          <div
            className={`${styles["overlay-add-to-cart"]} d-flex justify-content-center align-items-center h-100 w-100 top-0`}
          >
            <Link
              href={`/product/${product?._id}`}
              className={`${styles["tiltle"]}`}
            >
              {product?.name}
            </Link>

            <span
              className={`${styles["sub-text"]} ${styles["new-price"]} tex`}
            >
              {product?.price_original} VND
            </span>
            <span className={`${styles["title-price"]} mt-2`}>
              {product.price_new}VND
            </span>
            <button
              onClick={() => {
                handleAddToCart({
                  ...product,
                  quantity: 1,
                  size: "N",
                  productId: product._id,
                });
              }}
              className={`${styles["add-to-cart-btn"]} mb-2 border-0 text-uppercase `}
            >
              Add to cart
            </button>
          </div>
          <BillCart
            isOpenCart={isOpen}
            setIsOpenCart={() => {
              setIsOpen(false);
            }}
          />
        </div>
      );
    });
  };
  // useEffect(() => {
  //   getCategories();
  // }, []);

  return (
    <>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["header"]}`}>
          <Translation>
            {(t) => (
              <h2 className={`${styles["title-big"]} wpb_wrapper`}>
                {t("MENU")}
              </h2>
            )}
          </Translation>
          <picture>
            <img
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
              alt=""
            />
          </picture>
          <div className={`w-100 d-flex justify-content-center`}>
            <h6 className={`${styles["sub"]} wpb_wrapper w-50`}>
              This is menu for customer choose one and payment
            </h6>
          </div>
        </div>
        <div className={`${styles["mobile-product"]}`}>
          {renderProduct(products ? products : [])}
        </div>
        <div className={`${styles["desk-product"]} overflow-hidden`}>
          {renderCategories(categories ? categories : [])}
        </div>
      </div>
    </>
  );
};
export default Product;
