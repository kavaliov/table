import { EditorState } from "draft-js";

export const getFontSize = (editorState: EditorState) => {
  const inlineStyle = editorState.getCurrentInlineStyle();
  const stylesArray = inlineStyle.toJS();

  return stylesArray.reduce((acc: string[], current: string) => {
    if (current.indexOf("FONT_SIZE") > -1) {
      acc.push(current);
    }

    return acc;
  }, []);
};
