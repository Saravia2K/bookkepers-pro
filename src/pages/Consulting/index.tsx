import CanvasIcon from "../../assets/icons/Canvas";
import CoinIcon from "../../assets/icons/Coin";
import DollarIcon from "../../assets/icons/Dollar";
import FacebookIcon from "../../assets/icons/Facebook";
import GearIcon from "../../assets/icons/Gear";
import ScreenIcon from "../../assets/icons/Screen";
import CardsListSection from "../../components/CardsListSection";

import styles from "./styles.module.scss";

export default function ConsultingPage() {
  const title = <span className={styles.highlight}>Business Consulting</span>;
  return (
    <CardsListSection
      title={title}
      items={bussines}
      className={styles["consulting-page"]}
    >
      Whether you are starting up a new business or have some concerns about
      your existing business, our business management specialists can help you
      develop new systems to optimize your operations. Together we will evaluate
      your company's history and current position, in order to make realistic
      and strategically strong decisions that will facilitate the next stage of
      your company's growth.
    </CardsListSection>
  );
}

const bussines = [
  {
    title: "Computer systems",
    content:
      "Setup computer systems. Improve your current computer system. Provide maintenance service to your computer system. Setup computer network. Provide maintenance to your existent computer network. Data backup systems. Computer repairs (Windows and Mac)",
    icon: ScreenIcon,
  },
  {
    title: "Incorporation services",
    content: "Sole Proprietorship C Corporation S Corporation Non-Profit LLC",
    icon: DollarIcon,
  },
  {
    title: "Promotios and social media",
    content:
      "Setup and train you how to use the social media such as, Facebook Page, Twitter, Google+, Yelp, Linkdln, YouTube and Instagram. Network business event suggestions. Business cards ideas. Social events ideas. Marketing ideas. Flyers ideas.",
    icon: FacebookIcon,
  },
  {
    title: "Cash flow",
    content: "Weekly, monthly, quarterly and annual cash flows.",
    icon: CoinIcon,
  },
  {
    title: "Accounting systems",
    content:
      "Setup/Design a brand new accounting system. Dig into your current accounting system and help you understand it. Improve your current accounting system.",
    icon: GearIcon,
  },
  {
    title: "Office management systems",
    content: "Professional IT services provided at a reasonable price.",
    icon: CanvasIcon,
  },
];
