import { SVGProps } from "react";

import styles from "./styles.module.scss";

export default function OrangeBorderCard({
  title,
  content,
  icon: Icon,
}: Props) {
  return (
    <div className={styles.card}>
      <div className={styles["card-icon-container"]}>
        <Icon className={styles["card-icon"]} />
      </div>
      <h3 className={styles["card-title"]}>{title}</h3>
      <p className={styles["card-content"]}>{content}</p>
    </div>
  );
}

type Props = {
  title: string;
  content: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};
