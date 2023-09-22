"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import PatientList from "@/components/widgets/patient-list";
import PATIENTS from "@/fake-data";
import { setCurrent, setPatients } from "@/components/entities/patient";
import PatientDataHeader from "@/components/widgets/patient-data-header";
import PatientListHeader from "@/components/widgets/patient-list-header";
import PatientDataMain from "@/components/widgets/patient-data";
import Styles from "./page.module.scss";

export default function Home() {
  const currentPatient = useAppSelector((state) => state.patientsSlice.current);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPatients(PATIENTS));
    dispatch(setCurrent(PATIENTS[0].id));
  }, [dispatch]);

  return (
    <main className={Styles.main}>
      <PatientListHeader />
      {currentPatient ? <PatientDataHeader /> : <div />}
      <PatientList />
      {currentPatient ? <PatientDataMain /> : <div />}
    </main>
  );
}
