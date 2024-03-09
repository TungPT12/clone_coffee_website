import Link from "next/link";
import styles from "./AuthorNavBar.module.scss";
import { useDispatch } from "react-redux";
import { authnAction } from "@/lib/slice/features/authn/authnSlice";
const AuthorNavBar = () => {
  const dispatch = useDispatch();
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
          <span
            onClick={() => {
              dispatch(authnAction.logout());
            }}
            className={`${styles["outer"]}`}
          >
            Logout
          </span>
        </Link>
      </li>
    </ul>
  );
};
export default AuthorNavBar;
