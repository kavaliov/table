import React from "react";
import { ContentBlock, ContentState } from "draft-js";
import { Image, Katex } from "./components";

interface CustomBlockType {
  contentState: ContentState;
  block: ContentBlock;
}

const CustomBlock: React.FC<CustomBlockType> = ({ contentState, block }) => {
  const entityAt = block.getEntityAt(0);

  if (entityAt) {
    const entity = contentState.getEntity(entityAt);

    const type = entity.getType();

    if (type === "IMAGE") {
      return <Image entity={entity} block={block} />;
    }

    if (type === "KATEX") {
      return <Katex entity={entity} block={block} />;
    }
  }

  return null;
};

export default CustomBlock;
