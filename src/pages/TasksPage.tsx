import { FC, useEffect, useState } from "react";
import { TTaskArr } from "../types/TTask";
import { testData } from "../data/test-data";
import { TaskCardList } from "../components/Card/TaskCardList/TaskCardList";


export const TasksPage:FC = () => {
   const [data, setData] = useState<TTaskArr>([])

   useEffect(() => {
    /* 
    Тут как бы получаем данные с сервера. Так как побочный эффект — делаем в 
    хуке useEffect. 
    Тут пока назначу просто вручную.
    */
   setData(testData)
   }, [])

   /*
   Вообще по-хорошему использовать, напрмиер, React query, оттуда вытянуть isLoading и ошибку 
   */

   if(!data) {
    return <p>Данных нет.</p>
   }

    return <TaskCardList data={data} />
}