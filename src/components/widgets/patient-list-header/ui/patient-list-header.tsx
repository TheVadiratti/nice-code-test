import { memo, useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  removeAllChecks,
  selectPatients,
  setSelectPatientsCardsMode,
} from "@/components/features/mode";
import InputSearch from "@/components/shared/ui/input-search/input-search";
import SelectControl from "@/components/shared/ui/select-control/select-control";
import Styles from "./patient-list-header.module.scss";

const PatientListHeader = memo(() => {
  const dispatch = useAppDispatch();
  const patients = useAppSelector((state) => state.patientsSlice.patients);
  const checkedPatients = useAppSelector(
    (state) => state.modeSlice.selectPatientsCards.checked,
  );
  const isAllChecked = useMemo(
    () => patients.length === checkedPatients.length,
    [patients, checkedPatients],
  );

  const handleOnMode = useCallback(() => {
    dispatch(setSelectPatientsCardsMode(true));
  }, [dispatch]);

  const handleOffMode = useCallback(() => {
    dispatch(setSelectPatientsCardsMode(false));
  }, [dispatch]);

  const handleAllCheck = useCallback(() => {
    const allId = patients.map((patient) => patient.id);
    dispatch(selectPatients(allId));
  }, [dispatch, patients]);

  const handleRemoveAllCheck = useCallback(() => {
    dispatch(removeAllChecks());
  }, [dispatch]);

  const onChangeCheckbox = useMemo(() => {
    if (isAllChecked) {
      return handleRemoveAllCheck;
    }
    return handleAllCheck;
  }, [handleAllCheck, handleRemoveAllCheck, isAllChecked]);

  return (
    <div className={Styles.cnt}>
      <InputSearch value="" onChange={() => {}} />
      <SelectControl
        openDispatch={handleOnMode}
        closeDispatch={handleOffMode}
        value={patients.length}
        onChangeCheckbox={onChangeCheckbox}
        isAllChecked={isAllChecked}
      />
    </div>
  );
});

export default PatientListHeader;
