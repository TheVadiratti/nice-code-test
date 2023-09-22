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
        return currentPatient?.notes.map((note, i) => (
          <Note text={note.text} date={note.date} image={note.image} key={i} />
        ));
      }
      case "consultations": {
        return currentPatient?.consultations.map((consultation, i) => (
          <Consultation
            name={consultation.type}
            date={consultation.date}
            status={consultation.status}
            key={i}
          />
        ));
      }
      case "videos": {
        return currentPatient?.videos.map((video, i) => (
          <Video
            name={video.name}
            date={video.dates}
            image={video.img}
            author={video.author}
            key={i}
          />
        ));
      }
      case "events": {
        return currentPatient?.events.map((event, i) => (
          <Event
            name={event.name}
            type={event.type}
            img={event.img}
            date={event.date}
            time={event.time}
            key={i}
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
