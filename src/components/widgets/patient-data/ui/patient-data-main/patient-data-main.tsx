import { memo, useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import Note from "@/components/entities/note";
import Consultation from "@/components/entities/consultation";
import Video from "@/components/entities/video";
import Event from "@/components/entities/event";
import Styles from "./patient-data-main.module.scss";

const PatientDataMain = memo(() => {
  const currentPatient = useAppSelector((state) => state.patientsSlice.current);
  const currentPage = useAppSelector(
    (state) => state.navigationSlice.currentPage,
  );

  const content = useMemo(() => {
    switch (currentPage) {
      case "notes": {
        return currentPatient?.notes.map((note) => (
          <Note text={note.text} date={note.date} image={note.image} />
        ));
      }
      case "consultations": {
        return currentPatient?.consultations.map((consultation) => (
          <Consultation
            name={consultation.type}
            date={consultation.date}
            status={consultation.status}
          />
        ));
      }
      case "videos": {
        return currentPatient?.videos.map((video) => (
          <Video
            name={video.name}
            date={video.dates}
            image={video.img}
            author={video.author}
          />
        ));
      }
      case "events": {
        return currentPatient?.events.map((event) => (
          <Event
            name={event.name}
            type={event.type}
            img={event.img}
            date={event.date}
            time={event.time}
          />
        ));
      }
      default: {
        return null;
      }
    }
  }, [
    currentPage,
    currentPatient?.consultations,
    currentPatient?.events,
    currentPatient?.notes,
    currentPatient?.videos,
  ]);

  return <ul className={Styles.cnt}>{content && content}</ul>;
});

export default PatientDataMain;
