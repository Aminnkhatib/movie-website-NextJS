import classNames from "classnames";
import { useState } from "react";
import styles from "./toggleButton.module.scss";

function ToggleButton({
  toggle,
  genreName,
}: {
  toggle: () => void;
  genreName: string;
}) {
  const [isButtonOn, setIsButtonOn] = useState(false);

  const handleClick = () => {
    console.log("test");
    setIsButtonOn(!isButtonOn);
    toggle();
  };

  return (
    <button
      className={classNames("toggle-Button", {
        "toggle-Button-Active": isButtonOn,
      })}
      onClick={() => handleClick()}
    >
      {genreName}
    </button>
  );
}

export default ToggleButton;
