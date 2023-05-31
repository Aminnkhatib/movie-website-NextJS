import classNames from "classnames";
import styles from "./toggleButton.module.scss";

function ToggleButton({
  toggleActive,
  genreName,
  active,
}: {
  active: boolean;
  toggleActive: () => void;
  genreName: string;
}) {
  return (
    <button
      className={classNames(styles["toggle-Button"], {
        [styles["toggle-Button-Active"]]: active,
      })}
      onClick={toggleActive}
    >
      {genreName}
    </button>
  );
}

export default ToggleButton;
