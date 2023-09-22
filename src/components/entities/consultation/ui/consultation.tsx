import { memo, useMemo } from "react";
import PostCard from "@/components/shared/ui/post-card/post-card";
import ConsOnlineIcon from "@/components/shared/ui/_icons/cons-online";
import ConsPrivateIcon from "@/components/shared/ui/_icons/cons-private";
import Styles from "./consultation.module.scss";

interface Props {
  name: string;
  date: string;
  status?: string;
}

const Consultation = memo(({ name, date, status }: Props) => {
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
      {status && <p className={Styles.status}>{status}</p>}
    </PostCard>
  );
});

export default Consultation;
