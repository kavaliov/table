import React from "react";
import { Remove, FloatLeft, FloatRight, FloatCenter } from "../../../general-controls";
import { ChangeSize } from "./components";
import styles from "./KatexMenu.module.css";

interface KatexMenuProps {
  blockKey: string;
}

const KatexMenu: React.FC<KatexMenuProps> = ({ blockKey }) => (
  <div className={styles.wrapper}>
    <Remove blockKey={blockKey} />
    <ChangeSize blockKey={blockKey} />
    <FloatLeft blockKey={blockKey} />
    <FloatCenter blockKey={blockKey} />
    <FloatRight blockKey={blockKey} />
  </div>
);

export default KatexMenu;
