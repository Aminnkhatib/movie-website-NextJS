import classNames from "classnames";
import Navigation from "../Navigation";
import Search from "../search";
import styles from "./layout.module.scss";
import { useState } from "react";
import { useMediaQuery } from "@/hooks";
import { Union, MenuIcon } from "../Icons";
import SearchSection from "../search/searchSection";

function MobileNavigationButton({
  isMenuOpen,
  toggle,
}: {
  isMenuOpen: boolean;
  toggle: () => void;
}) {
  // second arg is default value, server doesn't know if user is desktop. Hydration mismatch fix
  const isDesktop = useMediaQuery("(max-width: 768px)", false);

  return (
    <>
      {isDesktop && (
        <button onClick={toggle} className={styles.mobileMenuButton}>
          {isMenuOpen ? <Union /> : <MenuIcon />}
        </button>
      )}
    </>
  );
}

function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);

  return (
    <div className={classNames([styles.layout, className])}>
      <Navigation isMenuOpen={isMenuOpen} />
      <div className={styles.base}>
        <header className={styles.mobileHeader}>
          <div className={styles.moviesTitle}>
            <span>Movies</span>
          </div>
          <MobileNavigationButton
            isMenuOpen={isMenuOpen}
            toggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </header>
        <div
          className={classNames(styles["searchSectionContainer"], {
            [styles["baseMobileNavActive"]]: isMenuOpen,
          })}
        >
          <Search toggleSearch={() => setIsShowSearch(!isShowSearch)} />
          {isShowSearch ? <SearchSection /> : children}
          <footer className={styles.footer}>
            <span className={styles.disclaimer}>
              This product uses the TMDb API but is not endorsed or certified by
              TMDb
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Layout;
