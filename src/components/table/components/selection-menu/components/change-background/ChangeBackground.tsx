import React from "react";
import { BACKGROUND_COLORS } from "../../../../duck/constants";
import { TableContext } from "../../../../duck/context";
import { updateColBackground } from "../../../../duck/actions";
import { getRange } from "../../../../duck/utils";
import styles from "./ChangeBackground.module.css";

const ChangeBackground: React.FC = () => {
  const { state, dispatch } = React.useContext(TableContext);

  const changeColorHandler = (color: string) => {
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
    <div className={styles.wrappers}>
      {BACKGROUND_COLORS.map((color: string) => (
        <button
          onClick={() => changeColorHandler(color)}
          key={color}
          style={{ background: color }}
          className={styles.colorButton}
        />
      ))}
    </div>
  );
};

export default ChangeBackground;
