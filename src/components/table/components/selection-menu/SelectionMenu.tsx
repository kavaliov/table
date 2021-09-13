import React from "react";
import { TableContext } from "../../duck/context";
import { getMenuPosition, PositionType } from "./duck/utils";
import { Merge, Edit, ChangeBackground } from "./components";
import styles from "./SelectionMenu.module.css";

const SelectionMenu: React.FC = () => {
  const { state } = React.useContext(TableContext);
  const [position, setPosition] = React.useState<PositionType>();

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
      <Merge />
      <Edit />
      <ChangeBackground />
    </div>
  );
};

export default SelectionMenu;
