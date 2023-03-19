import styles from "./search.module.scss";

function Search({ inputValue }: { inputValue: string }) {
  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder="Search movie title" />
    </div>
  );
}

export default Search;
