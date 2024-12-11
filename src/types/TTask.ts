import { z } from "zod";

// Создаем схему, по которой будем валидировать json с бэка

export const TaskSchema = z.object({
 id: z.number(),
 taskNum: z.number(),
 createDate: z.string(),
 controlDate: z.string(),
 releaseDate: z.string().nullable(),
 system: z.string(),
 taskType: z.string(),
 taskObj: z.object({
    name: z.string(),
    city: z.string(),
    street: z.string(),
 }),
 taskText: z.string(),
 taskStatus: z.array(z.string()),
 taskTech: z.boolean(),
 taskFiles: z.array(z.string())
})

export const TaskArraySchema = z.array(TaskSchema)

// Выводим типы из схем

export type TTask = z.infer<typeof TaskSchema>
export type TTaskArr = z.infer<typeof TaskArraySchema>