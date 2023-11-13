import TwoBoxesContainer from "../../components/TwoBoxesContainer";

import styles from "./styles.module.scss";
import picture from "./images/miguel-angel-cuevas.jpg";
import city from "./images/city.jpg";
import LinkedinIcon from "../../assets/icons/Linkedin";

export default function TeamPage() {
  return (
    <div className={styles["team-page"]}>
      <TwoBoxesContainer
        reverseOnResponsive
        box1={{
          component: <Box1 />,
        }}
        box2={{
          component: <Box2 />,
          bgColor: "var(--secondary-color)",
        }}
      />
      <div className={styles["motivational-phrase"]}>
        <img src={city} alt="L.A city" className={styles["city-img"]} />
        <p className={styles["phrase"]}>
          We have a highly skilled staff to take care of your{" "}
          <span className={styles.highlight}>Bookkeeping needs</span>
        </p>
      </div>
    </div>
  );
}

const Box1 = () => (
  <img src={picture} alt="Miguen Angel Cuevas" className={styles.picture} />
);

const Box2 = () => (
  <div className={styles.box2}>
    <h1 className={styles.name}>Miguel Angel Cuevas</h1>
    <h2 className={styles.position}>Founder</h2>
    <p className={styles.description}>
      Miguel Angel Cuevas is excited to be successfully pursuing a career he
      loves, while providing needed services. His passion for order and balance
      made him a natural candidate to work with numbers and technology. After
      earning an accounting certification in his native Mexico, he migrated to
      the United States.
    </p>
    <p className={styles.description}>
      Over the past two decades the scope of his expertise has expanded to
      marketing, office management, sales, both hardware and software computer
      skills, and Certified Network Administration. His broad range of interests
      and professional experience include music, entertainment, import/export,
      real estate, and investing.
    </p>
    <div className={styles["linkedin-icon"]}>
      <a
        href="https://www.linkedin.com/in/miguel-a-cuevas-6203116a/"
        target="_blank"
      >
        <LinkedinIcon />
      </a>
    </div>
  </div>
);
