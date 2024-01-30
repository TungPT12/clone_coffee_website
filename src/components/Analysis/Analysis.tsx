import styles from "./Analysis.module.scss";
const Analysis = () => {
  return (
    <>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["header"]}`}>
          <h2 className={`${styles["title-big"]} wpb_wrapper`}>Analaysis</h2>
          <img
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
            alt=""
          />
        </div>

        <div
          className={`${styles["category"]} d-flex justify-content-center text-center`}
        >
          <div>
            <h1 className={`${styles["number"]}`}>250</h1>
            <div>
              <h5 className={`${styles["tiltle"]}`}>VARIETIES OF COFFEE</h5>
              <h6 className={`${styles["sub-text"]}`}>
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </h6>
            </div>
          </div>
          <div>
            <h1 className={`${styles["number"]}`}>250</h1>

            <div>
              <h5 className={`${styles["tiltle"]}`}>HOURS OF TESTING</h5>
              <h6 className={`${styles["sub-text"]}`}>
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </h6>
            </div>
          </div>
          <div>
            <h1 className={`${styles["number"]}`}>250</h1>

            <div>
              <h5 className={`${styles["tiltle"]}`}>COFFEE MARKETS</h5>
              <h6 className={`${styles["sub-text"]}`}>
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </h6>
            </div>
          </div>
          <div>
            <h1 className={`${styles["number"]}`}>250</h1>

            <div>
              <h5 className={`${styles["tiltle"]}`}>COFFEE BRANDS</h5>
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
export default Analysis;
