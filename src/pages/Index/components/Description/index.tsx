import TwoBoxesContainer from "../../../../components/TwoBoxesContainer";

import styles from "./styles.module.scss";
import lg from "./images/lg.jpg";
import sm1 from "./images/sm1.jpg";
import sm2 from "./images/sm2.jpg";

export default function Description() {
  return (
    <TwoBoxesContainer
      box1={{
        bgColor: "var(--secondary-color)",
        component: <Box1 />,
      }}
      box2={{
        component: <Box2 />,
      }}
    />
  );
}

const Box1 = () => (
  <div className={styles.box1}>
    <p>
      Our <span style={{ color: "var(--primary-color)" }}>professional</span>{" "}
      bookkeeping services include business management and business consulting.
    </p>
    <div className={styles.images}>
      <div className={styles.smalls}>
        <img src={sm1} alt="" className={styles["big-border-bottom"]} />
        <img src={sm2} alt="" className={styles["big-border-bottom"]} />
      </div>
      <img
        src={lg}
        alt=""
        className={`${styles["large-img"]} ${styles["big-border-bottom"]}`}
        style={{ objectFit: "cover" }}
      />
    </div>
  </div>
);

const Box2 = () => (
  <p className={styles["box2-text"]}>
    Bookkeepers Pro offers personal services to all kinds of small to mid-size
    businesses in the greater Los Angeles area. We offer professional
    bookkeeping services, and consult business owners about their business
    administration systems. <br />
    <br /> Our mission statement is to provide clear, consistent, and honest
    communication with our clients. We are here to work with your current team
    to make your business grow faster and solid, utilizing all kinds of
    techniques to improve your business admin systems; such as internal
    accounting, office management, sales, and customer service.
  </p>
);
