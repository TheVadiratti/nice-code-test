import { memo, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import Styles from "./avatar.module.scss";

interface Props {
  img: StaticImageData | string;
  alt: string;
  size?: "default" | "small";
  extraClass?: string;
}

const Avatar = memo(({ img, alt, size = "default", extraClass }: Props) => {
  const sizes = useMemo(() => {
    switch (size) {
      case "small": {
        return 40;
      }
      default: {
        return 90;
      }
    }
  }, [size]);

  const classNames = useMemo(() => {
    const names = [Styles.cnt];
    if (extraClass) {
      names.push(extraClass);
    }

    return names;
  }, [extraClass]);
  return (
    <div
      className={classNames.join(" ")}
      style={{ width: `${sizes}px`, height: `${sizes}px` }}
    >
      <Image
        className={Styles.image}
        src={img}
        alt={alt}
        width={sizes}
        height={sizes}
        fill
      />
    </div>
  );
});

export default Avatar;
