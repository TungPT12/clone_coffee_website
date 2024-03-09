/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./Shop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getCategoryAPI } from "@/services/category";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import ProductCard from "@/components/ProductCard/ProductCard";
import { getProductsAPI, getProductsByCategoryAPI } from "@/services/product";
import useSWR, { mutate } from "swr";
import paging from "@/utils/paging";
import categoryService from "@/services/category/category.service";
import productService from "@/services/product/product.service";
import { Product } from "@/types/entities/product.entity";
import Modal from "@/components/Modal/Modal";

const Shop = () => {
  const { data: categories } = useSWR("GET_CATEGORY", categoryService.getAll);
  const { data: productByCategory } = useSWR("GET_PRODUCT_BY_CATGORY", () => {
    return categoryService.getProductByCatgory(filterCatgory);
  });
  const { data: products } = useSWR("GET_PRODUCT", productService.getAll);

  const [totalProducts, setTotalProducts] = useState<Product[]>([]);
  const [filterCatgory, setFilterCatgory] = useState<string>("");
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const numberProducts = useMemo(() => 6, []);

  // const { data, error, isMutating } = useSWRMutation();

  // const fetcher = async (url: string, token: string) => {
  //   console.log(token);
  //   const response = await axiosInstance.get(url, {
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   });
  //   return response;
  // };

  const renderCategories = (categories: any) => {
    return categories?.map((category: any) => {
      return (
        <span
          className={`${styles["category"]}`}
          key={category._id}
          onClick={() => setFilterCatgory(category.name)}
        >
          {category.name}
        </span>
      );
    });
  };

  const renderCurrentProducts = (currentProducts: any) => {
    return currentProducts.map((currentProduct: any) => {
      return (
        <ProductCard
          key={currentProduct._id}
          id={currentProduct._id}
          imageUrl={currentProduct.images[0]}
          name={currentProduct.name}
          price={currentProduct.price_new}
        />
      );
    });
  };

  useEffect(() => {
    setCurrentProducts(() => {
      return paging(totalProducts, numberProducts, currentPage);
    });
  }, [totalProducts, currentPage]);

  const renderPage = (totalProducts: any) => {
    let pages = [];
    for (
      let index = 0;
      index < Math.ceil(totalProducts.length / numberProducts);
      index++
    ) {
      pages.push(
        <div
          onClick={() => {
            setCurrentPage(index + 1);
          }}
          className={styles.pagingItem}
        >
          <span>{index + 1}</span>
        </div>
      );
    }
    return pages;
  };

  useEffect(() => {
    console.log(filterCatgory);
    if (filterCatgory) {
      mutate("GET_PRODUCT_BY_CATGORY");
      setTotalProducts(productByCategory ? productByCategory[0].products : []);
    } else {
      setTotalProducts(products ? products : []);
    }
  }, [filterCatgory, products, productByCategory]);

  return (
    <div className="position-relative">
      <Modal>
        <div>sdsfdsf</div>
      </Modal>
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
            <div className={`${styles["list-product"]} row g-lg-5 mt-1`}>
              {renderCurrentProducts(currentProducts)}
            </div>
            <div className={styles.paging}>
              <span className={`${styles.icon} ${styles.smallerIcon}`}>
                &#8249;
              </span>
              {renderPage(totalProducts)}
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
                <span
                  onClick={() => {
                    setFilterCatgory("");
                  }}
                >
                  Tất cả
                </span>
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
