import {
  ChangeEventHandler,
  memo,
  useCallback,
  useMemo,
  useState,
} from "react";
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
  // Контроль инпута надо хранить в redux (принцип единственного источника правды)
  // здесь сделал так для демонстрации.
  const [searchInputValue, setSearchInputValue] = useState("");
  const dispatch = useAppDispatch();
  const patients = useAppSelector((state) => state.patientsSlice.patients);
  const selectPatientsCards = useAppSelector(
    (state) => state.modeSlice.selectPatientsCards,
  );

  const isAllChecked = useMemo(
    () => patients.length === selectPatientsCards.checked.length,
    [patients, selectPatientsCards.checked],
  );

  const handleSearchInput = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setSearchInputValue(e.target.value);
    },
    [],
  );

  const handleOnMode = useCallback(() => {
    dispatch(setSelectPatientsCardsMode(true));
  }, [dispatch]);

  const handleOffMode = useCallback(() => {
    dispatch(setSelectPatientsCardsMode(false));
    dispatch(removeAllChecks());
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
      <InputSearch value={searchInputValue} onChange={handleSearchInput} />
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
