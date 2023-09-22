import { memo } from "react";
import { PatientInfo } from "@/components/entities/patient";
import MoreButton from "@/components/features/dropdowns/more-button";

const PatientDataHeader = memo(() => (
  <PatientInfo moreButton={<MoreButton />} />
));

export default PatientDataHeader;
