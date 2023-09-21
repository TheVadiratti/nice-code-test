import { memo, useMemo } from "react";
import PostCard from "@/components/shared/ui/post-card/post-card";
import ConsOnlineIcon from "@/components/shared/ui/_icons/cons-online";
import ConsPrivateIcon from "@/components/shared/ui/_icons/cons-private";
import Styles from "./consultation.module.scss";

interface Props {
  name: string;
  date: string;
}

const Consultation = memo(({ name, date }: Props) => {
  const icon = useMemo(() => {
    if (name === "Online консультация") {
      return <ConsOnlineIcon />;
    }
    return <ConsPrivateIcon />;
  }, [name]);

  return (
    <PostCard extraClass={Styles.card}>
      <div className={Styles.icon}>{icon}</div>
      <div className={Styles.info}>
        <p className={Styles.name}>{name}</p>
        <p className={Styles.date}>{date}</p>
      </div>
    </PostCard>
  );
});

export default Consultation;
