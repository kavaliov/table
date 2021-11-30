import React from "react";
import { RichUtils } from "draft-js";
import Button from "../../../../../../../button";
import { TextContext } from "../../../../duck/context";
import { FONT_SIZES } from "./duck/constants";
import { getFontSize } from "./duck/utils";
import styles from "./FontSize.module.css";

const FontSize: React.FC = () => {
  const { editorState, setEditorState } = React.useContext(TextContext);
  const [fontSize, setFontSize] = React.useState("13 px");
  const [opened, setOpened] = React.useState(false);

  React.useEffect(() => {
    const currentFontSize = getFontSize(editorState)[0];
    if (currentFontSize) {
      const font = FONT_SIZES.find((size) => size.value === currentFontSize);
      setFontSize(font?.label || "");
    }
  }, [editorState]);

  const changeFontSizeHandler = (size: {
    label: string;
    value: string;
  }): void => {
    const currentFontSize = getFontSize(editorState)[0];

    const newState = RichUtils.toggleInlineStyle(
      currentFontSize
        ? RichUtils.toggleInlineStyle(editorState, currentFontSize)
        : editorState,
      size.value
    );
    setEditorState(newState);
    setOpened(false);
  };

  return (
    <div className={styles.fontSelect}>
      <Button
        onClick={() => setOpened(!opened)}
        onMouseDown={(e) => e.preventDefault()}
        small
        className={styles.openButton}
      >
        {fontSize}
      </Button>
      {opened && (
        <ul className={styles.list}>
          {FONT_SIZES.map((font) => (
            <li key={font.value}>
              <button
                onClick={() => changeFontSizeHandler(font)}
                onMouseDown={(e) => e.preventDefault()}
                className={styles.fontButton}
              >
                {font.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FontSize;
