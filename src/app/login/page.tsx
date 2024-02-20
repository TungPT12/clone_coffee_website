import Link from "next/link";
import style from "./login.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa2, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  return (
    <div>
      <Navbar />
      <div className={`${style.loginpage}`}>
        <div className={`${style.form}`}>
          <h3 className={`${style.text} mb-4 text-capitalize`}>Đăng nhập</h3>
          <div className={`${style.accounts}`}>
            <label
              className={`${style.account} text-white text-capitalize mb-2`}
            >
              Tài khoản
            </label>
            <div className={`${style.input}`}>
            <FontAwesomeIcon icon={faUser} className={`${style["icon"]} text-white`} />
            <input
              type="text"
              placeholder="Tài khoản"
              className={`${style["input-account"]} text-white `}
            />
            </div>
          </div>
          <div className={`${style.passwords}`}>
            <label
              className={`${style.password} text-white text-capitalize mb-2`}
            >
              Mật khẩu
            </label>
            <div className={`${style.input}`}>
              <FontAwesomeIcon icon={faLock} className={`${style["icon"]} text-white`} />
              <input
                className={`${style["input-password"]} text-white`}
                type="password"
                placeholder="Mật khẩu"
              />
            </div>
          </div>
          <button
            className={`${style["button-login"]} py-2 text-white`}
            type="submit"
          >
            Đăng nhập
          </button>
          <div className={`${style["forgot"]} mt-3`}>
          <Link className={`${style["link"]} text-decoration-none`} href="/register">
              Đăng kí tài khoản?
            </Link>
            <Link className={`${style["link"]} text-decoration-none`} href="#">
              Quên mật khẩu?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
