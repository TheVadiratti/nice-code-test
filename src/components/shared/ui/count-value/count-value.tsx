import { memo, useMemo } from "react";
import Styles from "./count-value.module.scss";

interface Props {
  value: number;
  isActive?: boolean;
  extraClass?: string;
}

const CountValue = memo(({ value, isActive, extraClass }: Props) => {
  const classNames = useMemo(() => {
    const names = [Styles.cnt];
    if (isActive) {
      names.push(Styles.active);
    }
    if (extraClass) {
      names.push(Styles.extraClass);
    }

    return names;
  }, [isActive, extraClass]);

  return (
    <div className={classNames.join(" ")}>
      <p className={Styles.value}>{String(value)}</p>
    </div>
  );
});

export default CountValue;
