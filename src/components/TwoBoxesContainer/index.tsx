import { ReactElement } from "react";
import styles from "./styles.module.scss";

export default function TwoBoxesContainer({ box1, box2 }: Props) {
  const boxes = [box1, box2];

  return (
    <div className={styles["two-boxes-container"]}>
      {boxes.map((b, i) => (
        <div
          key={i}
          className={styles.box}
          style={{
            backgroundColor: b?.bgColor,
          }}
        >
          {b?.component}
        </div>
      ))}
    </div>
  );
}

type Props = {
  box1?: Box;
  box2?: Box;
};

type Box = {
  bgColor?: string;
  component: ReactElement;
};
