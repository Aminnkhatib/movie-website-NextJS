import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./search.module.scss";

function Search({ input }: { input: string }) {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Search movie title"
        onChange={() => setInputValue(input)}
        onFocus={() => router.push("/searchPage")}
        onBlur={() => router.push("/")}
      />
    </div>
  );
}

export default Search;
