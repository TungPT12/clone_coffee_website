"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const CustomModal = ({
  isOpen,
  children,
  background,
  style,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  background: string;
  style: any;
}) => {
  useEffect(() => {
    Modal.setAppElement("#root_root"); // Set the app element to the root element of your application
  }, []);

  return (
    <div
      style={{
        zIndex: 1000,
        position: "relative",
      }}
    >
      <Modal
        style={{
          content: {
            width: "100%",
            height: "100vh",
            background: `${background ? background : "none"}`,
            inset: 0,
            position: "fixed",
            ...style,
          },
        }}
        isOpen={isOpen}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
};

export default CustomModal;
