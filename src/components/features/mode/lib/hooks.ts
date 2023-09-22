/* eslint-disable import/prefer-default-export */
import { useAppSelector } from "@/store/hooks";

const useIsPatientCheck = (id: string) => {
  const checkedPatients = useAppSelector(
    (state) => state.modeSlice.selectPatientsCards.checked,
  );
  return checkedPatients.includes(id);
};

export { useIsPatientCheck };
