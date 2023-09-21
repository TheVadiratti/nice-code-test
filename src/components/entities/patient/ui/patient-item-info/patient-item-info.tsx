import { memo } from "react";
import Avatar from "@/components/shared/ui/avatar/avatar";
import { StaticImageData } from "next/image";
import Styles from "./patient-item-info.module.scss";

interface Props {
  name: string;
  avatar: StaticImageData;
}

const PatientItemInfo = memo(({ name, avatar }: Props) => (
  <div className={Styles.info}>
    <Avatar size="small" img={avatar} alt="small-avatar" />
    <p className={Styles.name}>{name}</p>
  </div>
));

export default PatientItemInfo;
