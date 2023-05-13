// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Task } from './models/task'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Task[]>
) {
  res.status(200).json([
    {
        name: "Лекция о последних тенденциях",
        description: "Необходимо прослушать лекцию и выполнить небольшой тест",
        price: 450
    },
    {
        name: "Лекция о последних тенденциях",
        description: "Необходимо прослушать лекцию и выполнить небольшой тест",
        price: 450
    },
    {
        name: "Лекция о последних тенденциях",
        description: "Необходимо прослушать лекцию и выполнить небольшой тест",
        price: 450
    },
    {
        name: "Лекция о последних тенденциях",
        description: "Необходимо прослушать лекцию и выполнить небольшой тест",
        price: 450
    },
    {
        name: "Лекция о последних тенденциях",
        description: "Необходимо прослушать лекцию и выполнить небольшой тест",
        price: 450
    },
    {
        name: "Лекция о последних тенденциях",
        description: "Необходимо прослушать лекцию и выполнить небольшой тест",
        price: 450
    },
  ])
}
