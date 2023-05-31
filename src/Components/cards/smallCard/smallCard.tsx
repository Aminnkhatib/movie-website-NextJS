import styles from "./smallCard.module.scss";
import Image from "next/image";

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
      <Image
        src={`https://image.tmdb.org/t/p/w500${src}`}
        className={styles.imgContent}
        alt="img"
        fill
      />
      <div className={styles.cardTitle}>
        {cardTitle}
        <div className={styles.cardUnderTitle}>{cardUnderTitle}</div>
      </div>
    </div>
  );
}

export default SmallCard;
