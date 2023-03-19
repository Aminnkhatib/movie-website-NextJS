import React from "react";
import styles from "./navigation.module.scss";

function Navigation(): JSX.Element {
  return (
    <ul className={styles.Navigation}>
      <li className={styles.listItem}>
        <a href="">Home</a>
      </li>
      <li className={styles.listItem}>
        <a href="">Discover</a>
      </li>
    </ul>
  );
}

export default Navigation;
