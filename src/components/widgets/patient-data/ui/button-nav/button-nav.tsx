import { memo, useCallback } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setPatientsDataPage } from "@/components/features/navigation";
import type { PatientDataPages } from "@/components/features/navigation";
import Styles from "./button-nav.module.scss";

interface Props {
  label: string;
  isActive: boolean;
  page: PatientDataPages;
}

const ButtonNav = memo(({ label, isActive, page }: Props) => {
  const dispatch = useAppDispatch();
  const handleClick = useCallback(() => {
    dispatch(setPatientsDataPage(page));
  }, [page, dispatch]);

  return (
    <button className={Styles.button} type="button" onClick={handleClick}>
      <p className={`${Styles.label} ${isActive && Styles.active}`}>{label}</p>
    </button>
  );
});

export default ButtonNav;
