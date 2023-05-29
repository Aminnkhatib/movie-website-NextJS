import styles from "./bigCard.module.scss";
import Image from 'next/image'

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
        <Image src={`https://image.tmdb.org/t/p/w1280${src}`} className={styles.imgContent} alt="img" fill/>
        <div className={styles.cardTitle}>
          {cardTitle}
          <div className={styles.cardUnderTitle}>{cardUnderTitle}</div>
        </div>
    </div>
  );
}

export default bigCard;
