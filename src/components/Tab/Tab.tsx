"use client";
import React, { useState, useMemo } from "react";
import styles from "./Tab.module.scss";
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
          <h3>Content for Tab 1</h3>
          <span>
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
          <p>This is the content for Tab 2.</p>
        </div>
      );
    } else {
      return (
        <div className={`${styles.tabContent}`}>
          <h3>Content for Tab 3</h3>
          <p>Dimensions:20 × 10 × 30 cm</p>
          <p>Dimensions:20 × 10 × 30 cm</p>
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
          } `}
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
          }`}
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
          }`}
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
