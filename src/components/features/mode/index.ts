import modeSlice, {
  setSelectPatientsCardsMode,
  selectPatient,
  selectPatients,
  removePatient,
  removeAllChecks,
} from "./model/slice";
import { useIsPatientCheck } from "./lib/hooks";

export default modeSlice;
export {
  setSelectPatientsCardsMode,
  selectPatient,
  selectPatients,
  removePatient,
  removeAllChecks,
  useIsPatientCheck,
};
