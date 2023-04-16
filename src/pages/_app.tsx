import Layout from "@/components/layout";
import { LevelContext } from "@/context/search";
import "@/styles/globals.scss";
import "@fontsource/inter";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState("");
  return (
    <LevelContext.Provider value={{ search, setSearch }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LevelContext.Provider>
  );
}
