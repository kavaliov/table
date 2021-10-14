import React from "react";
import classNames from "classnames";
import { BACKGROUND_COLORS } from "../../../../duck/constants";
import { TableContext } from "../../../../duck/context";
import { rowsStateActions } from "../../../../duck/actions";
import styles from "./ChangeBackground.module.css";

const ChangeBackground: React.FC = () => {
  const { dispatchRowsState, tableState } = React.useContext(TableContext);

  const changeColorHandler = (color: string | undefined) => {
    dispatchRowsState(
      rowsStateActions.updateColBackground({
        selectionState: tableState.selectionState,
        background: color,
      })
    );
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
