import styles from "./Banner.module.scss";
function Banner({ title }: any) {
  return (
    <div
      className={`${styles["banner"]} d-flex justify-content-center align-items-center text-center w-100`}
    >
      <h1 className={` text-light text-uppercase ${styles["title-page"]}`}>
        {title}
      </h1>
    </div>
  );
}
export default Banner;
