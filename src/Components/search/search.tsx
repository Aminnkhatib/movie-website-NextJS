import { useRouter } from "next/router";
import styles from "./search.module.scss";
import { useSearch } from "@/hooks";

function Search({ toggleSearch }: { toggleSearch: () => void }) {
  const router = useRouter();
  const { search, setSearch } = useSearch();
  return (
    <div className={styles.container}>
      <input
        value={search}
        className={styles.input}
        placeholder="Search movie title"
        onChange={(e) => setSearch(e.target.value)}
        onFocus={toggleSearch}
        onBlur={toggleSearch}
      />
    </div>
  );
}

export default Search;
