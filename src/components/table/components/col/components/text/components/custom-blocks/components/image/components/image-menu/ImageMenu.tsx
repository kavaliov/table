import React from "react";
import {
  Remove,
  FloatLeft,
  FloatRight,
  FloatCenter,
} from "../../../general-controls";
import { ChangeSize, Link } from "./components";
import styles from "./ImageMenu.module.css";

interface ImageMenuType {
  blockKey: string;
}

const ImageMenu: React.FC<ImageMenuType> = ({ blockKey }) => (
  <div className={styles.wrapper}>
    <Remove blockKey={blockKey} />
    <ChangeSize blockKey={blockKey} />
    <Link blockKey={blockKey} />
    <FloatLeft blockKey={blockKey} />
    <FloatCenter blockKey={blockKey} />
    <FloatRight blockKey={blockKey} />
  </div>
);

export default ImageMenu;
