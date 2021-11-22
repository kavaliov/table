import React, { useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { EntityInstance, ContentBlock } from "draft-js";
import { TextContext } from "../../../../duck/context";
import { ImageMenu } from "./components";
import styles from "./Image.module.css";

interface ImageType {
  entity: EntityInstance;
  block: ContentBlock;
  selected: boolean;
}

interface LinkType {
  href: string;
}

const Link: React.FC<LinkType> = ({ href, children }) => (
  <a target="_blank" rel="noreferrer" href={href}>
    {children}
  </a>
);

const Image: React.FC<ImageType> = ({ entity, block, selected }) => {
  const { editMode } = React.useContext(TextContext);
  const [opened, setOpened] = React.useState(selected);
  const { src, width, height, href } = entity.getData();
  const imageRef = useRef<HTMLImageElement>(null);
  const blockKey = block.getKey();

  React.useEffect(() => {
    setOpened(selected);
  }, [selected]);

  const clickHandler = () => {
    if (editMode) {
      setOpened((prevOpened) => !prevOpened);
    }
  };

  const outsideClickHandler = () => {
    setOpened(false);
  };

  const Image = () => (
    <img
      ref={imageRef}
      src={src}
      alt=""
      onClick={clickHandler}
      className={opened ? styles.opened : ""}
      style={{ width, height }}
    />
  );

  return (
    <OutsideClickHandler onOutsideClick={outsideClickHandler}>
      <div className={styles.wrapper}>
        {href && !editMode ? (
          <Link href={href}>
            <Image />
          </Link>
        ) : (
          <Image />
        )}
        {opened && <ImageMenu blockKey={blockKey} />}
      </div>
    </OutsideClickHandler>
  );
};

export default Image;
