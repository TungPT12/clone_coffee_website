/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.scss";
import stylesMobile from "./NavbarMobile.module.scss";
import SecondNavBar from "./SecondNavBar/SecondNavBar";
import {
  faAlignJustify,
  faCartArrowDown,
  faList,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import CartNavBar from "./CartNavBar/CartNavBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import AuthorNavBar from "./AuthorNavBar/AuthorNavBar";
import { JwtPayload, jwtDecode } from "jwt-decode";
import BillCart from "../BillCart/BillCart";

function Navbar() {
  const [navListOpen, setNavListOpen] = useState(true);
  const { access_token } = useSelector((state: RootState) => state.authn);
  const [username, setUsername] = useState<string | null>(null);
  const { products } = useSelector((state: RootState) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = (products: any) => {
    return products.reduce((totalQuantity: number, product: any) => {
      return (totalQuantity = totalQuantity + product.quantity);
    }, 0);
  };

  useEffect(() => {
    if (access_token) {
      const decodedToken: JwtPayload & { username: string } =
        jwtDecode(access_token);

      // Extract the username from the decoded token
      const { username } = decodedToken;

      // Set the username in state
      setUsername(username);
    }
  }, [access_token]);

  const toggleNavList = () => {
    setNavListOpen(!navListOpen);
  };
  return (
    <>
      <BillCart
        isOpenCart={isOpen}
        setIsOpenCart={() => {
          setIsOpen(false);
        }}
      />
      <div className={`position-relative ${styles["container"]}`}>
        <div
          className={`${stylesMobile["wrapper-icon-navbar"]} ${styles["wrapper-icon-navbar"]}`}
          onClick={toggleNavList}
        >
          <FontAwesomeIcon
            icon={faAlignJustify}
            className={`${stylesMobile["icon"]}`}
          />
        </div>
        <div
          className={`${styles["navbar"]} position-absolute  w-100`}
          style={{ display: navListOpen ? "block" : "none" }}
        >
          <ul className={`${styles["wrap-logo-navlink"]} mb-0 ps-0 `}>
            <li
              className={`h-100 d-flex align-items-center ${styles["wrap-logo"]}`}
            >
              <img
                className={`h-75 ${styles["logo"]}`}
                src="https://corretto.qodeinteractive.com/wp-content/themes/corretto/assets/img/logo-light.png"
                alt="light logo"
              />
            </li>
            <li className={`${styles["nav-container"]}h-100`}>
              <ul className={`${styles["nav-list"]}`}>
                <li
                  className={`${styles["nav-item"]} position-relative text-uppercase text-white h-100`}
                >
                  <Link
                    href="/"
                    className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex  text-decoration-none`}
                  >
                    <span
                      className={`d-flex flex-column ${styles["item-outer"]} `}
                    >
                      Home
                    </span>
                  </Link>
                  <div
                    className={` ${styles["second-navbar"]} position-absolute`}
                  >
                    {/* <SecondNavBar /> */}
                  </div>
                </li>
                {/* <li
                className={`${styles["nav-item"]} position-relative text-uppercase h-100`}
              >
                <Link
                  href="/"
                  className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-decoration-none`}
                >
                  <span
                    className={`d-flex flex-column ${styles["item-outer"]} `}
                  >
                    Menu
                  </span>
                </Link>
                <div
                  className={` ${styles["second-navbar"]} position-absolute`}
                >
                  <SecondNavBar />
                </div>
              </li> */}
                <li
                  className={`${styles["nav-item"]} position-relative text-uppercase h-100`}
                >
                  <Link
                    href="/shop"
                    className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-white text-decoration-none`}
                  >
                    <span
                      className={`d-flex flex-column ${styles["item-outer"]} `}
                    >
                      Shop
                    </span>
                  </Link>
                  <div
                    className={` ${styles["second-navbar"]} position-absolute`}
                  ></div>
                </li>
                {/* <li
                className={`${styles["nav-item"]} position-relative text-uppercase h-100`}
              >
                <Link
                  href="/"
                  className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-decoration-none`}
                >
                  <span
                    className={`d-flex flex-column ${styles["item-outer"]} `}
                  >
                    About
                  </span>
                </Link>
              </li> */}
                <li
                  className={`${styles["nav-item"]} ${styles["cart-icon"]}  position-relative text-uppercase h-100`}
                >
                  <p
                    // href="/cart"
                    className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-decoration-none`}
                  >
                    <span
                      className={`d-flex flex-column ${styles["item-outer"]}`}
                    >
                      <span className={styles["number"]}>
                        {totalQuantity(products)}
                      </span>
                      <FontAwesomeIcon
                        icon={faCartArrowDown}
                        onClick={() => setIsOpen(true)}
                      />
                    </span>
                  </p>
                  <div
                    className={` ${styles["second-navbar-cart"]} position-absolute`}
                  >
                    <CartNavBar />
                  </div>
                </li>
                <li
                  className={`${styles["nav-item"]} position-relative text-uppercase h-100`}
                >
                  <Link
                    href="/order"
                    className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-white text-decoration-none`}
                  >
                    <span
                      className={`d-flex flex-column ${styles["item-outer"]} `}
                    >
                      Order
                    </span>
                  </Link>
                  <div
                    className={` ${styles["second-navbar"]} position-absolute`}
                  ></div>
                </li>
                <li
                  className={`${styles["nav-item"]} position-relative text-uppercase text-white h-100`}
                >
                  <Link
                    href="/"
                    className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-white text-decoration-none`}
                  >
                    <span
                      className={`d-flex flex-column ${styles["item-outer"]} `}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </span>
                  </Link>
                </li>
                {access_token ? (
                  <li
                    className={`${styles["nav-item"]} position-relative text-uppercase text-white h-100`}
                  >
                    {/* <Link
                    href="/login"
                    className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-white text-decoration-none`}
                  > */}
                    <div
                      className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-white gap-2`}
                    >
                      <div className="h-10 w-10">
                        <img
                          style={{
                            height: "20px",
                            width: "20px",
                            backgroundColor: "white",
                          }}
                          src="https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_960_720.png"
                        />
                      </div>
                      <span
                        className={`d-flex flex-column mt-1 ${styles["item-outer"]} `}
                      >
                        {username}
                      </span>
                    </div>
                    {/* </Link> */}
                    <div
                      className={` ${styles["second-navbar"]} position-absolute`}
                    >
                      <AuthorNavBar />
                    </div>
                  </li>
                ) : (
                  <li
                    className={`${styles["nav-item"]} position-relative text-uppercase text-white h-100`}
                  >
                    <Link
                      href="/login"
                      className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-white text-decoration-none`}
                    >
                      <span
                        className={`d-flex flex-column ${styles["item-outer"]} `}
                      >
                        Login
                      </span>
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
