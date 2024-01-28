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
const Profile = () => {
  return (
    <div>
      <div className={`${styles["profile"]}`}>
        <div className={`${styles["backgroud"]}`}></div>
        <div className={`${styles["avatar-image"]}`}>
          <div className={`${styles["image-user"]}`}>
            <img
              className={`${styles["avatar"]}`}
              src="https://cdn.lazi.vn/storage/uploads/users/avatar/1600694988_lazi_5f68aacc91498.jpg"
            />
          </div>
          <div className={`${styles["main-detail"]}`}>
            <div>
              <div className={`${styles["name"]} `}>
                <h2 className={`${styles["title-name"]} `}>
                  Nguyễn Thanh Liêm
                </h2>
                <div className={`${styles["icon-container"]} `}>
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
                <span className="">
                  <FontAwesomeIcon icon={faGem} className={`${styles[""]}`} />
                </span>
              </div>
            </div>
            {/* <div className={`${styles["button-edit"]}`}>
              <button className={`${styles["button"]}`}>Edit Profile</button>
            </div> */}
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

                <p>Liemro9x@gmail.com </p>
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
                <div className={`${styles["item-norank"]} col-2`}>
                  Đồng
                  <FontAwesomeIcon
                    height={20}
                    icon={faGem}
                    className={`${styles["icon"]}`}
                  />
                  <span>0</span>
                  <progress
                    className={`${styles["progress"]}`}
                    value="10"
                    max="100"
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  ></progress>
                </div>
                <div className={`${styles["item-siler"]} col-2`}>
                  Bạc
                  <FontAwesomeIcon
                    height={20}
                    icon={faGem}
                    className={`${styles["icon"]}`}
                  />
                  <span>500</span>
                  <progress
                    className={`${styles["progress"]}`}
                    value="0"
                    max="100"
                  ></progress>
                </div>
                <div className={`${styles["item-gold"]} col-2`}>
                  Vàng
                  <FontAwesomeIcon
                    height={20}
                    icon={faGem}
                    className={`${styles["icon"]}`}
                  />
                  <span>1000</span>
                  <progress
                    className={`${styles["progress"]}`}
                    value="0"
                    max="100"
                  ></progress>
                </div>
                <div className={`${styles["item-platium"]} col-2`}>
                  Bạch kim
                  <FontAwesomeIcon
                    height={20}
                    icon={faGem}
                    className={`${styles["icon"]}`}
                  />
                  <span>2000</span>
                  <progress
                    className={`${styles["progress"]}`}
                    value="0"
                    max="100"
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
                  <img
                    className="w-100"
                    src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png"
                  />
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
    </div>
  );
};
export default Profile;
