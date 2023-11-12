import { PropsWithChildren, ReactNode } from "react";
import OrangeBorderCard from "../OrangeBorderCard";

import styles from "./styles.module.scss";

export default function CardsListSection(props: Props) {
  const { title, children, items, className } = props;

  return (
    <div className={`${styles["cards-list-section"]} ${className}`}>
      <h1 className={styles["main-title"]}>{title}</h1>
      <p className={styles["description"]}>{children}</p>
      <div className={styles.cards}>
        {items.map(({ title, content, icon }) => (
          <OrangeBorderCard
            key={title}
            title={title}
            content={content}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
}

type Props = PropsWithChildren<{
  title: ReactNode;
  className?: string;
  items: {
    title: string;
    content: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  }[];
}>;
