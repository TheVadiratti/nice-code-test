import { memo } from "react";
import { useAppSelector } from "@/store/hooks";
import Avatar from "@/components/shared/ui/avatar/avatar";
import Styles from "./patient-info.module.scss";

interface Props {
  moreButton?: JSX.Element;
}

const PatientInfo = memo(({ moreButton }: Props) => {
  const current = useAppSelector((state) => state.patientsSlice.current);

  return (
    <div className={Styles.card}>
      {current && (
        <>
          <Avatar alt="avatar" size="default" img={current.image} />
          <div className={Styles.info}>
            <p className={Styles.name}>{current.name}</p>
            <p className={Styles.age}>{`${current.born}, ${current.gender}`}</p>
          </div>
          {moreButton && moreButton}
        </>
      )}
    </div>
  );
});

export default PatientInfo;
