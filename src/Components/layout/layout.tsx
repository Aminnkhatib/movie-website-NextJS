import Navigation from "../Navigation";
import Search from "../search";
import styles from "./layout.module.scss";

function Layout({ children }: { children: React.ReactNode }) {
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
