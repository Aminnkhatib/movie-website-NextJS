import { Chau_Philomene_One } from "next/font/google";
import Navigation from "../navigation";
import Search from "../search";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Navigation />
      <Search inputValue={""} />
      {children}
    </div>
  );
}

export default Layout;
