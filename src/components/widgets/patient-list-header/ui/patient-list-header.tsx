import { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectPatientsCardsMode } from "@/components/features/mode";
import InputSearch from "@/components/shared/ui/input-search/input-search";
import SelectControl from "@/components/shared/ui/select-control/select-control";
import Styles from "./patient-list-header.module.scss";

const PatientListHeader = memo(() => {
  const dispatch = useAppDispatch();
  const patients = useAppSelector((state) => state.patientsSlice.patients);
  const mock = () => {};

  const handleOnMode = useCallback(() => {
    dispatch(setSelectPatientsCardsMode(true));
  }, [dispatch]);

  const handleOffMode = useCallback(() => {
    dispatch(setSelectPatientsCardsMode(false));
  }, [dispatch]);

  return (
    <div className={Styles.cnt}>
      <InputSearch value="" onChange={mock} />
      <SelectControl
        openDispatch={handleOnMode}
        closeDispatch={handleOffMode}
        value={patients.length}
      />
    </div>
  );
});

export default PatientListHeader;
