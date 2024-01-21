import Collect from "./Collect/Collect";
import styles from "./Gallery.module.scss";
const Gallery = () => {
  return (
    <>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["header"]} `}>
          <h2 className={`${styles["title-big"]} wpb_wrapper`}>
            OUR SWEET GALLERY
          </h2>
          <img
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
            alt=""
          />
          <div className={`w-100 d-flex justify-content-center`}>
            <h6 className={`${styles["sub"]} wpb_wrapper w-50`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </h6>
          </div>
        </div>
        <div className={`${styles["collections"]} gap-3 w-100`}>
          <Collect imageUrl="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-gallery-7.jpg" />
          <Collect imageUrl="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-gallery-8.jpg" />
          <Collect imageUrl="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-img-6.jpg" />
          <Collect imageUrl="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-img-4.jpg" />
          <Collect imageUrl="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-img-5.jpg" />
          <Collect imageUrl="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-img-3.jpg" />
          <Collect imageUrl="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-img-2.jpg" />
          <Collect imageUrl="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-img-1.jpg" />
        </div>
      </div>
    </>
  );
};
export default Gallery;
