"use client";
import React, { useState } from "react";
import styles from "./Tab.module.scss";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabCtroll}>
        <div className={styles.tab} onClick={() => handleTabClick(0)}>
          Description
        </div>
        <div className={styles.tab} onClick={() => handleTabClick(1)}>
          INFORMATION
        </div>
        <div className={styles.tab} onClick={() => handleTabClick(2)}>
          Review (1)
        </div>
      </div>

      <div
        className={`${styles.tabContent} ${activeTab === 0 ? styles.show : ""}`}
      >
        <h3>Content for Tab 1</h3>
        <span>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </span>
      </div>

      <div
        className={`${styles.tabContent} ${activeTab === 1 ? styles.show : ""}`}
      >
        <h3>Content for Tab 2</h3>
        <p>This is the content for Tab 2.</p>
      </div>

      <div
        className={`${styles.tabContent} ${activeTab === 2 ? styles.show : ""}`}
      >
        <h3>Content for Tab 3</h3>
        <p>Dimensions:20 × 10 × 30 cm</p>
        <p>Dimensions:20 × 10 × 30 cm</p>
      </div>
    </div>
  );
};

export default Tabs;
