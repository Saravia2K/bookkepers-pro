import { forwardRef, useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./styles.module.scss";
import logo from "../../assets/images/Logo300x32PNG.png";
import logoLg from "../../assets/images/Logo600x64PNG.png";

export default function Navbar() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const ResponsiveRoutesListRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //#region useEffects
  // Updating windowsSize when windows is being resized
  // to use value inside component
  useEffect(() => {
    const changeWindowSizeState = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", changeWindowSizeState);

    return () => window.removeEventListener("resize", changeWindowSizeState);
  }, []);

  // Scrolling window to top when route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  //#endregion

  //#region Handlers
  const handleMenuIconClick = () => {
    ResponsiveRoutesListRef.current?.classList.toggle(styles.active);
  };

  const handleNavContainerClick = () => {
    ResponsiveRoutesListRef.current?.classList.remove(styles.active);
  };

  const handleLogoClick = () => {
    navigate("/");
    closeNavbar();
  };
  //#endregion

  const closeNavbar = () =>
    ResponsiveRoutesListRef.current?.classList.remove(styles.active);

  return (
    <nav className={styles.nav}>
      <div className={styles["responsive-navbar"]}>
        <IconButton
          onClick={handleMenuIconClick}
          className={styles["menu-icon"]}
        >
          <MenuIcon />
        </IconButton>
        <img
          src={logo}
          alt="Bookkepers Pro"
          className={styles["menu-logo"]}
          onClick={handleLogoClick}
        />
        <RoutesList
          ref={ResponsiveRoutesListRef}
          onContainerClick={handleNavContainerClick}
          onRouteClicked={closeNavbar}
        />
      </div>
      <div className={styles["navbar-container"]}>
        <img
          src={windowSize >= 992 ? logoLg : logo}
          alt="Bookkepers Pro"
          className={styles["navbar-logo"]}
          onClick={() => navigate("/")}
        />
        <RoutesList highlightLinksLocation />
      </div>
    </nav>
  );
}

const RoutesList = forwardRef<HTMLDivElement, RouteListProps>(
  ({ onContainerClick, onRouteClicked, highlightLinksLocation }, ref) => {
    const location = useLocation();

    return (
      <div
        className={styles["urls-container"]}
        ref={ref}
        onClick={onContainerClick}
      >
        <ul
          className={styles["urls-list"]}
          onClick={(e) => e.stopPropagation()}
        >
          {ROUTES.map(({ text, path }, i) => {
            const to = `/${path}`;
            const highlightLink =
              highlightLinksLocation && to == location.pathname;
            return (
              <li
                key={i}
                onClick={onRouteClicked}
                className={highlightLink ? styles.highlight : undefined}
              >
                <Link to={to}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

type RouteListProps = {
  onContainerClick?: () => void;
  onRouteClicked?: () => void;
  highlightLinksLocation?: boolean;
};

const ROUTES = [
  { text: "Home", path: "" },
  { text: "Services", path: "services" },
  { text: "Consulting", path: "consulting" },
  { text: "Team", path: "team" },
  { text: "Contact", path: "contact" },
];
