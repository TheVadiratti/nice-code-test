import { StaticImageData } from "next/image";

type Note = {
  date: string;
  text: string;
  image?: StaticImageData;
};

type Consultation = {
  type: "Online консультация" | "Личный приём";
  date: string;
  status?: "Не подтвержена";
};

type Video = {
  name: string;
  author: string;
  dates?: string;
  img: StaticImageData;
};

type Event = {
  name: string;
  type: "Вебинар";
  img: StaticImageData;
  date: string;
  time: string;
};

type Patient = {
  name: string;
  image: StaticImageData;
  born: number;
  gender: "муж" | "жен"; // некоторые поспорят...
  notes: Note[];
  consultations: Consultation[];
  videos: Video[];
  events: Event[];
};

export type { Note, Consultation, Video, Event, Patient };
