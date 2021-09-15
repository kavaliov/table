import React from "react";
import classNames from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import { TableContext } from "../../duck/context";
import Button from "../button";
import { getMenuPosition, PositionType } from "./duck/utils";
import { Merge, ChangeBackground } from "./components";
import icon from "./assets/setting.svg";
import styles from "./SelectionMenu.module.css";

const SelectionMenu: React.FC = () => {
  const { state } = React.useContext(TableContext);
  const [position, setPosition] = React.useState<PositionType>();
  const [opened, setOpened] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (state.selectionState.start && state.selectionState.end) {
      setPosition(
        getMenuPosition(state.selectionState.start, state.selectionState.end)
      );
    }
  }, [state]);

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.selected]: state.selectionState.selected,
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
        <OutsideClickHandler onOutsideClick={() => setOpened(false)}>
          <ul className={styles.menu}>
            <ChangeBackground />
            <Merge />
          </ul>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default SelectionMenu;
