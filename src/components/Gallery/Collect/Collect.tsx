import styles from "./Collect.module.scss";
const Collect = ({ imageUrl }: any) => {
  return (
    <div className={`position-relative ${styles["collect"]}`}>
      <img
        className={`w-100 h-100 ${styles["image"]} position-relative`}
        src={imageUrl}
      />
      <div
        className={`position-absolute h-100 w-100 top-0 flex-column justify-content-center align-items-center ${styles["overlay-collect"]}`}
      >
        <h4 className={`${styles["text-title"]}`}>Brewed</h4>
        <div className={`${styles["text-link"]}`}>
          <span>Cup of Coffee / </span>
          <span>Filtered</span>
        </div>
      </div>
    </div>
  );
};
export default Collect;
