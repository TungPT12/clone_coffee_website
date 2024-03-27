import { useState } from "react";
import CustomModal from "../Modal/Modal";
import styles from "./EditProfile.module.scss";
import profileService from "@/services/profile/profile.service";
import { ToastContainer, toast } from "react-toastify";
import { mutate } from "swr";
const EditProfile = ({
  dataUser,

  isOpen,
  setIsOpen,
  notifySucess,
  notifyFail,
}: {
  notifySucess: any;
  notifyFail: any;
  dataUser: any;
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const [gender, setGender] = useState("");
  const [dataUpdateUser, setdataUpdateUser] = useState(dataUser);

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("fullname", dataUpdateUser.fullname);
    formData.append("email", dataUpdateUser.email);
    formData.append("avatar", dataUpdateUser.avatar);
    formData.append("phone", dataUpdateUser.phone);
    formData.append("sex", dataUpdateUser.sex);
    formData.append("birthday", dataUpdateUser.birthday);

    profileService
      .updateProfile(formData)
      .then((data: any) => {
        console.log(data);
        notifySucess();
        mutate("GET_PROFILE");
        setIsOpen(false);
      })

      .catch((error: Error) => {
        notifyFail();
      });
  };
  return (
    <>
      <CustomModal
        isOpen={isOpen}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        background="#00000047"
      >
        <div className={styles["bill"]}>
          <div
            className={`${styles["close-icon"]}`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          <div className={styles["container"]}>
            <div className={`${styles.accounts}`}>
              <label
                className={`${styles.account} text-black text-capitalize mb-2`}
              >
                Hình ảnh
              </label>
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  setdataUpdateUser({
                    ...dataUpdateUser,
                    avatar: file,
                  });
                }}
              />
            </div>

            <div className={`${styles.accounts}`}>
              <label
                className={`${styles.account} text-black text-capitalize mb-2`}
              >
                Họ và tên
              </label>
              <input
                onChange={(e) => {
                  setdataUpdateUser({
                    ...dataUpdateUser,
                    fullname: e.target.value,
                  });
                }}
                type="text"
              />
            </div>

            <div className={`${styles.accounts}`}>
              <label
                className={`${styles.account} text-black text-capitalize mb-2`}
              >
                Email
              </label>
              <input
                onChange={(e) => {
                  setdataUpdateUser({
                    ...dataUpdateUser,
                    email: e.target.value,
                  });
                }}
                value={dataUpdateUser.email}
                type="text"
              />
            </div>

            <div className={`${styles.accounts}`}>
              <label
                className={`${styles.account} text-black text-capitalize mb-2`}
              >
                Số điện thoại
              </label>
              <input
                onChange={(e) => {
                  setdataUpdateUser({
                    ...dataUpdateUser,
                    phone: e.target.value,
                  });
                }}
                type="text"
              />
            </div>
            <div className={`${styles.accounts}`}>
              <label
                className={`${styles.account} text-black text-capitalize mb-2`}
              >
                Sinh nhật
              </label>
              <input
                onChange={(e) => {
                  setdataUpdateUser({
                    ...dataUpdateUser,
                    birthday: e.target.value,
                  });
                }}
                type="text"
              />
            </div>

            <div className={`${styles.accounts}`}>
              <label
                className={`${styles.account} text-black text-capitalize mb-2`}
              >
                Giới tính
              </label>
              <div className={styles["check"]}>
                <input
                  onChange={(e) => setGender(e.target.value)}
                  name="sex"
                  type="radio"
                />
                Female
                <input
                  onChange={(e) => setGender(e.target.value)}
                  name="sex"
                  type="radio"
                />
                Male
                <input
                  onChange={(e) => setGender(e.target.value)}
                  name="sex"
                  type="radio"
                />
                Khác
              </div>
            </div>
          </div>

          <div className={styles.groupButton}>
            <button
              onClick={() => {
                handleUpdate();
              }}
              className={styles.cancelButton}
            >
              Cập nhật
            </button>
            <button className={styles.cancelButton} onClick={setIsOpen}>
              Đóng
            </button>
          </div>
        </div>
      </CustomModal>
    </>
  );
};
export default EditProfile;
