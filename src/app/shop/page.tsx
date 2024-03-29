/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./Shop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import useSWR, { mutate } from "swr";
import paging from "@/utils/paging";
import categoryService from "@/services/category/category.service";
import productService from "@/services/product/product.service";
import { Product } from "@/types/entities/product.entity";
import { useParams, useSearchParams } from "next/navigation";
import useDebounced from "@/hooks/useDebounced";

const Shop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  const { data: categories } = useSWR("GET_CATEGORY", categoryService.getAll);
  const { data: productByCategory } = useSWR("GET_PRODUCT_BY_CATGORY", () => {
    return categoryService.getProductByCatgory(search ? search : "");
  });
  const { data: products } = useSWR("GET_PRODUCT", productService.getAll);
  const params = useParams();
  const [totalProducts, setTotalProducts] = useState<Product[]>([]);
  // const [totalCurrentTotalProducts, setCurrentTotalProducts] = useState<Product[]>([]);
  const [filterCatgory, setFilterCatgory] = useState<string>("");
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const numberProducts = useMemo(() => 6, []);
  const [searchValue, setSearchValue] = useState("");
  const refToShop = useRef<any>();

  const handleSearchChange = (event: any) => {
    if (event.target.value.trim()) setSearchValue(event.target.value);
    else setSearchValue(event.target.value.trim());
  };

  // const filteredProducts = currentProducts.filter((product) => {
  //   return product.name.toLowerCase().includes(searchValue.toLowerCase());
  // });
  const debounced = useDebounced(searchValue, 1000);
  useEffect(() => {
    // const waitForSearch = setTimeout(() => {
    setCurrentPage(1);
    if (debounced) {
      const filteredProducts = products?.filter((product) => {
        return product.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setTotalProducts(filteredProducts ? filteredProducts : []);
    } else {
      setTotalProducts(products ? products : []);
    }
    // }, 1000);

    // return () => {
    //   clearTimeout(waitForSearch);
    // };
  }, [debounced]);

  useEffect(() => {
    if (params) {
      const targetElement = document.getElementById(params.toString());
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [params]);

  useEffect(() => {
    refToShop.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const renderCategories = (categories: any) => {
    return categories?.map((category: any) => {
      return (
        <Link
          href={`/shop?category=${category.name}`}
          className={`${styles["category"]}`}
          key={category._id}
          onClick={() => setFilterCatgory(category.name)}
        >
          {category.name}
        </Link>
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
          price_new={currentProduct.price_new}
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
    if (search) {
      mutate("GET_PRODUCT_BY_CATGORY");
      let productsLits: Product[] = [];
      productsLits = productByCategory
        ? productByCategory.length !== 0
          ? productByCategory[0].products
            ? productByCategory[0].products
            : []
          : []
        : [];
      setTotalProducts(productsLits);
      setCurrentPage(1);
    } else {
      setCurrentPage(1);
      setTotalProducts(products ? products : []);
    }
  }, [products, productByCategory, search]);

  return (
    <div className="position-relative">
      <Navbar />
      <Banner title={`shop`} />
      <div className={`${styles["cart-wrapper"]} mt-4 pb-5`}>
        <div className="row">
          <div ref={refToShop} className={`${styles["cart"]} col-10`}>
            <div className={styles["search-container"]}>
              <input
                type="text"
                className={styles["search-input"]}
                placeholder="Search"
                value={searchValue}
                onChange={handleSearchChange}
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
                <Link
                  style={{ textDecoration: "none", color: "#be9c79" }}
                  href={"/shop"}
                  onClick={() => {
                    setFilterCatgory("");
                  }}
                >
                  Tất cả
                </Link>
                {renderCategories(categories)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Shop;
