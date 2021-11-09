import React from "react";
import { Remove, ChangeSize } from "./components";
import styles from "./ImageMenu.module.css";

interface ImageMenuType {
  blockKey: string;
}

const ImageMenu: React.FC<ImageMenuType> = ({ blockKey }) => (
  <div className={styles.wrapper}>
    <Remove blockKey={blockKey} />
    <ChangeSize blockKey={blockKey} />
  </div>
);

export default ImageMenu;
