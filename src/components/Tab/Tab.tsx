"use client";
import React, { useState, useMemo } from "react";
import styles from "./Tab.module.scss";
import ReviewList from "../Rating/Rating";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState({
    isShowDescription: true,
    isShowInformation: false,
    isShowReview: false,
  });

  const renderTabs = () => {
    if (activeTab.isShowDescription) {
      return (
        <div className={`${styles.tabContent}`}>
          <span className={`${styles["tab-description"]}`}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </span>
        </div>
      );
    } else if (activeTab.isShowInformation) {
      return (
        <div className={`${styles.tabContent}`}>
          <h3>Content for Tab 2</h3>
          <p>Dimensions:20 × 10 × 30 cm</p>
          <p>Dimensions:20 × 10 × 30 cm</p>
        </div>
      );
    } else {
      return (
        <div className={`${styles.tabContent}`}>
          <ReviewList />
        </div>
      );
    }
  };

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabCtroll}>
        <div
          className={`${styles["tab"]} ${
            activeTab.isShowDescription ? styles["active"] : ""
          } text-uppercase`}
          onClick={() => {
            setActiveTab({
              isShowInformation: false,
              isShowReview: false,
              isShowDescription: true,
            });
          }}
        >
          Description
        </div>
        <div
          className={`${styles["tab"]} ${
            activeTab.isShowInformation ? styles["active"] : ""
          }text-uppercase`}
          onClick={() => {
            setActiveTab({
              isShowDescription: false,
              isShowInformation: true,
              isShowReview: false,
            });
          }}
        >
          INFORMATION
        </div>
        <div
          className={`${styles["tab"]} ${
            activeTab.isShowReview ? styles["active"] : ""
          } text-uppercase`}
          onClick={() => {
            setActiveTab({
              isShowDescription: false,
              isShowInformation: false,
              isShowReview: true,
            });
          }}
        >
          Review (1)
        </div>
      </div>
      {renderTabs()}
    </div>
  );
};

export default Tabs;
