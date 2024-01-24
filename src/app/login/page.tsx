import Link from "next/link";
import style from "./login.module.scss";
import Navbar from "@/components/Navbar/Navbar";
const Login = () => {
  return (
    <div>
      <Navbar />
      <div className={`${style.loginpage}`}>
        <div className={`${style.form} w-25`}>
          <h3 className="mb-4 text-capitalize">Đăng nhập</h3>
          <label className="text-white text-capitalize mb-2">Tài khoản</label>
          <input
            className="text-white ps-2 py-1"
            type="text"
            placeholder="Tài khoản"
          />
          <label className="text-white text-capitalize mb-2">Mật khẩu</label>
          <input
            className="text-white ps-2 py-1"
            type="password"
            placeholder="Mật khẩu"
          />
          <button
            className={`${style["button-login"]} py-2 text-white`}
            type="submit"
          >
            Đăng nhập
          </button>{" "}
          <div className={`${style["forgot"]} mt-3`}>
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
