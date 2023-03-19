import styles from "./smallCard.module.scss";

function smallCard({
  cardCaption,
  src,
}: {
  cardCaption: string;
  src: string;
}): JSX.Element {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className={styles.cardCaption}>{cardCaption}</div>
      </div>
    </div>
  );
}

export default smallCard;
