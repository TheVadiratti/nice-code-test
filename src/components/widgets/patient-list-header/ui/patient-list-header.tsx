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
  const selectPatientsCards = useAppSelector(
    (state) => state.modeSlice.selectPatientsCards,
  );
  const isAllChecked = useMemo(
    () => patients.length === selectPatientsCards.checked.length,
    [patients, selectPatientsCards.checked],
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
    if (!isAllChecked) {
      return handleAllCheck;
    }
    return handleRemoveAllCheck;
  }, [handleAllCheck, handleRemoveAllCheck, isAllChecked]);

  const counterValue = useMemo(() => {
    if (selectPatientsCards.isEnable) {
      return selectPatientsCards.checked.length;
    }
    return patients.length;
  }, [
    patients.length,
    selectPatientsCards.checked.length,
    selectPatientsCards.isEnable,
  ]);

  return (
    <div className={Styles.cnt}>
      <InputSearch value="" onChange={() => {}} />
      <SelectControl
        openDispatch={handleOnMode}
        closeDispatch={handleOffMode}
        counterValue={counterValue}
        isCounterActive={selectPatientsCards.isEnable}
        onChangeCheckbox={onChangeCheckbox}
        isAllChecked={isAllChecked}
      />
    </div>
  );
});

export default PatientListHeader;
