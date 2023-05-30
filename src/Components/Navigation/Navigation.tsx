import Link from "next/link";
import React from "react";
import styles from "./navigation.module.scss";
import { HomeIcon } from "../Icons/HomeIcon";
import { DiscoverIcon } from "../Icons/DiscoverIcon";

function Navigation(): JSX.Element {
  return (
    <ul className={styles.Navigation}>
      <li className={styles.listItem}>
        <Link href="/">
          <HomeIcon variant="active" />
          Home
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/discoverPage">
          <DiscoverIcon variant="active" />
          Discover
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
