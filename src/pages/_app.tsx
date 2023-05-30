import Layout from "@/Components/layout";
import { LevelContext } from "@/context/search";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState("");
  return (
    <LevelContext.Provider value={{ search, setSearch }}>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout className={inter.className}>
        <Component {...pageProps} />
      </Layout>
    </LevelContext.Provider>
  );
}
