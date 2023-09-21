import { memo } from "react";
import PostCard from "@/components/shared/ui/post-card/post-card";
import Image from "next/image";
import Styles from "./video.module.scss";

interface Props {
  name: string;
  date?: string;
  author: string;
  image: string;
}

const Video = memo(({ name, date, author, image }: Props) => (
  <PostCard extraClass={Styles.card}>
    <div className={Styles.imageCnt}>
      <Image className={Styles.image} src={image} alt="video-preview" />
    </div>
    <div className={Styles.info}>
      <p className={Styles.name}>{name}</p>
      <p className={Styles.author}>{author}</p>
    </div>
    {date && <p className={Styles.date}>{date}</p>}
  </PostCard>
));

export default Video;
