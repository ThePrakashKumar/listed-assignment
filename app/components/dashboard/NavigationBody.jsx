import styles from "./navigationBody.module.css";
import Navigator from "./Navigator";
const Navigation = () => {
  return (
    <div className={styles.navigationBodyContainer}>
      <h1 className={styles.brand}>Board.</h1>
      <Navigator />
      <div className={styles.bottomLinkContainer}>
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Navigation;
