import {
  memo,
  MouseEventHandler,
  useMemo,
  ReactNode,
  useState,
  useCallback,
} from "react";
import Styles from "./button-round.module.scss";
import Dropdown from "../dropdown/dropdown";

interface Props {
  type: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: JSX.Element;
  ariaLabel: string;
  isTransparent?: boolean;
  svgInitColor?: "gray" | "black";
  hint?: string;
  dropdownConfig?: ReactNode;
  extraClass?: string;
}

const ButtonRound = memo(
  ({
    type,
    onClick,
    icon,
    ariaLabel,
    isTransparent,
    svgInitColor = "gray",
    hint,
    dropdownConfig,
    extraClass,
  }: Props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownOpen = useCallback(() => {
      setIsDropdownOpen(true);
    }, []);
    const handleDropdownClose = useCallback(() => {
      setIsDropdownOpen(false);
    }, []);

    const handleClick = useMemo(() => {
      if (dropdownConfig) {
        return handleDropdownOpen;
      }
      return onClick;
    }, [dropdownConfig, onClick, handleDropdownOpen]);

    const svgColor = useMemo(() => {
      switch (svgInitColor) {
        case "gray":
          return Styles.svgGray;
        case "black":
          return Styles.svgBlack;
        default:
          return null;
      }
    }, [svgInitColor]);

    const classNames = useMemo(() => {
      const names = [Styles.button];
      if (isTransparent) {
        names.push(Styles.transparent);
      }
      if (svgColor) {
        names.push(svgColor);
      }
      if (extraClass) {
        names.push(extraClass);
      }
      return names;
    }, [isTransparent, extraClass, svgColor]);

    return (
      <button
        className={classNames.join(" ")}
        type={type}
        onClick={handleClick}
        onBlur={dropdownConfig ? handleDropdownClose : undefined}
        aria-label={ariaLabel}
      >
        {icon}
        {hint && (
          <div className={Styles.hintCnt}>
            <p className={Styles.hint}>{hint}</p>
          </div>
        )}
        {isDropdownOpen && (
          <Dropdown extraClass={Styles.dropdown}>{dropdownConfig}</Dropdown>
        )}
      </button>
    );
  },
);

export default ButtonRound;
