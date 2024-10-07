import styles from "./Header.module.scss";

import Navigation from "./Navigation";
import RequestInviteButton from "../requestInviteButton/RequestInviteButton";

const Header: React.FC = () => {
  return (
    <header className={styles["header"]}>
      <img src="/images/logo.svg" alt="Easybanks logo" />
      <Navigation />
      <RequestInviteButton />
    </header>
  );
};

export default Header;
