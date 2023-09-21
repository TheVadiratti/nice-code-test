import { memo } from "react";
import { PatientInfo } from "@/components/entities/patient";

const PatientDataHeader = memo(() => {
  // TODO убрать mock
  const mock = "";
  return <PatientInfo />;
});

export default PatientDataHeader;
