import { memo, useMemo } from "react";
import WebinarIcon from "@/components/shared/ui/_icons/webinar";
import DateIcon from "@/components/shared/ui/_icons/date";
import TimeIcon from "@/components/shared/ui/_icons/time";
import Styles from "./event-property.module.scss";

interface Props {
  iconType: "type" | "date" | "time";
  label: string;
}

const EventProperty = memo(({ iconType, label }: Props) => {
  const icon = useMemo(() => {
    switch (iconType) {
      case "type": {
        return <WebinarIcon />;
      }
      case "date": {
        return <DateIcon />;
      }
      case "time": {
        return <TimeIcon />;
      }
      default: {
        return null;
      }
    }
  }, [iconType]);

  return (
    <div className={Styles.cnt}>
      {icon && icon}
      <p className={Styles.label}>{label}</p>
    </div>
  );
});

export default EventProperty;
