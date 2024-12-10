import classNames from "classnames";
import { useState, useRef, useEffect, FC } from "react";
import styles from "./_ExpandableText.module.scss";

interface Props {
  text: string;
}

const ExpandableText: FC<Props> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Функция для переключения состояния текста
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles["expandable-text"]}>
      <p
        className={classNames(
          styles["expandable-text__text"],
          isExpanded
            ? styles["expandable-text__text--expanded"]
            : styles["expandable-text__text--collapsed"]
        )}
      >
        {text}
      </p>
      {!isExpanded ? (
        <>
          <span className={styles["expandable-text__gradient"]}></span>
          <button
            type="button"
            className={styles["expandable-text__read-more-btn"]}
            onClick={toggleExpand}
          >
            ⏷ Читать далее
          </button>
        </>
      ) : (
        <button
          type="button"
          className={styles["expandable-text__collapse-btn"]}
          onClick={toggleExpand}
        >
          ⏶ Свернуть
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
