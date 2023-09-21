import { memo, useMemo } from "react";
import Styles from "./post-card.module.scss";

interface Props {
  children: JSX.Element;
  extraClass?: string;
}

const PostCard = memo(({ children, extraClass }: Props) => {
  const classNames = useMemo(() => {
    const classes = [Styles.cnt];
    if (extraClass) {
      classes.push(extraClass);
    }

    return classes;
  }, [extraClass]);

  return <li className={classNames.join(" ")}>{children}</li>;
});

export default PostCard;
