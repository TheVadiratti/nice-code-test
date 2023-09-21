import { memo } from "react";
import PatientDataNav from "../patient-data-nav/patient-data-nav";
import Styles from "./patient-data.module.scss";
import PatientDataMain from "../patient-data-main/patient-data-main";

const PatientData = memo(() => (
  <div className={Styles.cnt}>
    <PatientDataNav />
    <PatientDataMain />
  </div>
));

export default PatientData;
