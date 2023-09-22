import { memo } from "react";
import ButtonRound from "@/components/shared/ui/button-round/button-round";
import MoreIcon from "@/components/shared/ui/_icons/more";
import Image, { StaticImageData } from "next/image";
import moreButtonConfig from "../config/dropdown";
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
        &nbsp;
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
      svgInitColor="black"
      icon={MoreIcon()}
      ariaLabel="опции"
      isTransparent
      dropdownConfig={moreButtonConfig}
      extraClass={Styles.button}
    />
  </li>
));

export default Note;
