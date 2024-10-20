import Link from "next/link";
import styles from "./MobileNavigation.module.scss";
import { useState } from "react";

const MobileNavigation: React.FC = () => {
  const [navigationOpen, setNavigationOpen] = useState<boolean>(false);

  const pagesArray: string[] = ["home", "about", "contact", "blog", "careers"];

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const openCloseNavigation = () => {
    setNavigationOpen((prevState) => !prevState);
  };

  return (
    <>
      <button
        onClick={() => {
          openCloseNavigation();
        }}
        className={styles["menu-btn"]}
      >
        {!navigationOpen ? (
          <img src="/images/icon-hamburger.svg" alt="Hamburger menu" />
        ) : (
          <img src="/images/icon-close.svg" alt="Close hamburger menu" />
        )}
      </button>
      {navigationOpen && (
        <nav className={styles["nav"]}>
          <ul>
            {pagesArray.map((page) => (
              <li key={page}>
                <Link
                  onClick={() => {
                    openCloseNavigation();
                  }}
                  href={`/${page}`}
                >
                  {capitalizeFirstLetter(page)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileNavigation;
