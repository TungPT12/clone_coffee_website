import { useEffect } from "react";
import styles from "./Category.module.scss";
const Category = () => {
  return (
    <>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["header"]}`}>
          <h2 className={`${styles["title-big"]} wpb_wrapper`}>
            OUR DELICIOUS OFFER
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

        <div
          className={`${styles["category"]} d-flex justify-content-center text-center`}
        >
          <div>
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
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
