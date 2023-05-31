import { SearchIcon } from "../Icons";
import styles from "./search.module.scss";
import { useSearch } from "@/hooks";

function Search({ toggleSearch }: { toggleSearch: () => void }) {
  const { search, setSearch } = useSearch();
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.inputIcon}>
          <SearchIcon />
        </div>
        <input
          value={search}
          className={styles.input}
          placeholder="Search movie title"
          onChange={(e) => setSearch(e.target.value)}
          onFocus={toggleSearch}
          onBlur={toggleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
