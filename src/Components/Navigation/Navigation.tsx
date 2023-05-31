import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "./navigation.module.scss";
import { useMediaQuery } from "@/hooks";
import { useHover } from "@/hooks";
import { useRouter } from "next/router";
import { HomeIcon, DiscoverIcon } from "../Icons";

//used for hovering over svg and label
function LinkItem({ link }: { link: any }) {
  const ref = useRef(null);
  const isHovered = useHover(ref);
  const router = useRouter();
  const isCurrent = router.pathname === link.href;

  const [color, setColor] = useState(
    isCurrent ? "white" : "rgba(131, 131, 131, 1)"
  );

  const Icon = link.icon;

  useEffect(() => {
    if (isCurrent) {
      setColor("white");
    } else {
      setColor(isHovered ? "white" : "rgba(131, 131, 131, 1)");
    }
  }, [isHovered, router.pathname]);

  return (
    <li key={link.label} className={styles.listItem}>
      <Link ref={ref} href={link.href}>
        <Icon fill={color} />
        <span
          style={{
            color,
          }}
        >
          {link.label}
        </span>
      </Link>
    </li>
  );
}

function Navigation({ isMenuOpen }: { isMenuOpen: boolean }): JSX.Element {
  // second arg is default value, server doesn't know if user is desktop. hydration mismatch fix
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const links = [
    {
      icon: HomeIcon,
      href: "/",
      label: "Home",
    },
    {
      icon: DiscoverIcon,
      href: "/discoverPage",
      label: "Discover",
    },
  ];

  return (
    <>
      {(isDesktop || isMenuOpen) && (
        <ul className={styles.Navigation}>
          {links.map((link) => (
            <LinkItem key={link.label} link={link} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Navigation;
