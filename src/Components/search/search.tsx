import useSearch from "@/hooks/useSearch";
import { useRouter } from "next/router";
import styles from "./search.module.scss";

function Search() {
  const router = useRouter();
  const { search, setSearch } = useSearch();
  return (
    <div className={styles.container}>
      <input
        value={search}
        className={styles.input}
        placeholder="Search movie title"
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => router.push("/searchPage")}
        onBlur={() => router.push("/")}
      />
    </div>
  );
}

export default Search;
