import { memo } from "react";
import Avatar from "@/components/shared/ui/avatar/avatar";
import Styles from "./patient-info.module.scss";

interface Props {
  moreButton?: JSX.Element;
}

const PatientInfo = memo(({ moreButton }: Props) => (
  <div className={Styles.card}>
    <Avatar alt="avatar" size="default" img="" />
    <div className={Styles.info}>
      <p className={Styles.name}>Рожков Денис Петрович</p>
      <p className={Styles.age}>30 лет, муж</p>
    </div>
    {moreButton && moreButton}
  </div>
));

export default PatientInfo;
