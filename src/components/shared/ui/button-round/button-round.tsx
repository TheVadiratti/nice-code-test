import { memo, MouseEventHandler } from "react";
import Styles from "./button-round.module.scss";

interface Props {
  type: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: JSX.Element;
  ariaLabel: string;
  hint?: string;
  extraClass?: string;
}

const ButtonRound = memo(
  ({ type, onClick, icon, ariaLabel, hint, extraClass }: Props) => (
    <button
      className={`${Styles.button} ${extraClass}`}
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
  ),
);

export default ButtonRound;
