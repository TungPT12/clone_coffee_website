/* eslint-disable @next/next/no-img-element */
"use client";
import logo from "../../assets/Brown White Modern Elegant Round Coffee Shop Logo.svg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import styles from "./SlideShow.module.scss";
import Content from "./Content/Content";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CountDown = dynamic(() => import("../CountDown/CountDown"), {
  ssr: false,
});
import { useState } from "react";
import dynamic from "next/dynamic";
function SlideShow() {
  const [targetDate, settargetDate] = useState("2024-01-31T23:59:59");

  const properties = {
    prevArrow: (
      <button
        data-type="prev"
        //   aria-label={}
        type="button"
        className={`${styles["arrow-button"]} ${styles["left-arrow"]} ms-3`}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          className={`${styles["icon-slide-show"]}`}
        />
      </button>
    ),
    nextArrow: (
      <button
        type="button"
        className={`${styles["arrow-button"]} ${styles["right-arrow"]} me-3`}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          className={`${styles["icon-slide-show"]}`}
        />
      </button>
    ),
  };

  return (
    <div
      className={` ${styles["sider"]} w-100 hoverflow-hidden position-relative`}
    >
      <Slide canSwipe={false} {...properties} arrows={true}>
        <div className="each-slide-effect ">
          <div
            className={`position-relative ${styles["wrapper-content"]} overflow-hidden`}
          >
            <img
              className={`${styles["image-slide-show"]} image-slide-show`}
              src="https://png.pngtree.com/background/20210711/original/pngtree-coffee-fresh-brown-poster-banner-background-picture-image_1069397.jpg"
              alt="Description of the image"
            />
            <Content
              title={"coffee sgarden"}
              text={
                "Lorem ipsum dolor sit amet, consecteturadip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore sit."
              }
            />
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className={`position-relative ${styles["wrapper-content"]} overflow-hidden`}
          >
            <img
              className={`${styles["image-slide-show"]} image-slide-show`}
              src="https://png.pngtree.com/background/20210711/original/pngtree-coffee-fresh-brown-poster-banner-background-picture-image_1069397.jpg"
              alt="Description of the image"
            />
            <Content
              title={"coffee sgarden"}
              text={
                "Lorem ipsum dolor sit amet, consecteturadip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore sit."
              }
            />
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className={`position-relative overflow-hidden ${styles["wrapper-content"]}`}
          >
            <img
              className={`${styles["image-slide-show"]} image-slide-show`}
              src="https://png.pngtree.com/background/20210711/original/pngtree-coffee-fresh-brown-poster-banner-background-picture-image_1069397.jpg"
              alt="Description of the image"
            />
            <Content
              title={"coffee sgarden"}
              text={
                "Lorem ipsum dolor sit amet, consecteturadip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore sit."
              }
            />
          </div>
        </div>
      </Slide>
      <CountDown targetDate={targetDate} />
    </div>
  );
}

export default SlideShow;
