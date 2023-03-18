import React from "react";
import styles from "./Navigation.module.scss";

function Navigation() {
  return (
    <ul className={styles.Navigation}>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">Projects</a>
      </li>
      <li>
        <a href="">Skills</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </ul>
  );
}

export default Navigation;
