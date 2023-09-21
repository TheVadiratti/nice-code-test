import { memo } from "react";
import InputSearch from "@/components/shared/ui/input-search/input-search";
import SelectControl from "@/components/shared/ui/select-control/select-control";
import Styles from "./patient-list-header.module.scss";

const PatientListHeader = memo(() => {
  const mock = () => {};

  return (
    <div className={Styles.cnt}>
      <InputSearch value="" onChange={mock} />
      <SelectControl />
    </div>
  );
});

export default PatientListHeader;
