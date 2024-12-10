import { FC } from "react";
import styles from "./_TaskCard.module.scss";
import { TTask } from "../../../types/TTask";
import { parseTaskObj } from "../../../utils/parseTaskObj";
import classNames from "classnames";
import { Icon } from "../../Icon/Icon";
import ExpandableText from "../../Text/ExpandableText/ExpandableText";
import { parseDate } from "../../../utils/parseDate";

interface Props {
  task: TTask;
}

export const TaskCard: FC<Props> = ({ task }) => {
  //Здесь определяем статус, чтобы навесить модификатор на карточку
  let status;
  switch (task.taskStatus[0]) {
    case "В работе":
      status = styles["task--inprogress"];
      break;
    case "Просрочена":
      status = styles["task--delayed"];
      break;
    case "Есть отзыв":
      status = styles["task--comment"];
      break;
    case "Выполнена":
      status = styles["task--done"];
      break;
  }
  return (
    <div className={classNames(styles.task, status)}>
      <div className={styles["task__header-wrapper"]}>
        <span className={styles.task__number}>№ {task.taskNum}</span>
        <span className={styles.task__status}>{task.taskStatus[0]}</span>
        {task.taskTech ? (
          <span className={styles["task__setting-icon"]}>
            <Icon id="settings" width="30" height="30" />
          </span>
        ) : null}
      </div>
      <div className={styles["task__info-wrapper"]}>
        <ul className={styles["task__info-list"]}>
          <li className={styles["task__info-item"]}>
            <span className={styles["task__info-field"]}>Создана:</span>
            <span className={styles["task__info-value"]}>
              {parseDate(task.createDate)}
            </span>
          </li>
          {task.releaseDate && (
            <li className={styles["task__info-item"]}>
              <span className={styles["task__info-field"]}>Контроль:</span>
              <span className={styles["task__info-value"]}>
                {task.controlDate}
              </span>
            </li>
          )}
          <li className={styles["task__info-item"]}>
            <span className={styles["task__info-field"]}>Система:</span>
            <span className={styles["task__info-value"]}>{task.system}</span>
          </li>
          <li className={styles["task__info-item"]}>
            <span className={styles["task__info-field"]}>Объект:</span>
            <span className={styles["task__info-value"]}>
              {parseTaskObj(task.taskObj)}
            </span>
          </li>
        </ul>
      </div>
      <div className={styles["task__text-wrapper"]}>
        <ExpandableText text={task.taskText} />
      </div>
    </div>
  );
};
