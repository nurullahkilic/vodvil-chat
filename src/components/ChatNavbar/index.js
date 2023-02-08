import styles from "./index.module.css";

import image from "../../assets/image.jpeg";
import arrow from "../../assets/arrow.svg";
import info from "../../assets/info.svg";

const ChatNavbar = () => {
  return (
    <div className={styles.navbarSection}>
      <div className={styles.backIcon}>
        <img src={arrow} alt="arrow" />
      </div>
      <div className={styles.navbarImage}>
        <img src={image} alt="Nurullah Kılıç" />
      </div>
      <div className={styles.navbarUserInfo}>
        <h3>
          <a href="/">Nurullah Kılıç</a>
        </h3>
        <h6>bir saat önce</h6>
      </div>
      <div className={styles.navbarRight}>
        <img src={info} alt="info" />
      </div>
    </div>
  );
};

export default ChatNavbar;
