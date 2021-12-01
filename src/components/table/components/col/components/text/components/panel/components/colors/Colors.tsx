import React from "react";
import { RichUtils } from "draft-js";
import classNames from "classnames";
import { TextContext } from "../../../../duck/context";
import { TEXT_COLORS } from "../../../../duck/constants";
import { COLORS } from "./duck/constants";
import { getCurrentStyle } from "../../../../duck/utils";
import styles from "./Colors.module.css";

const Colors: React.FC = () => {
  const { editorState, setEditorState } = React.useContext(TextContext);
  const [currentColor, setCurrentColor] = React.useState(
    TEXT_COLORS["COLOR_1"]
  );
  const [opened, setOpened] = React.useState(false);

  React.useEffect(() => {
    const currentColor = getCurrentStyle(editorState, "COLOR")[0];
    if (currentColor) {
      const font = COLORS.find((color) => color.value === currentColor);
      setCurrentColor(font?.label || "");
    }
  }, [editorState]);

  const changeColorHandler = (color: { label: string; value: string }) => {
    const currentFontSize = getCurrentStyle(editorState, "COLOR")[0];

    const newState = RichUtils.toggleInlineStyle(
      currentFontSize
        ? RichUtils.toggleInlineStyle(editorState, currentFontSize)
        : editorState,
      color.value
    );
    setEditorState(newState);
    setOpened(false);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={classNames(styles.colorButton, styles.opener)}
        style={{ backgroundColor: currentColor }}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setOpened(!opened)}
      />
      {opened && (
        <div className={styles.panel}>
          {COLORS.map((color) => (
            <button
              key={color.value}
              className={styles.colorButton}
              style={{ backgroundColor: color.label }}
              onClick={() => changeColorHandler(color)}
              onMouseDown={(e) => e.preventDefault()}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Colors;
