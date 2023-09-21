import { memo, useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import ButtonTextIcon from "@/components/shared/ui/button-text-icon/button-text-icon";
import CirclePlusIcon from "@/components/shared/ui/_icons/circle-plus";
import Styles from "./patient-data-nav.module.scss";
import ButtonNav from "../button-nav/button-nav";

const PatientDataNav = memo(() => {
  const currentPage = useAppSelector(
    (state) => state.navigationSlice.currentPage,
  );

  const actionButton = useMemo(() => {
    switch (currentPage) {
      case "notes": {
        return (
          <ButtonTextIcon
            type="button"
            label="Новая заметка"
            icon={CirclePlusIcon()}
          />
        );
      }
      case "consultation": {
        return (
          <ButtonTextIcon
            type="button"
            label="Записать"
            icon={CirclePlusIcon()}
          />
        );
      }
      case "video": {
        return (
          <ButtonTextIcon
            type="button"
            label="Рекомендовать"
            icon={CirclePlusIcon()}
          />
        );
      }
      case "events": {
        return (
          <ButtonTextIcon
            type="button"
            label="Рекомендовать"
            icon={CirclePlusIcon()}
          />
        );
      }
      default: {
        return null;
      }
    }
  }, [currentPage]);

  return (
    <div className={Styles.cnt}>
      <nav className={Styles.nav}>
        <ButtonNav
          label="Заметки"
          page="notes"
          isActive={currentPage === "notes"}
        />
        <ButtonNav
          label="Консультации"
          page="consultation"
          isActive={currentPage === "consultation"}
        />
        <ButtonNav
          label="Видео"
          page="video"
          isActive={currentPage === "video"}
        />
        <ButtonNav
          label="Мероприятия"
          page="events"
          isActive={currentPage === "events"}
        />
      </nav>
      {actionButton}
    </div>
  );
});

export default PatientDataNav;
