import { memo, MouseEventHandler, useMemo } from "react";
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
    const svgColor = useMemo(() => {
      switch (svgInitColor) {
        case "gray":
          return Styles.svgGray;
        case "black":
          return Styles.svgBlack;
        default:
          return null;
      }
    }, [svgInitColor]);

    const classNames = useMemo(() => {
      const names = [Styles.button];
      if (isTransparent) {
        names.push(Styles.transparent);
      }
      if (svgColor) {
        names.push(svgColor);
      }
      if (extraClass) {
        names.push(extraClass);
      }
      return names;
    }, [isTransparent, extraClass, svgColor]);

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