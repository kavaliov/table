import React from "react";
import { TableContext } from "../../duck/context";
import { getMenuPosition, PositionType } from "./duck/utils";
import { useOutsideClick } from "../../duck/hooks";
import Button from "../button";
import { Merge, ChangeBackground } from "./components";
import icon from "./assets/setting.svg";
import styles from "./SelectionMenu.module.css";

const SelectionMenu: React.FC = () => {
  const { state } = React.useContext(TableContext);
  const [position, setPosition] = React.useState<PositionType>();
  const [opened, setOpened] = React.useState<boolean>(false);

  const menuRef = useOutsideClick<HTMLUListElement>(() => setOpened(false));

  React.useEffect(() => {
    if (state.selectionState.start && state.selectionState.end) {
      setPosition(
        getMenuPosition(state.selectionState.start, state.selectionState.end)
      );
    }
  }, [state]);

  if (!state.selectionState.selected) {
    return null;
  }

  return (
    <div className={styles.wrapper} style={position}>
      <Button
        onClick={() => setOpened(!opened)}
        className={styles.settingButton}
      >
        <img src={icon} alt="" />
      </Button>
      {opened && (
        <ul className={styles.menu} ref={menuRef}>
          <ChangeBackground />
          <Merge />
        </ul>
      )}
    </div>
  );
};

export default SelectionMenu;
