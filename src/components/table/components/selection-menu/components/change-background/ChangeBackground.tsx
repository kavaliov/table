import React from "react";
import classNames from "classnames";
import { BACKGROUND_COLORS } from "../../../../duck/constants";
import { TableContext } from "../../../../duck/context";
import { updateColBackground } from "../../../../duck/actions";
import { getRange } from "../../../../duck/utils";
import styles from "./ChangeBackground.module.css";

const ChangeBackground: React.FC = () => {
  const { state, dispatch } = React.useContext(TableContext);

  const changeColorHandler = (color: string | undefined) => {
    if (state.selectionState.start && state.selectionState.end) {
      const range = getRange(
        state.selectionState.start,
        state.selectionState.end
      );

      dispatch(
        updateColBackground({
          rowId: range.row.min,
          colId: range.col.min,
          background: color,
        })
      );
    }
  };

  return (
    <li className={styles.wrapper}>
      <button>Background color</button>
      <div className={styles.colors}>
        <button
          onClick={() => changeColorHandler(undefined)}
          className={classNames(styles.colorButton, styles.transparent)}
        />
        {BACKGROUND_COLORS.map((color: string) => (
          <button
            onClick={() => changeColorHandler(color)}
            key={color}
            style={{ background: color }}
            className={styles.colorButton}
          />
        ))}
      </div>
    </li>
  );
};

export default ChangeBackground;
