import styles from "./bigCard.module.scss";

function bigCard({
  cardCaption,
  src,
}: {
  cardCaption: string;
  src: string | null;
}): JSX.Element {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${src})`,
        }}
      >
        <div className={styles.cardCaption}>{cardCaption}</div>
      </div>
    </div>
  );
}

export default bigCard;
