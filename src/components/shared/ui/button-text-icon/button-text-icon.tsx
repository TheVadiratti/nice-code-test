import { memo, MouseEventHandler, useMemo } from "react";
import Styles from "./button-text-icon.module.scss";

interface Props {
  type: "button" | "submit" | "reset";
  label: string;
  icon: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  extraClass?: string;
}

const ButtonTextIcon = memo(
  ({ type, label, icon, onClick, extraClass }: Props) => {
    const classNames = useMemo(() => {
      const names = [Styles.button];
      if (extraClass) {
        names.push(Styles.extraClass);
      }
      return names;
    }, [extraClass]);

    return (
      <button className={classNames.join(" ")} type={type} onClick={onClick}>
        <p className={Styles.label}>{label}</p>
        {icon}
      </button>
    );
  },
);

export default ButtonTextIcon;
