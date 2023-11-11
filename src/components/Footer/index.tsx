import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import EnvelopeIcon from "../../assets/icons/Envelope";
import LocationIcon from "../../assets/icons/Location";
import PhoneIcon from "../../assets/icons/Phone";
import FacebookIcon from "../../assets/icons/Facebook";
import CompanyIcon from "../../assets/icons/Company";
import XIcon from "../../assets/icons/X";

import style from "./styles.module.scss";
import logo from "../../assets/images/Logo600x64PNG.png";

export default function Footer() {
  const pathname = useLocation().pathname;

  return (
    <footer className={`${style.footer} ${pathname == "/" ? style.index : ""}`}>
      <div className={style["contact"]}>
        <div className={style.logo}>
          <Link to="/">
            <img src={logo} alt="Bookkepers pro" />
          </Link>
        </div>
        <div className={style["contact-us"]}>
          <h2 className={style["contact-us-title"]}>Contact Us</h2>
          {contacts.map(({ Icon, text }) => (
            <div key={text} className={style["contact-us-item"]}>
              <Icon />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className={style["social-networks"]}>
          {socialNetworks.map(({ name, Icon, link }) => (
            <a
              key={link}
              href={link}
              title={name}
              className={style["social-network-link"]}
              target="_blank"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <div className={style["copyright"]}>
        Copyright 2023 Bookkeepers Pro All Rights Reserved | Web Design by{" "}
        <a href="https://www.linkedin.com/in/saraviadiego/" target="_blank">
          Diego Saravia
        </a>
      </div>
    </footer>
  );
}

const contacts = [
  { Icon: PhoneIcon, text: "323 868 8650" },
  { Icon: EnvelopeIcon, text: "info@bookkeeperspro.com" },
  {
    Icon: LocationIcon,
    text: "333 S. Grand Ave. Suite 3310 Los Angeles, CA 90071",
  },
];

const socialNetworks = [
  {
    name: "Facebook",
    Icon: FacebookIcon,
    link: "https://www.facebook.com/profile.php?id=100063633247660",
  },
  {
    name: "X",
    Icon: XIcon,
    link: "https://twitter.com/i/flow/login?redirect_after_login=%2Fbookkeeperspro",
  },
  {
    name: "Yelp",
    Icon: CompanyIcon,
    link: "https://www.yelp.com/biz/bookkeepers-pro-los-angeleshttps://www.yelp.com/biz/bookkeepers-pro-los-angeles",
  },
];
