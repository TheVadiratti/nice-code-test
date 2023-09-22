import { memo, MouseEventHandler, useMemo } from "react";
import Styles from "./dropdown.module.scss";

interface Props {
  label: string;
  // onClick необязателен пока нет бизнес логики (для демонстрации)
  onClick?: MouseEventHandler<HTMLButtonElement>;
  extraClass?: string;
}

const DropdownItem = memo(({ label, onClick, extraClass }: Props) => {
  const classNames = useMemo(() => {
    const classes = [Styles.option];
    if (extraClass) {
      classes.push(extraClass);
    }
    return classes;
  }, [extraClass]);

  return (
    <button className={classNames.join(" ")} type="button" onClick={onClick}>
      <p className={Styles.label}>{label}</p>
    </button>
  );
});

export default DropdownItem;
