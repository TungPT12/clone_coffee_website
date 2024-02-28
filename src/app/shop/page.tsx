"use client";
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
import ProductCard from "@/components/ProductCard/ProductCard";
import { getProductsAPI } from "@/api/product";
import useSWR from "swr";
import axiosInstance from "@/config/axios";
// import useSWRMutation from "swr/mutation";

const Shop = () => {
  const { token } = useSelector((state: RootState) => state.authn);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
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

  // const { data } = useSWR("/category", (url: string) => {
  //   return fetcher(url, token);
  // });
  // console.log(data);
  // const getCategorys = async (url: string) => {
  //   await fetch();
  // };
  const getCategories = (token: string) => {
    getCategoryAPI(token)
      .then((response: any) => {
        if (response.status !== 200) {
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

  const getProducts = (token: string) => {
    getProductsAPI(token)
      .then((response: any) => {
        if (response.status !== 200) {
          throw new Error("Lỗi");
        }
        const data = response.data;
        return data;
      })
      .then((data: any) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderCategories = (categories: any) => {
    return categories.map((category: any) => {
      return <span key={category._id}>{category.name}</span>;
    });
  };

  const renderProducts = (products: any) => {
    return products.map((product: any) => {
      return (
        <ProductCard
          key={product._id}
          id={product._id}
          imageUrl={product.images[0]}
          name={product.name}
          price={product.price_original}
        />
      );
    });
  };

  useEffect(() => {
    getCategories(token);
    getProducts(token);
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
            <div className={`${styles["list-product"]} row g-lg-5`}>
              {renderProducts(products)}
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
