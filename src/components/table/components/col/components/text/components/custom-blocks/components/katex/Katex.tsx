import React from "react";
import katex from "katex";
import classNames from "classnames";
import { ContentBlock, EntityInstance } from "draft-js";
import OutsideClickHandler from "react-outside-click-handler";
import { TextContext } from "../../../../duck/context";
import { KatexMenu } from "./components";
import styles from "./Katex.module.css";

interface KatexProps {
  entity: EntityInstance;
  block: ContentBlock;
}

const Katex: React.FC<KatexProps> = ({ entity, block }) => {
  const { editMode } = React.useContext(TextContext);
  const [opened, setOpened] = React.useState(false);
  const { expression, size } = entity.getData();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const blockKey = block.getKey();

  React.useEffect(() => {
    if (containerRef.current) {
      katex.render(expression, containerRef.current, {
        throwOnError: false,
      });
    }
  }, [expression]);

  const selectHandler = () => {
    if (editMode) {
      setOpened(true);
    }
  };

  const outsideClickHandler = () => {
    setOpened(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={outsideClickHandler}>
      <div className={classNames(styles.wrapper, styles[size])}>
        <div
          ref={containerRef}
          onClick={selectHandler}
          className={classNames(styles.container, {
            [styles.selected]: opened,
          })}
        />
        {opened && <KatexMenu blockKey={blockKey} />}
      </div>
    </OutsideClickHandler>
  );
};

export default Katex;
