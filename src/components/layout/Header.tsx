import styles from "./Header.module.scss";

import Link from "next/link";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import RequestInviteButton from "../requestInviteButton/RequestInviteButton";

const Header: React.FC = () => {
  return (
    <header className={styles["header"]}>
      <Link href={`/home`}>
        <img src={`./images/logo.svg`} alt="Easybanks logo" />
      </Link>
      <div className={styles["display-desktop-div"]}>
        <Navigation />
      </div>
      <div className={styles["display-desktop-div"]}>
        <RequestInviteButton />
      </div>
      <div className={styles["display-mobile-div"]}>
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
