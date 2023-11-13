import { ReactElement } from "react";
import styles from "./styles.module.scss";

export default function TwoBoxesContainer({
  box1,
  box2,
  reverseOnResponsive,
}: Props) {
  const boxes = [box1, box2];

  return (
    <section
      className={`${styles["two-boxes-container"]} ${
        reverseOnResponsive ? styles.reverse : ""
      }`}
    >
      {boxes.map((b, i) => (
        <div
          key={i}
          className={`${styles.box} ${b?.className || ""}`}
          style={{
            backgroundColor: b?.bgColor,
          }}
        >
          {b?.component}
        </div>
      ))}
    </section>
  );
}

type Props = {
  box1?: Box;
  box2?: Box;
  reverseOnResponsive?: boolean;
};

type Box = {
  bgColor?: string;
  component: ReactElement;
  className?: string;
};
