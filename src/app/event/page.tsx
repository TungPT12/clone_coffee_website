/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./event.module.scss";
import Banner from "@/components/Banner/Banner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PageEvent = () => {
  return (
    <>
      <Navbar />
      <Banner title={`Event`} />
      <div className={`${styles["event-des"]}`}>
        <div className={`${styles["image-div"]}`}>
          <img
            className={`${styles["event-image"]}`}
            src="https://inkythuatso.com/uploads/thumbnails/800/2022/03/anh-tay-cam-tra-sua-dep-24-23-13-45-09.jpg"
          />
        </div>
        <div className={`${styles["text-div"]}`}>
          <p className={`${styles["title-author"]}`}>
            by LiemTroller 02/04/2024 Coffee types
          </p>
          <h1 className={`${styles["title-big"]}`}>Uống trà sữa cực ngon</h1>
          <p className={`${styles["title-text"]}`}>
            Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper
            leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus musbulum ultricies aliquam.
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
            dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
            imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra,
            erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam
            massa nisl quis neque. Suspendisse in orci enim. morbi accumsan
            ipsum velit nam.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PageEvent;
