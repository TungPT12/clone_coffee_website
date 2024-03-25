/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import useSWR from "swr";
import styles from "./Blog.module.scss";
import introductionService from "@/services/introduction/introduction.service";
const Blog = () => {
  const DefaultImage =
    "https://q8laser.com/wp-content/uploads/2021/08/ly-cafe-vector.jpg";
  const { data: introduction } = useSWR(
    "GET_INTRODUCTION",
    introductionService.getAll
  );

  const handleImageError = (event: any) => {
    event.target.src = DefaultImage;
  };
  const renderIntroduction = (introduction: any) => {
    return introduction?.map((introduction: any) => {
      return (
        <div className={`${styles["blog-image"]}`} key={introduction._id}>

          <picture>
            <img
              className={`${styles["image-blog"]}`}
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${introduction.image}`}
              loading="lazy"
            />
          </picture>
          <div
            className={`${styles["text-blog"]}justify-content-center text-center`}
          >
            <h5 className={`${styles["tiltle"]}`}>{introduction.title}</h5>
            <h6 className={`${styles["sub-text"]}`}>{introduction.content}</h6>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["header"]}`}>
          <h2 className={`${styles["title-big"]} wpb_wrapper`}>
            THE COFFE GRADEN
          </h2>
          <picture>
            <img
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
              alt="icon"
            />
          </picture>
          <div className={`w-100 d-flex justify-content-center`}>
            <h6 className={`${styles["sub"]} wpb_wrapper w-50`}>
              Những bài viết về kỷ niệm cùng quán cà phê COFFE GRADEN
            </h6>
          </div>
        </div>

        <div
          className={`${styles["category"]} d-flex justify-content-center text-center`}
        >
          {renderIntroduction(introduction)}
        </div>
      </div>
    </>
  );
};
export default Blog;
