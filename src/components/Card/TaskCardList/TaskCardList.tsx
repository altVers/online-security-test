import { FC } from "react";
import { TTaskArr } from "../../../types/TTask";
import { TaskCard } from "../TaskCard/TaskCard";
import styles from './_TaskCardList.module.scss'

interface Props {
    data: TTaskArr
}

export const TaskCardList:FC<Props> = ({data}) => {
return (
    <ul className={styles.ul}>
            {data.map((task) => {
                return <li className={styles.li} key={task.id}>
                    <TaskCard task={task}/>
                </li>
            })}
    </ul>
)
}