import styles from "./smallCard.module.scss";

function SmallCard({ src }: { src: string | null }): JSX.Element {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${src})`,
        }}
      />
    </div>
  );
}

export default SmallCard;
