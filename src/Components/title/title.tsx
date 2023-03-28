import styles from "./title.module.scss";

function Title({ titleText }: { titleText: string }) {
  return <h2 className={styles.title}>{titleText}</h2>;
}

export default Title;
