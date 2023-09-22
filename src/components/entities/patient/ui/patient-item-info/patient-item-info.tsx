import { memo } from "react";
import { useAppSelector } from "@/store/hooks";
import Avatar from "@/components/shared/ui/avatar/avatar";
import { StaticImageData } from "next/image";
import Checkbox from "@/components/shared/ui/checkbox/checkbox";
import Styles from "./patient-item-info.module.scss";

interface Props {
  name: string;
  avatar?: StaticImageData;
}

const PatientItemInfo = memo(({ name, avatar }: Props) => {
  const onSelectMode = useAppSelector(
    (state) => state.modeSlice.selectPatientsCards,
  );

  return (
    <div className={Styles.info}>
      {onSelectMode && (
        <Checkbox isChecked={false} htmlFor={name} onChange={() => {}} />
      )}
      <Avatar size="small" img={avatar} alt="small-avatar" />
      <p className={Styles.name}>{name}</p>
    </div>
  );
});

export default PatientItemInfo;
