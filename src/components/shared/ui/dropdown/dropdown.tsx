import { memo, ReactNode, useMemo } from "react";
import Styles from "./dropdown.module.scss";

interface Props {
  children: ReactNode;
  extraClass?: string;
}

const Dropdown = memo(({ children, extraClass }: Props) => {
  const classNames = useMemo(() => {
    const classes = [Styles.dropdown];
    if (extraClass) {
      classes.push(extraClass);
    }
    return classes;
  }, [extraClass]);

  return <div className={classNames.join(" ")}>{children}</div>;
});

export default Dropdown;
