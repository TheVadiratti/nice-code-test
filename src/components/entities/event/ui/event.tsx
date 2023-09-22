import { memo } from "react";
import PostCard from "@/components/shared/ui/post-card/post-card";
import Image, { StaticImageData } from "next/image";
import Styles from "./event.module.scss";
import EventProperty from "./event-property/event-property";

interface Props {
  name: string;
  type: "Вебинар";
  img: StaticImageData;
  date: string;
  time: string;
}

const Event = memo(({ name, type, img, date, time }: Props) => (
  <PostCard>
    <div className={Styles.imageCnt}>
      <Image className={Styles.image} src={img} alt="video-preview" />
    </div>
    <div className={Styles.info}>
      <p className={Styles.name}>{name}</p>
      <div className={Styles.properties}>
        <EventProperty iconType="type" label={type} />
        <EventProperty iconType="date" label={date} />
        <EventProperty iconType="time" label={time} />
      </div>
    </div>
  </PostCard>
));

export default Event;
