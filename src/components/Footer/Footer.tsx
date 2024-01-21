import Image from "next/image";
import styles from "./Footer.module.scss";
import logo from "../../assets/Brown White Modern Elegant Round Coffee Shop Logo.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["text-description"]}>
        <div className={styles["infor"]}>
          <div className={styles["image"]}>
            <Image
              className={`${styles.logo}`}
              src={logo}
              alt="Logo"
              width={150}
              height={150}
            />
          </div>
          <div className={styles["text-phone"]}>
            <div className={styles["text-title"]}>Giới thiệu</div>
            <div className={styles["text-dot"]}>Về chúng tôi.</div>
            <div className={styles["text-dot"]}>Sản phẩm.</div>
            <div className={styles["text-dot"]}>Khuyến mãi.</div>
          </div>
          <div className={styles["text-email"]}>
            <div className={styles["text-title"]}>Điều khoản</div>
            <div className={styles["text-dot"]}>Điều khoản sửa dụng</div>
            <div className={styles["text-dot"]}>
              Chính sách bảo mật thông tin
            </div>
          </div>
          <div className={styles["text-team"]}>
            <div className={styles["text-title"]}>Đặt hàng: 0733898497</div>
            <div className={styles["text-title"]}>Liên hệ:</div>
            <div className={styles["text-map"]}>
              52 Trần Lựu, An Phú, Quận 2, Thành phố Hồ Chí Minh 70000, Việt Nam
            </div>
          </div>
          {/* <div className={styles["text-copyright"]}>
        &copy; {new Date().getFullYear()}. All rights reserved.
      </div> */}
          <div className={styles["text-address"]}>
            <div className={styles["text-title"]}>Bản đồ</div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2771.3306739852483!2d106.73524986474116!3d10.791892068402577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752608c898b301%3A0x2a912d487a69fcaf!2zNTIgVHLhuqduIEzhu7F1LCBBbiBQaMO6LCBRdeG6rW4gMiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1705024808416!5m2!1svi!2s"
              width="400"
              height="150"
              style={{ border: 0, marginBottom: "1rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles["text-description"]}>
        <div className={styles["infori"]}>
          <div className={styles["text-phone"]}>
            <div className={styles["text-info"]}>
              Giới thiệu về thông tin của đội ngũ làm cà phê &copy;{" "}
              {new Date().getFullYear()}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
