import { MouseEventHandler, memo, useMemo } from "react";
import Styles from "./post-card.module.scss";

interface Props {
  children: React.ReactNode;
  // onClick необязательный пока нет бизнес-логики
  onClick?: MouseEventHandler<HTMLButtonElement>;
  extraClass?: string;
}

const PostCard = memo(({ children, onClick, extraClass }: Props) => {
  const classNames = useMemo(() => {
    const classes = [Styles.button];
    if (extraClass) {
      classes.push(extraClass);
    }

    return classes;
  }, [extraClass]);

  return (
    <li className={Styles.cnt}>
      <button className={classNames.join(" ")} type="button" onClick={onClick}>
        {children}
      </button>
    </li>
  );
});

export default PostCard;
