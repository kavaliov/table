import React from "react";
import { ContentBlock, ContentState } from "draft-js";
import { Image } from "./components";

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
      return <Image entity={entity} />;
    }
  }

  return null;
};

export default CustomBlock;
