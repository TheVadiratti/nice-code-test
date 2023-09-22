import { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectPatientsCardsMode } from "@/components/features/mode";
import InputSearch from "@/components/shared/ui/input-search/input-search";
import SelectControl from "@/components/shared/ui/select-control/select-control";
import { setPatients } from "@/components/entities/patient";
import Styles from "./patient-list-header.module.scss";

const PatientListHeader = memo(() => {
  const dispatch = useAppDispatch();
  const patients = useAppSelector((state) => state.patientsSlice.patients);
  const mock = () => {};

  const handleOnMode = useCallback(() => {
    dispatch(setSelectPatientsCardsMode(true));

    const patientsNewState = patients.map((patient) => ({
      ...patient,
      isChecked: false,
    }));
    dispatch(setPatients(patientsNewState));
  }, [dispatch, patients]);

  const handleOffMode = useCallback(() => {
    dispatch(setSelectPatientsCardsMode(false));

    const patientsNewState = patients.map((patient) => {
      const { isChecked, ...rest } = patient;
      return rest;
    });
    dispatch(setPatients(patientsNewState));
  }, [dispatch, patients]);

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
