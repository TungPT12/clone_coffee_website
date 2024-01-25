import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Profile.module.scss";
import {
  faCheck,
  faEnvelope,
  faGem,
  faLanguage,
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
              src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
            ></img>
          </div>
          <div className={`${styles["main-detail"]}`}>
            <h2>Liemtroller</h2>
            <div className={`${styles["info-detail"]}`}>
              <div className={`${styles["info"]}`}>
                <span>abc@gmail</span>
              </div>
              <div className={`${styles["button-edit"]}`}>
                <button className={`${styles["button"]}`}>Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles["info-main"]} row`}>
        <div className={`${styles["info-left"]} col-3`}>
          <div className={`${styles["about"]} col-3`}>
            <span className={`${styles["title-category"]} text-uppercase`}>
              Mô tả
            </span>
            <div className={`${styles["category"]} text-capitalize`}>
              <span>
                <FontAwesomeIcon
                  className={`${styles["icon"]}`}
                  icon={faUser}
                />
                LiemTroller
              </span>
              <span>
                <FontAwesomeIcon
                  className={`${styles["icon"]}`}
                  icon={faCheck}
                />
                Status
              </span>
              <span>
                <FontAwesomeIcon
                  className={`${styles["icon"]}`}
                  icon={faLanguage}
                />
                Nghề Nghiệp
              </span>
              <span>
                <FontAwesomeIcon
                  className={`${styles["icon"]}`}
                  icon={faEnvelope}
                />
                Email
              </span>
            </div>
          </div>
          <div>
            <span className={`${styles["title-category"]} text-uppercase`}>
              Mô tả
            </span>
            <div className={`${styles["category"]} text-capitalize`}>
              <span>
                <FontAwesomeIcon
                  className={`${styles["icon"]}`}
                  icon={faUser}
                />
                LiemTroller
              </span>
              <span>
                <FontAwesomeIcon
                  className={`${styles["icon"]}`}
                  icon={faCheck}
                />
                Status
              </span>
              <span>
                <FontAwesomeIcon
                  className={`${styles["icon"]}`}
                  icon={faLanguage}
                />
                Nghề Nghiệp
              </span>
              <span>
                <FontAwesomeIcon
                  className={`${styles["icon"]}`}
                  icon={faEnvelope}
                />
                Email
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles["history"]} col-8`}>
          Lịch sử mua hàng
          <div className={`${styles["info-about"]}`}>
            <span>Ux Desigin</span>
            <span>Ux Desigin</span>
            <span>Ux Desigin</span>
            <span> Ho chinh minh city</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
