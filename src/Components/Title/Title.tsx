import styles from "./Title.module.scss";

function Title({
  titleText,
  underlineColor,
}: {
  titleText: String;
  underlineColor: string;
}) {
  return (
    <div className={styles.title}>
      <h2>{titleText}</h2>
      <hr />
    </div>
  );
}

export default Title;
