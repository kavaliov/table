import React from "react";
import { convertToRaw } from "draft-js";
import {
  FONT_SIZES,
  TEXT_COLORS,
} from "../../../col/components/text/duck/constants";
import { TableContext } from "../../../../duck/context";
import { rowsStateActions } from "../../../../duck/actions";
import { applyTextStyle, createAllSelection } from "./duck/utils";
import { STYLES } from "./duck/constants";
import styles from "./TextStyle.module.css";

const TextStyle: React.FC = () => {
  const {
    tableState: {
      selectionState: { selectedCols },
    },
    rowsState,
    dispatchRowsState,
  } = React.useContext(TableContext);

  const clickHandler = (styleType: string) => {
    selectedCols.forEach((col) => {
      const { content } = rowsState[col.rowId - 1].cols[col.colId - 1];
      if (content) {
        const stateWithAllSelection = createAllSelection(content);

        const newColContent = applyTextStyle(styleType, stateWithAllSelection);

        const contentState = newColContent.getCurrentContent();
        dispatchRowsState(
          rowsStateActions.updateColContent({
            rowId: col.rowId,
            colId: col.colId,
            content: convertToRaw(contentState),
          })
        );
      }
    });
  };

  return (
    <li className={styles.wrapper}>
      <button>Text Style</button>
      <ul className={styles.styles}>
        <li className={styles.wrapper}>
          <button>Font Size</button>
          <ul className={styles.styles}>
            {FONT_SIZES.map((fontSize) => (
              <li key={fontSize.value}>
                <button onClick={() => clickHandler(fontSize.value)}>
                  {fontSize.label}
                </button>
              </li>
            ))}
          </ul>
        </li>
        <li className={styles.colors}>
          {Object.keys(TEXT_COLORS).map((color) => (
            <button
              key={color}
              style={{ backgroundColor: (TEXT_COLORS as any)[color] }}
              className={styles.colorButton}
              onClick={() => clickHandler(color)}
            />
          ))}
        </li>
        {STYLES.map((style) => (
          <li key={style.value}>
            <button onClick={() => clickHandler(style.value)}>
              <img src={style.icon} alt="" /> {style.label}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default TextStyle;
