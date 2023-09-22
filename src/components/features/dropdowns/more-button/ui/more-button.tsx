import { memo, useCallback, useState, useEffect } from "react";
import MoreIcon from "@/components/shared/ui/_icons/more";
import ButtonRound from "@/components/shared/ui/button-round/button-round";
import moreButtonConfig from "../config/contains";
import Styles from "./more-button.module.scss";

const MoreButton = memo(() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handle = () => {
      setIsDropdownOpen(false);
    };
    document.addEventListener("click", handle);
    return () => {
      document.removeEventListener("click", handle);
    };
  }, [isDropdownOpen]);

  const handleDropdownOpen = useCallback(() => {
    setIsDropdownOpen(true);
  }, []);

  return (
    <ButtonRound
      type="button"
      svgInitColor="black"
      icon={MoreIcon()}
      ariaLabel="опции"
      isTransparent
      onClick={handleDropdownOpen}
      dropdownConfig={isDropdownOpen && moreButtonConfig}
      extraClass={Styles.button}
    />
  );
});

export default MoreButton;
