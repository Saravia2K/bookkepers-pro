import CardsListSection from "../../components/CardsListSection";
import { services } from "../../consts";

import styles from "./styles.module.scss";

export default function ServicesPage() {
  const title = (
    <>
      <span className={styles.highlight}>Maintain</span> your books in{" "}
      <span className={styles.highlight}>order</span>
    </>
  );
  return (
    <CardsListSection title={title} items={services}>
      Our bookkeepers are responsible for all the internal accounting
      transactions, and providing you with all kinds of reports upon request.
      Our bookkeepers are available to come to your office a couple of hours a
      day, once a week, every other week or as you need us. We can also pick up
      the paper work and work on it from our own office. Below is a list of our
      most common services.
    </CardsListSection>
  );
}
