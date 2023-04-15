import Link from "next/link";
import React from "react";
import styles from "./navigation.module.scss";

function Navigation(): JSX.Element {
  return (
    <ul className={styles.Navigation}>
      <li className={styles.listItem}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/discoverPage">Discover</Link>
      </li>
    </ul>
  );
}

export default Navigation;
