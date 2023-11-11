import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { services } from "../../../../consts";
import StarIcon from "../../../../assets/icons/Star";
import DiskIcon from "../../../../assets/icons/Disk";
import OrangeBorderCard from "../../../../components/OrangeBorderCard";

const OurServicesCards = services.slice(0, 4);
export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles["services-description-container"]}>
        {ServicesDescriptions.map(({ icon: Icon, text }, i) => (
          <div key={i} className={styles["services-description"]}>
            <div className={styles["icon-container"]}>
              <Icon className={styles.icon} />
            </div>
            {text}
          </div>
        ))}
      </div>
      <div className={styles["our-services"]}>
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.cards}>
          {OurServicesCards.map(({ icon, title, content }) => (
            <OrangeBorderCard
              key={title}
              title={title}
              content={content}
              icon={icon}
            />
          ))}
        </div>
      </div>
      <Link to="/services" className={styles["see-more-btn"]}>
        See more
      </Link>
    </section>
  );
}

const ServicesDescriptions = [
  {
    icon: StarIcon,
    text: (
      <p className={styles.text}>
        With over <span className={styles.highlight}>20 years</span> of
        experience, we understand the financial and administration needs of many
        different types of small businesses.
      </p>
    ),
  },
  {
    icon: DiskIcon,
    text: (
      <p className={styles.text}>
        We <span className={styles.highlight}>specialize</span> in all versions
        of QuickBooks as well as 3rd party software. Our outstanding bookkeepers
        work hard to keep our clients books updated.
      </p>
    ),
  },
];
