import styles from "./bigCard.module.scss";

function bigCard({
  cardTitle,
  cardUnderTitle,
  src,
}: {
  cardTitle: string;
  cardUnderTitle: string;
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
        <div className={styles.cardTitle}>
          {cardTitle}
          <div className={styles.cardUnderTitle}>{cardUnderTitle}</div>
        </div>
      </div>
    </div>
  );
}

export default bigCard;
