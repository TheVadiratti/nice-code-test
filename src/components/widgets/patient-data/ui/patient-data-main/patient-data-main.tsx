import { memo, useMemo } from "react";
import { PatientDataPages } from "@/components/features/navigation";
import Styles from "./patient-data-main.module.scss";
import { useAppSelector } from "@/store/hooks";

interface Props {
  page: PatientDataPages;
}

const PatientDataMain = memo(({ page }: Props) => {
  const currentPatient = useAppSelector((state) => state.patientsSlice.current);

  // const content = useMemo(() => {
  //   switch (page) {
  //     case "events": {

  //     }
  //     default: {
  //       return null;
  //     }
  //   }
  // }, []);

  return (
    <div className={Styles.cnt}>
      {/* {content && content} */}
      
    </div>
  );
});

export default PatientDataMain;