import { Chau_Philomene_One } from "next/font/google";
import Navigation from "../navigation";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
