import styles from "./smallCard.module.scss";

function SmallCard({
  src,
  cardTitle,
  cardUnderTitle,
}: {
  src: string | null;
  cardTitle: string;
  cardUnderTitle: string;
}): JSX.Element {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${src})`,
        }}
      />
      <div className={styles.cardTitle}>
        {cardTitle}
        <div className={styles.cardUnderTitle}>{cardUnderTitle}</div>
      </div>
    </div>
  );
}

export default SmallCard;
