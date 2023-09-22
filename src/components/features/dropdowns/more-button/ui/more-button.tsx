import { memo, useCallback, useState } from "react";
import MoreIcon from "@/components/shared/ui/_icons/more";
import ButtonRound from "@/components/shared/ui/button-round/button-round";
import moreButtonConfig from "../config/contains";
import Styles from "./more-button.module.scss";

const MoreButton = memo(() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = useCallback(() => {
    setIsDropdownOpen(true);
  }, []);
  const handleDropdownClose = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  return (
    <ButtonRound
      type="button"
      svgInitColor="black"
      icon={MoreIcon()}
      ariaLabel="опции"
      isTransparent
      onClick={handleDropdownOpen}
      onBlur={handleDropdownClose}
      dropdownConfig={isDropdownOpen && moreButtonConfig}
      extraClass={Styles.button}
    />
  );
});

export default MoreButton;
