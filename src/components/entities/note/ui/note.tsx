import { memo } from "react";
import ButtonRound from "@/components/shared/ui/button-round/button-round";
import MoreIcon from "@/components/shared/ui/_icons/more";
import Image, { StaticImageData } from "next/image";
import Styles from "./note.module.scss";

interface Props {
  text: string;
  date: string;
  image?: StaticImageData;
}

const Note = memo(({ text, date, image }: Props) => (
  <li className={Styles.cnt}>
    <div className={Styles.content}>
      <p className={Styles.text}>
        <span className={Styles.date}>{date}</span>
        {text}
      </p>
      {image && (
        <div className={Styles.imageCnt}>
          <Image className={Styles.image} src={image} alt="note-pic" />
        </div>
      )}
    </div>
    <ButtonRound
      type="button"
      ariaLabel="more"
      isTransparent
      icon={MoreIcon()}
      svgInitColor="black"
      extraClass={Styles.button}
    />
  </li>
));

export default Note;
