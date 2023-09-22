import { memo } from "react";
import { useAppSelector } from "@/store/hooks";
import PatientItem from "../../patient-item";
import Styles from "./patient-list.module.scss";

const PatientList = memo(() => {
  const patients = useAppSelector((state) => state.patientsSlice.patients);

  return (
    <ul className={Styles.list}>
      {patients.map((patient) => {
        const { name, image, id } = patient;
        return <PatientItem name={name} avatar={image} id={id} key={id} />;
      })}
    </ul>
  );
});

export default PatientList;
