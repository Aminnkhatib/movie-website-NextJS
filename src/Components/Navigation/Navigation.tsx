import React from "react";
import styles from "./navigation.module.scss";

function Navigation(): JSX.Element {
  return (
    <ul className={styles.Navigation}>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">Discover</a>
      </li>
    </ul>
  );
}

export default Navigation;
