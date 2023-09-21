import { MouseEventHandler, memo, useMemo } from "react";
import Styles from "./button-text.module.scss";

interface Props {
  type: "button" | "submit" | "reset";
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  extraClass?: string;
}

const ButtonText = memo(({ type, label, onClick, extraClass }: Props) => {
  const classNames = useMemo(() => {
    const names = [Styles.button];
    if (extraClass) {
      names.push(extraClass);
    }

    return names;
  }, [extraClass]);

  return (
    <button className={classNames.join(" ")} type={type} onClick={onClick}>
      <p className={Styles.label}>{label}</p>
    </button>
  );
});

export default ButtonText;
