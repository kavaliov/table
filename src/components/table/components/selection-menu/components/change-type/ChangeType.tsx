import React from "react";
import { TableContext } from "../../../../duck/context";
import { rowsStateActions } from "../../../../duck/actions";
import { TYPES } from "./duck/constants";
import icon from "./assets/check-circle.svg";
import styles from "./ChangeType.module.css";

const ChangeType: React.FC = () => {
  const { dispatchRowsState, tableState, rowsState } = React.useContext(
    TableContext
  );
  const [currentType, setCurrentType] = React.useState("");
  const { selectionState } = tableState;

  React.useEffect(() => {
    if (selectionState.selected) {
      const selectedRowId = selectionState.selectedCols[0].rowId;
      const selectedColId = selectionState.selectedCols[0].colId;
      setCurrentType(rowsState[selectedRowId - 1].cols[selectedColId - 1].type);
    }
  }, [selectionState, rowsState]);

  const clickHandler = (type: string) => {
    const { rowId } = selectionState.selectedCols[0];
    const { colId } = selectionState.selectedCols[0];

    dispatchRowsState(
      rowsStateActions.updateColType({
        selectionState: tableState.selectionState,
        type,
      })
    );
    dispatchRowsState(
      rowsStateActions.updateColContent({ colId, rowId, content: "" })
    );
  };

  return (
    <li className={styles.wrapper}>
      <button>Type</button>
      <ul className={styles.types}>
        {TYPES.map((type) => (
          <li key={type.value}>
            <button
              className={currentType === type.value ? styles.selected : ""}
              onClick={() => clickHandler(type.value)}
            >
              {type.label}
              {currentType === type.value && (
                <img src={icon} alt="" className={styles.icon} />
              )}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ChangeType;
