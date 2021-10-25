import React from "react";
import { EntityInstance } from "draft-js";
import styles from "./Image.module.css";

interface ImageType {
  entity: EntityInstance;
}

const Image: React.FC<ImageType> = ({ entity }) => {
  const { src } = entity.getData();

  return (
    <div className={styles.wrapper}>
      <img src={src} alt="" />
    </div>
  );
};

export default Image;
