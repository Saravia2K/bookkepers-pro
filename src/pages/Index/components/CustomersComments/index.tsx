import { Link } from "react-router-dom";
import CommentsCarousel from "./CommentsCarousel";
import styles from "./styles.module.scss";

export default function CustomersComments() {
  return (
    <section
      id="customers-comments-section"
      className={styles["customers-comments"]}
    >
      <p className={styles.text}>
        Some of our most <span className={styles.highlight}>satisfied</span>{" "}
        customers!
      </p>
      <CommentsCarousel />
      <Link to="/contact" className={styles["schedule-info"]}>
        Schedule your FREE 2 hour consultation
      </Link>
    </section>
  );
}
