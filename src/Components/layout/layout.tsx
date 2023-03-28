import { Chau_Philomene_One } from "next/font/google";
import Navigation from "../navigation";
import Search from "../search";
import styles from "./layout.module.scss";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.base}>
        <Search />
        {children}
      </div>
    </div>
  );
}

export default Layout;
