import Link from "next/link";
import styles from "./MobileNavigation.module.scss";
import { useState, useEffect } from "react";

const MobileNavigation: React.FC = () => {
  const [navigationOpen, setNavigationOpen] = useState<boolean>(false);

  const pagesArray: string[] = ["home", "about", "contact", "blog", "careers"];

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const openCloseNavigation = () => {
    setNavigationOpen((prevState) => !prevState);
  };

  // To disable scroll on page while hamburger menu is opened

  useEffect(() => {
    if (navigationOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [navigationOpen]);

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
        <>
          <div
            onClick={() => {
              openCloseNavigation();
            }}
            className={styles["dark-background"]}
          />
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
        </>
      )}
    </>
  );
};

export default MobileNavigation;
