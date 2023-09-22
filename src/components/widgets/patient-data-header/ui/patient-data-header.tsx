import { memo } from "react";
import { PatientInfo } from "@/components/entities/patient";
import ButtonRound from "@/components/shared/ui/button-round/button-round";
import MoreIcon from "@/components/shared/ui/_icons/more";
import moreButtonConfig from "../config/dropdown";
import Styles from "./patient-data-header.module.scss";

const PatientDataHeader = memo(() => (
  <PatientInfo
    moreButton={
      <ButtonRound
        type="button"
        svgInitColor="black"
        icon={MoreIcon()}
        ariaLabel="опции"
        isTransparent
        dropdownConfig={moreButtonConfig}
        extraClass={Styles.button}
      />
    }
  />
));

export default PatientDataHeader;
