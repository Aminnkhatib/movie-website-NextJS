import styles from "./Content.module.scss";

// import computerImage from "./../Illustrations/computerImage.svg";

function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.introduction}>
        <p className={styles.greeting}>👋 Hello, I'm</p>
        <p className={styles.name}>Aminn</p>
        <p className={styles.frontend}>&lt;&gt;Frontend Developer&lt;/&gt;</p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={process.env.PUBLIC_URL + "/computerImage.svg"}
          alt="computerImage"
          className={styles.computerImage}
        />
      </div>
    </div>
  );
}

export default Content;
