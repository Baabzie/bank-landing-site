import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles["footer"]}>
      <img src="/images/logo.svg" alt="Easybanks logo" />
    </footer>
  );
};

export default Footer;
