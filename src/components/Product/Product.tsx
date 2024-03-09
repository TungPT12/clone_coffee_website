/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import CarouselProduct from "../CarouselProduct/CarouselProduct";
import styles from "./Product.module.scss";
import { getCategoryAPI } from "@/services/category";
import useSWR from "swr";
import categoryService from "@/services/category/category.service";
import { KoHo } from "next/font/google";
const Product = () => {
  const { data: categories } = useSWR("GET_CATEGORY", categoryService.getAll);
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

  // useEffect(() => {
  //   getCategories();
  // }, []);

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
          <div className={`${styles["wrapper-add-to-cart"]}`}>
            <img
              className={`w-100 ${styles["image-product"]} h-100`}
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png"
            />
            <div
              className={`${styles["overlay-add-to-cart"]} d-flex justify-content-center align-items-center h-100 w-100 top-0`}
            >
              <h1 className={`${styles["title-product"]}`}>coffee</h1>
              <span className={`${styles["title-price"]}`}>$15.00</span>
              <button
                className={`${styles["add-to-cart-btn"]} border-0 text-uppercase `}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles["desk-product"]} overflow-hidden`}>
          {renderCategories(categories ? categories : [])}
        </div>
      </div>
    </>
  );
};
export default Product;
