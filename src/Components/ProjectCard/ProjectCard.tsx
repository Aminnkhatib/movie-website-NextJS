import styles from "./ProjectCard.module.scss";

function ProjectCard({
  cardCaption,
  src,
  linkTo,
}: {
  cardCaption: string;
  src: string;
  linkTo: string;
}): JSX.Element {
  return (
    <a href={linkTo} className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + src})` }}
      >
        <div className={styles.cardCaption}>{cardCaption}</div>
      </div>
    </a>
  );
}

export default ProjectCard;
