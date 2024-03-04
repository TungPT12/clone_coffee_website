/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import styles from "./Category.module.scss";
import { getCategoryAPI } from "@/api/category";
const Category = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    getCategoryAPI()
      .then((response) => {
        if (response.status !== 200) {
          throw Error();
        }
        return response.data;
      })
      .then((data) => {
        setCategories(data);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const renderCategories = (categories: any) => {
    return categories.map((category: any) => {
      return (
        <div key={category._id} className={`${styles["categoy-card"]}`}>
          {/* <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-5.png"></img> */}
          <div className={`w-100 ${styles["image-category"]}`}>
            <img
              className={`w-50 h-100 ${styles["image-cate"]}`}
              alt={category.name}
              src={
                category.image.includes("http")
                  ? category.image
                  : `${process.env.base_url}/${category.image}`
              }
            />
          </div>
          <div className={`${styles["category-info"]}`}>
            <h5 className={`${styles["tiltle"]}`}>{category.name}</h5>
            <h6 className={`${styles["sub-text"]}`}>
              Một danh mục trong quán cà phê.
            </h6>
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["header"]}`}>
          <h2 className={`${styles["title-big"]} wpb_wrapper`}>
            Danh mục sản phẩm
          </h2>
          <img
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
            alt=""
          />
          <div className={`w-100 d-flex justify-content-center`}>
            <h6 className={`${styles["sub"]} wpb_wrapper w-50`}>
              Tất cả danh mục có trong cửa hàng
            </h6>
          </div>
        </div>

        <div
          className={`${styles["category"]} justify-content-center text-center`}
        >
          {renderCategories(categories)}
          {/* <div>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-5.png"></img>
            <div>
              <h5 className={`${styles["tiltle"]}`}>TYPES OF COFFEE</h5>
              <h6 className={`${styles["sub-text"]}`}>
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </h6>
            </div>
          </div>
          <div>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-5.png"></img>
            <div>
              <h5 className={`${styles["tiltle"]}`}>BEAN VARIETIES</h5>
              <h6 className={`${styles["sub-text"]}`}>
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </h6>
            </div>
          </div>
          <div>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-5.png"></img>
            <div>
              <h5 className={`${styles["tiltle"]}`}>COFFEE & PASTRY</h5>
              <h6 className={`${styles["sub-text"]}`}>
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </h6>
            </div>
          </div>
          <div>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-5.png"></img>
            <div>
              <h5 className={`${styles["tiltle"]}`}>COFFEE TO GO</h5>
              <h6 className={`${styles["sub-text"]}`}>
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </h6>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Category;
