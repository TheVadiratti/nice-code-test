import { MouseEventHandler, memo, useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { PatientItemInfo, setCurrent } from "@/components/entities/patient";
import { StaticImageData } from "next/image";
import Checkbox from "@/components/shared/ui/checkbox/checkbox";
import {
  removePatient,
  selectPatient,
  useIsPatientCheck,
} from "@/components/features/mode";
import Styles from "./patient-item.module.scss";

interface Props {
  name: string;
  avatar?: StaticImageData;
  id: string;
}

const PatientItem = memo(({ name, avatar, id }: Props) => {
  const isEnableSelectMode = useAppSelector(
    (state) => state.modeSlice.selectPatientsCards.isEnable,
  );
  const current = useAppSelector((state) => state.patientsSlice.current);
  const dispatch = useAppDispatch();

  const isCurrent = current?.id === id;
  const isChecked = useIsPatientCheck(id);

  const handleCheck = useCallback(() => {
    dispatch(selectPatient(id));
  }, [dispatch, id]);

  const handleRemoveCheck = useCallback(() => {
    dispatch(removePatient(id));
  }, [dispatch, id]);

  const handleClick = useCallback(() => {
    dispatch(setCurrent(id));
  }, [id, dispatch]);

  const clickStopPropagation: MouseEventHandler<HTMLLabelElement> = useCallback(
    (e) => {
      e.stopPropagation();
    },
    [],
  );

  const onChange = useMemo(() => {
    if (isChecked) {
      return handleRemoveCheck;
    }
    return handleCheck;
  }, [handleCheck, handleRemoveCheck, isChecked]);

  return (
    <li className={Styles.item}>
      <button
        className={`${Styles.button} ${isCurrent && Styles.active}`}
        type="button"
        onClick={handleClick}
      >
        {isEnableSelectMode && (
          <Checkbox
            isChecked={isChecked}
            htmlFor={name}
            onChange={onChange}
            onClick={clickStopPropagation}
          />
        )}
        <PatientItemInfo name={name} avatar={avatar} />
      </button>
    </li>
  );
});

export default PatientItem;
