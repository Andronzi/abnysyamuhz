import { NextApiRequest, NextApiResponse } from "next";
import { News } from "./models/news";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<News[]>
  ) {
    res.status(200).json([{
        src: "",
        title: "main title",
        description: "main description",
        isMain: true,
    },
    {
        src: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80",
        title: "Cохраним планету",
        description: `Наша компания массово переходит на электронный 
                        документооборот, чтобы сохранить природные ресурсы.`,
    },
    {
        src: "https://images.unsplash.com/photo-1529421308418-eab98863cee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
        title: "Новый сотрудник",
        description: `Мы рады приветствовать в нашей команде Джона Смита! `,
    },
    {
        src: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Задачник стал ещё удобнее",
        description: `Теперь у вас есть возможность добавлять заметки к каждой задаче в списке задач.`,
    },
    ])
  }
  