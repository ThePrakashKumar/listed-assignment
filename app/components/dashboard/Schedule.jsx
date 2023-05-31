import styles from "./Schedule.module.css";
const Schedule = () => {
  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.scheduleHeader}>
        <span className={styles.title}>Today's schedule</span>
        <span className={styles.selectText}>
          Sell All{" "}
          <svg
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.selectIcon}
          >
            <path
              d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z"
              fill="#858585"
            />
          </svg>
        </span>
      </div>
      <div className={styles.scheduleDetailsContainer}>
        <div className={styles.schedule}>
          <span className={`${styles.bar} ${styles.barGreen}`}></span>
          <div className={styles.scheduleDetail}>
            <span className={styles.scheduleTitle}>
              Meeting with suppliers from Kuta Bali
            </span>
            <span className={styles.scheduleTime}>14.00-15.00</span>
            <span className={styles.scheduleVenue}>
              at Sunset Road, Kuta, Bali
            </span>
          </div>
        </div>
        <div className={styles.schedule}>
          <span className={`${styles.bar} ${styles.barBlue}`}></span>
          <div className={styles.scheduleDetail}>
            <span className={styles.scheduleTitle}>
              Check operation at Giga Factory 1
            </span>
            <span className={styles.scheduleTime}>18.00-20.00</span>
            <span className={styles.scheduleVenue}>at Central Jakarta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
