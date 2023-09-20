import { memo, MouseEventHandler } from "react";
import Styles from "./button-round.module.scss";

interface Props {
  type: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: JSX.Element;
  ariaLabel: string;
  isTransparent?: boolean;
  svgInitColor?: "gray" | "black";
  hint?: string;
  extraClass?: string;
}

const ButtonRound = memo(
  ({
    type,
    onClick,
    icon,
    ariaLabel,
    isTransparent,
    svgInitColor = "gray",
    hint,
    extraClass,
  }: Props) => {
    let svgColor;

    switch (svgInitColor) {
      case "gray":
        svgColor = Styles.svgGray;
        break;
      case "black":
        svgColor = Styles.svgBlack;
        break;
      default:
        svgColor = null;
        break;
    }

    const classNames = [Styles.button];
    if (isTransparent) {
      classNames.push(Styles.transparent);
    }
    if (svgColor) {
      classNames.push(svgColor);
    }
    if (extraClass) {
      classNames.push(extraClass);
    }

    return (
      <button
        className={classNames.join(" ")}
        type={type}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {icon}
        {hint && (
          <div className={Styles.hintCnt}>
            <p className={Styles.hint}>{hint}</p>
          </div>
        )}
      </button>
    );
  },
);

export default ButtonRound;
