import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";
import cityImg from "../../images/city.jpg";

export default function MainBanner() {
  const navigate = useNavigate();

  return (
    <div className={styles["main-banner"]}>
      <img src={cityImg} alt="L.A City" className={styles["bg-image"]} />
      <div className={styles["main-text"]}>
        Bookkeeping services for small to mid-size business
      </div>
      <button
        className={styles["contact-btn"]}
        onClick={() => navigate("/contact")}
      >
        Contact Us
      </button>
    </div>
  );
}
