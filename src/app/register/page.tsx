"use client";
import Link from "next/link";
import style from "./Register.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa2, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useInput from "@/hooks/use-input";
import {
  isEmptyInput,
  isShowWarning,
  validPassword,
  validatePhoneNumber,
  validatedEmail,
} from "@/lib/input";
import alertMessage from "@/lib/warningMessage";
const Login = () => {
  const [isDuplicateUserName, setIsDuplicateUserName] = useState(false);
  const [isDuplicateEmail, setIsDuplicateEmail] = useState(false);
  const navigate = useRouter();

  const {
    isValid: isValidFullName,
    input: inputFullName,
    isTouch: isTouchFullName,
    onTouched: onTouchedFullName,
    setInput: setInputFullName,
  } = useInput(isEmptyInput, "");
  const {
    isValid: isValidPassword,
    input: inputPassword,
    isTouch: isTouchPassword,
    onTouched: onTouchedPassword,
    setInput: setInputPassword,
  } = useInput(validPassword, "");
  const {
    isValid: isValidEmail,
    input: inputEmail,
    isTouch: isTouchEmail,
    onTouched: onTouchedEmail,
    setInput: setInputEmail,
  } = useInput(validatedEmail, "");
  const {
    isValid: isValidPhoneNumber,
    input: inputPhoneNumber,
    isTouch: isTouchPhoneNumber,
    onTouched: onTouchedPhoneNumber,
    setInput: setInputPhoneNumber,
  } = useInput(validatePhoneNumber, "");

  const isValidSubmit =
    isValidFullName && isValidPassword && isValidEmail && isValidPhoneNumber;

  const onSubmitSignup = (e: any) => {};
  return (
    <div>
      <Navbar />
      <div className={`${style.loginpage}`}>
        <form
          className={`${style.form} `}
          onSubmit={
            isValidSubmit
              ? onSubmitSignup
              : (e) => {
                  e.preventDefault();
                  onTouchedFullName();
                }
          }
        >
          <h3 className={`${style.text} mb-4 text-capitalize`}>
            Tạo tài khoản
          </h3>
          <div className={`${style.accounts}`}>
            <label
              className={`${style.account} text-white text-capitalize mb-2`}
            >
              Tên người dùng
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
              />
              {isShowWarning(isValidFullName, isTouchFullName) ? (
                alertMessage("Không bỏ trống tài khoản !")
              ) : (
                <></>
              )}
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
                placeholder="Mật khẩu"
              />
            </div>
          </div>
          <div className={`${style.passwords}`}>
            <label
              className={`${style.password} text-white text-capitalize mb-2`}
            >
              Xác Nhận Mật khẩu
            </label>
            <div className={`${style.input}`}>
              <FontAwesomeIcon
                icon={faLock}
                className={`${style["icon"]} text-white`}
              />
              <input
                className={`${style["input-password"]} text-white`}
                type="password"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
          </div>
          <button
            className={`${style["button-login"]} py-2 text-white`}
            type="submit"
          >
            Đăng kí
          </button>
          <div className={`${style["forgot"]} mt-3`}>
            <Link
              className={`${style["link"]} text-decoration-none`}
              href="/login"
            >
              Đăng nhập ?
            </Link>
            <Link className={`${style["link"]} text-decoration-none`} href="#">
              Quên mật khẩu?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
