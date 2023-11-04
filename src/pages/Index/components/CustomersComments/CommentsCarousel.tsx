import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

import styles from "./styles.module.scss";
import COMMENTS from "./comments.json";
import QuoteIcon from "../../../../assets/icons/Quote";

export default function CommentsCarousel() {
  return (
    <div className={styles.carousel}>
      <QuoteIcon className={styles["quote-icon"]} />
      <Carousel
        navButtonsAlwaysVisible
        fullHeightHover={false}
        indicators={false}
        animation="slide"
        interval={15000}
        navButtonsWrapperProps={{
          className: styles["controls"],
        }}
        navButtonsProps={{
          className: styles["controls-icon"],
        }}
      >
        {COMMENTS.map((c) => (
          <Paper key={c.customer.name} className={styles.paper}>
            <p className={styles.comment}>“{c.comment}”</p>
            <div className={styles["customer-info"]}>
              <div className={styles["customer-name"]}>{c.customer.name}</div>
              <span className={styles["customer-job"]}>{c.customer.job}</span>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}
