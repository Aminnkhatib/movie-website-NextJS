import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [state, setState] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetch("/api/hello").then((data) => data.json());
      setState(data);
    })();
  }, []);

  return <div>{state && JSON.stringify(state)}</div>;
}
