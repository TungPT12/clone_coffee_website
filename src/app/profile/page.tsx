/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Profile.module.scss";
import {
  faCheck,
  faClose,
  faEnvelope,
  faGem,
  faLanguage,
  faPenAlt,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
import profileService from "@/services/profile/profile.service";
import { useState } from "react";
import EditProfile from "@/components/EditProfile/EditProfile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ranks = {
  copper: 100,
  silver: 500,
  gold: 1000,
  plantium: 2000,
};

const Profile = () => {
  const notifyFail = () => toast.error("Có lỗi xảy ra");
  const notifySucess = () => toast.success("Cap nhat thanh cong");
  const [isOpen, setIsOpen] = useState(false);
  const checkRanksClass = (score: number) => {
    if (score > 100 && score <= 500) {
      return "item-siler";
    } else if (score > 500 && score <= 1000) {
      return "item-gold";
    } else if (score > 1000) {
      return "item-platium";
    }
    return "item-norank";
  };
  const { data: profile } = useSWR("GET_PROFILE", profileService.getProfile);
  return (
    <div>
      <ToastContainer />

      <div className={`${styles["profile"]}`}>
        <div className={`${styles["backgroud"]}`}></div>
        <div className={`${styles["avatar-image"]}`}>
          <div className={`${styles["image-user"]}`}>
            <img
              className={`${styles["avatar"]}`}
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/${profile?.avatar}`}
            />
          </div>
          <div className={`${styles["main-detail"]}`}>
            <div>
              <div className={`${styles["name"]} `}>
                <h2 className={`${styles["title-name"]} `}>
                  {profile?.username}
                </h2>
                <div
                  className={`${styles["icon-container"]} `}
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPenAlt}
                    className={`${styles["icon-pen"]} `}
                  />
                </div>
              </div>
              <div className={`${styles["info-detail"]}`}>
                <span className={`${styles["info-fullname"]}`}>
                  (Khách hàng tiềm năng)
                </span>
                <span
                  className={`${
                    profile
                      ? profile.score
                        ? styles[checkRanksClass(profile.score)]
                        : styles["item-norank"]
                      : styles["item-norank"]
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faGem}
                    className={`${styles["icon"]}`}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles["info-main"]} `}>
        <div className={`${styles["info-left"]} `}>
          <div className={`${styles["about"]}`}>
            <span className={`${styles["title-category"]} text-uppercase`}>
              Mô tả
            </span>
            <div className={`${styles["category"]}`}>
              <span className={`${styles["item-info"]}`}>
                <FontAwesomeIcon
                  className={`${styles["icon-detail"]}`}
                  icon={faUser}
                />
                <p>Nguyễn Thanh Liêm</p>
              </span>
              <span className={`${styles["item-info"]}`}>
                <FontAwesomeIcon
                  className={`${styles["icon-detail"]}`}
                  icon={faCheck}
                />
                <p>Khách hàng</p>
              </span>
              <span className={`${styles["item-info"]}`}>
                <FontAwesomeIcon
                  className={`${styles["icon-detail"]}`}
                  icon={faLanguage}
                />
                <p>Việt Nam </p>
              </span>
              <span className={`${styles["item-info"]}`}>
                <FontAwesomeIcon
                  className={`${styles["icon-detail"]}`}
                  icon={faEnvelope}
                />

                <p>{profile?.email} </p>
              </span>
              <span className={`${styles["item-info"]}`}>
                <FontAwesomeIcon
                  className={`${styles["icon-detail"]}`}
                  icon={faPhone}
                />
                <p>+0984723440</p>
              </span>
            </div>
          </div>
          <div className={`${styles["border"]}`}></div>
          <div className={`${styles["rank-container"]}`}>
            <div className={`${styles["title-text"]}`}>
              Hạng khách hàng thân thiết
            </div>
            <div className={`${styles["rank"]}`}>
              <div className={`${styles["rank-detail"]} row`}>
                <div
                  className={`${styles["item-norank"]} ${styles["item-rank"]} col-2`}
                >
                  Đồng
                  <FontAwesomeIcon
                    height={20}
                    icon={faGem}
                    className={`${styles["icon"]}`}
                  />
                  <span>100</span>
                  <progress
                    className={`${styles["progress"]}`}
                    value={profile?.score}
                    max={ranks.copper}
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  ></progress>
                </div>
                <div
                  className={`${styles["item-siler"]} ${styles["item-rank"]} col-2`}
                >
                  Bạc
                  <FontAwesomeIcon
                    height={20}
                    icon={faGem}
                    className={`${styles["icon"]}`}
                  />
                  <span>500</span>
                  <progress
                    className={`${styles["progress"]}`}
                    value={
                      profile?.score
                        ? profile?.score > 100
                          ? profile.score - ranks.copper
                          : 0
                        : 0
                    }
                    max={ranks.silver - ranks.copper}
                  ></progress>
                </div>
                <div
                  className={`${styles["item-gold"]} ${styles["item-rank"]} col-2`}
                >
                  Vàng
                  <FontAwesomeIcon
                    height={20}
                    icon={faGem}
                    className={`${styles["icon"]}`}
                  />
                  <span>1000</span>
                  <progress
                    className={`${styles["progress"]}`}
                    value={
                      profile?.score
                        ? profile?.score > 500
                          ? profile.score - ranks.silver
                          : 0
                        : 0
                    }
                    max={ranks.gold - ranks.silver}
                  ></progress>
                </div>
                <div
                  className={`${styles["item-platium"]} ${styles["item-rank"]} col-2`}
                >
                  Bạch kim
                  <FontAwesomeIcon
                    height={20}
                    icon={faGem}
                    className={`${styles["icon"]}`}
                  />
                  <span>2000</span>
                  <progress
                    className={`${styles["progress"]}`}
                    value={
                      profile?.score
                        ? profile?.score > 1000
                          ? profile.score - ranks.gold
                          : 0
                        : 0
                    }
                    max={ranks.plantium - ranks.gold}
                  ></progress>
                </div>
              </div>
              {/* {isHovered && (
            <div className={styles.customerInfo}>
              <span className={styles.name}>
                Bạn cần 90 điểm để đến hạng bạc
              </span>
              <span className={styles.points}>Điểm: 10/100</span>
            </div>
          )} */}
            </div>
          </div>
        </div>
        <div className={`${styles["history"]}`}>
          <div className="cart-product">
            <div className={`${styles["t-head"]} `}>
              <div className={`d-flex ${styles["th"]}`}>
                <div className={`f-1 py-3 ${styles[""]}`}></div>
                <div className="f-3 py-3">Tên sản phẩm</div>
                <div className="f-2 py-3">Giá</div>
                <div className="f-2 py-3">Số lượng</div>
                <div className="f-2 py-3">Tổng tiền</div>
              </div>
            </div>
            <div className={`${styles["t-body"]} `}>
              <div className={`${styles["t-row"]} w-100 d-flex`}>
                <div className={`f-1 py-3 d-flex align-items-center`}>
                  <picture>
                    <img
                      className="w-100"
                      src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png"
                    />
                  </picture>
                </div>
                <div className={`f-3  py-3 d-flex align-items-center`}>
                  <span className="f-2">Columnbia Coffe</span>
                </div>
                <div className="f-2 py-3 d-flex align-items-center">$123</div>
                <div className={`d-flex py-3 f-2 d-flex align-items-center`}>
                  <div
                    className={`d-flex align-items-center ${styles["wrapper-quantity"]}`}
                  >
                    <span>2</span>
                  </div>
                </div>
                <div className="f-2 py-3 d-flex align-items-center">$123</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <EditProfile
          notifySucess={notifySucess}
          notifyFail={notifyFail}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dataUser={
            profile
              ? profile
              : {
                  _id: "",
                  fullname: "",
                  email: "",
                  avatar: "",
                  phone: "",
                  birthday: "",
                  sex: "",
                }
          }
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Profile;
