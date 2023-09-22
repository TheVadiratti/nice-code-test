/* eslint-disable jsx-a11y/no-static-element-interactions */
import { memo, MouseEventHandler, useMemo } from "react";
import Styles from "./dropdown-item.module.scss";

interface Props {
  label: string;
  // onClick необязателен пока нет бизнес логики (для демонстрации)
  onClick?: MouseEventHandler<HTMLDivElement>;
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
    <div className={classNames.join(" ")} onClick={onClick}>
      <p className={Styles.label}>{label}</p>
    </div>
  );
});

export default DropdownItem;
