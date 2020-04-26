import styles from "./Loader.module.css";

export const Loader = () => (
  <div className={styles.center}>
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <p>
      <b>Loading</b>
    </p>
  </div>
);
