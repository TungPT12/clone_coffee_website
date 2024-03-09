"use client";
import Link from "next/link";
import style from "./login.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa2,
  faLock,
  faUser,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { loginService } from "@/services/authn/authn.service";
import { useDispatch } from "react-redux";
import { authnAction } from "@/lib/slice/features/authn/authnSlice";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const Login = () => {
  const [password, setPassword] = useState("123");
  const [username, setUsername] = useState("123");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const router = useRouter();
  // const {data} = useSWR('LOGIN', )
  const login = (username: string, password: string) => {
    loginService({ username: username, password: password })
      .then((data: any) => {
        return data;
      })
      .then((data: any) => {
        dispatch(authnAction.login(data));
      })
      .then(() => {
        window.location.href = "/";
      })
      .catch((error: Error) => {
        setError("Sai tài khoản hoặc mật khẩu");
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
          {error ? (
            <div className="d-flex text-warning fw-500 align-items-center ps-2 pb-2 mb-1 pt-0 ">
              <FontAwesomeIcon icon={faWarning} className="icon-warning me-2" />
              {error}
            </div>
          ) : (
            ""
          )}
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
