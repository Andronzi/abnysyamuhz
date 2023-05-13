// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Achievement } from './models/achievement'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Achievement[]>
) {
  res.status(200).json([
    {
        Src: "/achievement.svg",
        Name: "Сквозь дедлайны",
        Date: new Date(),
        IsMain: true
    },
    {
        Src: "/achievement.svg",
        Name: "Сквозь дедлайны",
        Date: new Date(),
        IsMain: true
    },
    {
        Src: "/achievement.svg",
        Name: "Сквозь дедлайны",
        Date: new Date(),
        IsMain: true
    },
    {
      Src: "/fire.png",
      Name: "Хакатон",
      Date: new Date(),
    },
    {
      Src: "/fire.png",
      Name: "Хакатон",
      Date: new Date(),
    },
    {
      Src: "/fire.png",
      Name: "Хакатон",
      Date: new Date(),
    },
    {
      Src: "/fire.png",
      Name: "Хакатон",
      Date: new Date(),
    }
  ])
}
