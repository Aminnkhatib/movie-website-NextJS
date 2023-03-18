import styles from "./smallCard.module.scss";

function smallCard({ cardCaption }: { cardCaption: string }): JSX.Element {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL})` }}
      >
        <div className={styles.cardCaption}>{cardCaption}</div>
      </div>
    </div>
  );
}

export default smallCard;
