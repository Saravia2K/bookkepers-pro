import Carousel from "react-multi-carousel";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "react-multi-carousel/lib/styles.css";
import style from "./styles.module.scss";
import COMPANIES from "./companies";

export default function WeWorkWith() {
  return (
    <section id="we-work-with-section" className={style["we-work-with"]}>
      <h2 className={style.title}>
        These are some companies{" "}
        <span className={style.highlight}>we work</span> with
      </h2>
      <p className={style.description}>
        We are all about long term relationships, for some of these companies we
        have been working with them over a decade.
      </p>
      <div className={style["carousel-container"]}>
        <Carousel
          responsive={carouselResponsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          draggable={false}
          customLeftArrow={<LeftArrow />}
          customRightArrow={<RightArrow />}
          itemClass={style["carousel-item"]}
        >
          {COMPANIES.map((c) => (
            <a key={c.link} href={c.link} target="_blank">
              <img src={c.image} />
            </a>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

const LeftArrow = ({ onClick }: CustomArrowsProps) => (
  <IconButton
    onClick={() => onClick && onClick()}
    className={style["carousel-control"]}
  >
    <ChevronLeftIcon />
  </IconButton>
);

const RightArrow = ({ onClick }: CustomArrowsProps) => (
  <IconButton
    onClick={() => onClick && onClick()}
    className={style["carousel-control"]}
    style={{
      right: 0,
    }}
  >
    <ChevronRightIcon />
  </IconButton>
);

const carouselResponsive = {
  desktops: {
    breakpoint: { min: 992, max: 2000 },
    items: 4,
  },
  tablet: { breakpoint: { min: 576, max: 992 }, items: 3 },
  mobile: {
    breakpoint: { min: 0, max: 576 },
    items: 1,
  },
};

type CustomArrowsProps = {
  onClick?: () => void;
};
