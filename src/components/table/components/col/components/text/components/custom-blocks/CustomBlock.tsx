import React from "react";
import { ContentBlock, ContentState } from "draft-js";
import { TextContext } from "../../duck/context";
import { Image, Katex } from "./components";

interface CustomBlockType {
  contentState: ContentState;
  block: ContentBlock;
}

const CustomBlock: React.FC<CustomBlockType> = ({ contentState, block }) => {
  const { editorState } = React.useContext(TextContext);
  const [selected, setSelected] = React.useState(false);
  const entityAt = block.getEntityAt(0);

  React.useEffect(() => {
    const selection = editorState.getSelection();
    const after = contentState.getBlockAfter(block.getKey());
    setSelected(selection.getAnchorKey() === after?.getKey());
  }, [contentState, block, editorState]);

  if (entityAt) {
    const entity = contentState.getEntity(entityAt);

    const type = entity.getType();

    if (type === "IMAGE") {
      return <Image entity={entity} block={block} selected={selected} />;
    }

    if (type === "KATEX") {
      return <Katex entity={entity} block={block} selected={selected} />;
    }
  }

  return null;
};

export default CustomBlock;
