import modeSlice, {
  setSelectPatientsCardsMode,
  selectPatient,
  removePatient,
} from "./model/slice";
import { useIsPatientCheck } from "./lib/hooks";

export default modeSlice;
export {
  setSelectPatientsCardsMode,
  selectPatient,
  removePatient,
  useIsPatientCheck,
};
