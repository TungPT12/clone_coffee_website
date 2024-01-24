import CarouselProduct from "../CarouselProduct/CarouselProduct";
import styles from "./Product.module.scss";
const Product = () => {
  return (
    <>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["header"]}`}>
          <h2 className={`${styles["title-big"]} wpb_wrapper`}>
            ETHIOPIA COFFEE
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
        <div className={`overflow-hidden`}>
          <CarouselProduct />
        </div>
      </div>
    </>
  );
};
export default Product;
