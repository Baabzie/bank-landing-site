import Link from "next/link";
import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  const pagesArray: string[] = ["home", "about", "contact", "blog", "careers"];

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <nav className={styles["nav"]}>
      <ul>
        {pagesArray.map((page) => (
          <li key={page}>
            <div className={styles["overline"]}></div>
            <Link href={`/${page}`}>{capitalizeFirstLetter(page)}</Link>
            <div className={styles["underline"]}></div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
