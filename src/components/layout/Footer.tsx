import styles from "./Footer.module.scss";
import Link from "next/link";
import RequestInviteButton from "../requestInviteButton/RequestInviteButton";

const Footer: React.FC = () => {
  const pagesArray: string[] = [
    "home",
    "about",
    "contact",
    "blog",
    "careers",
    "privacy-policy",
  ];

  const capitalizeFirstLetter = (str: string) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" ");
  };

  return (
    <footer className={styles["footer"]}>
      <div className={styles["logo-icon-div"]}>
        {/* <img src="/images/logo.svg" alt="Easybanks logo" /> */}
        <div className={styles["icon-div"]}>
          <img src="/images/icon-facebook.svg" alt="Facebook Icon" />
          <img src="/images/icon-youtube.svg" alt="Youtube Icon" />
          <img src="/images/icon-twitter.svg" alt="Twitter Icon" />
          <img src="/images/icon-pinterest.svg" alt="Pinterest Icon" />
          <img src="/images/icon-instagram.svg" alt="Instagram Icon" />
        </div>
      </div>
      <nav>
        <ul>
          {pagesArray.map((page) => (
            <li key={page}>
              <Link href={`/${page}`}>{capitalizeFirstLetter(page)}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles["right-side"]}>
        <RequestInviteButton />
        <p>@ Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
