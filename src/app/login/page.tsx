"use client";
import Link from "next/link";
import style from "./login.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa2, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { loginAPI } from "@/api/authn";
import { useDispatch } from "react-redux";
import {authnAction} from "@/lib/slice/features/authn/authnSlice"
import { useRouter } from "next/navigation";


const Login = () => {
  const [password, setPassword] = useState("ttt@2000");
  const [username, setUsername] = useState("tintran");
  const dispatch = useDispatch();
  const router = useRouter();


  const login = (username: string, password: string) => {
    loginAPI({ username: username, password: password })
      .then((response) => {
        const data = response.data;
        return data;
      })
      .then((data) => {
        dispatch(authnAction.login(data))
        router.push('/'); // Chuyển hướng đến trang "home"
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
              <FontAwesomeIcon
                icon={faUser}
                className={`${style["icon"]} text-white`}
              />
              <input
                type="text"
                placeholder="Tài khoản"
                className={`${style["input-account"]} text-white `}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
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
              <FontAwesomeIcon
                icon={faLock}
                className={`${style["icon"]} text-white`}
              />
              <input
                className={`${style["input-password"]} text-white`}
                type="password"
                value={password}
                placeholder="Mật khẩu"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            className={`${style["button-login"]} py-2 text-white`}
            onClick={() => {
              login(username, password);
            }}
          >
            Đăng nhập
          </button>
          <div className={`${style["forgot"]} mt-3`}>
            <Link
              className={`${style["link"]} text-decoration-none`}
              href="/register"
            >
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
