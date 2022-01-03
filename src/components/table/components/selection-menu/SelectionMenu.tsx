import React from "react";
import classNames from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import { TableContext } from "../../duck/context";
import { isSingleSelection, getCol } from "../../duck/utils";
import Button from "../button";
import { getMenuPosition, PositionType } from "./duck/utils";
import {
  Merge,
  ChangeBackground,
  Unmerge,
  ChangeType,
  SetAnswer,
} from "./components";
import icon from "./assets/setting.svg";
import styles from "./SelectionMenu.module.css";

const SelectionMenu: React.FC = () => {
  const { tableState, rowsState } = React.useContext(TableContext);
  const [position, setPosition] = React.useState<PositionType>();
  const [opened, setOpened] = React.useState<boolean>(false);
  const [selectedType, setSelectedType] = React.useState<string>("");

  React.useEffect(() => {
    if (tableState.selectionState.start && tableState.selectionState.end) {
      setPosition(
        getMenuPosition(
          tableState.selectionState.start,
          tableState.selectionState.end
        )
      );
    }

    if (
      isSingleSelection(tableState.selectionState) &&
      tableState.selectionState.start
    ) {
      setSelectedType(getCol(rowsState, tableState.selectionState.start).type);
    }
  }, [tableState, rowsState]);

  const outsideClickHandler = () => {
    if (opened) {
      setOpened(false);
    }
  };

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.selected]:
          tableState.selectionState.selected &&
          tableState.selectionState.selectedCols.length > 0,
      })}
      style={position}
    >
      <Button
        onClick={() => setOpened(!opened)}
        className={styles.settingButton}
      >
        <img src={icon} alt="" />
      </Button>
      {opened && (
        <OutsideClickHandler onOutsideClick={outsideClickHandler}>
          <ul className={styles.menu}>
            {selectedType === "answer" &&
              isSingleSelection(tableState.selectionState) && (
                <SetAnswer setOpened={setOpened} />
              )}
            <ChangeBackground />
            <ChangeType />
            <Merge />
            <Unmerge />
          </ul>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default SelectionMenu;
