import { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { PatientItemInfo, setCurrent } from "@/components/entities/patient";
import { StaticImageData } from "next/image";
import Styles from "./patient-item.module.scss";

interface Props {
  name: string;
  avatar?: StaticImageData;
  id: string;
}

const PatientItem = memo(({ name, avatar, id }: Props) => {
  const current = useAppSelector((state) => state.patientsSlice.current);
  const dispatch = useAppDispatch();

  const isCurrent = current?.id === id;

  const handleClick = useCallback(() => {
    dispatch(setCurrent(id));
  }, [id, dispatch]);

  return (
    <li className={Styles.item}>
      <button
        className={`${Styles.button} ${isCurrent && Styles.active}`}
        type="button"
        onClick={handleClick}
      >
        <PatientItemInfo name={name} avatar={avatar} />
      </button>
    </li>
  );
});

export default PatientItem;
