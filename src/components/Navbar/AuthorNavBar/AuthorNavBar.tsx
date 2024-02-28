import Link from "next/link";
import styles from "./AuthorNavBar.module.scss";
const AuthorNavBar = () => {
  return (
    <ul className={`position-relative ${styles["second-navbar"]}`}>
      <li className={`${styles["second-item"]}`}>
        <Link
          href={"/"}
          className={`${styles["second-nav-link"]} text-decoration-none text-white`}
        >
          <span className={`${styles["outer"]}`}>Thông tin</span>
        </Link>
      </li>
      <li className={`${styles["second-item"]}`}>
        <Link
          href={"/"}
          className={`${styles["second-nav-link"]} text-decoration-none text-white`}
        >
          <span className={`${styles["outer"]}`}>Logout</span>
        </Link>
      </li>
    </ul>
  );
};
export default AuthorNavBar;
