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
    </section>
  );
}
