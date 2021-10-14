import React from "react";
import classNames from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import { TableContext } from "../../duck/context";
import Button from "../button";
import { getMenuPosition, PositionType } from "./duck/utils";
import { Merge, ChangeBackground, Unmerge } from "./components";
import icon from "./assets/setting.svg";
import styles from "./SelectionMenu.module.css";

const SelectionMenu: React.FC = () => {
  const { tableState } = React.useContext(TableContext);
  const [position, setPosition] = React.useState<PositionType>();
  const [opened, setOpened] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (tableState.selectionState.start && tableState.selectionState.end) {
      setPosition(
        getMenuPosition(
          tableState.selectionState.start,
          tableState.selectionState.end
        )
      );
    }
  }, [tableState]);

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
            <ChangeBackground />
            <Merge />
            <Unmerge />
          </ul>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default SelectionMenu;
