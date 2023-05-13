// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {Achievement} from './models/achievement'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Achievement[]>
) {
    res.status(200).json([
        {
            Src: "/achievement.svg",
            Name: "Сквозь дедлайны",
            Date: "12.04.2022",
            IsMain: true
        },
        {
            Src: "/achievement.svg",
            Name: "Сквозь дедлайны",
            Date: "12.04.2022",
            IsMain: true
        },
        {
            Src: "/achievement.svg",
            Name: "Сквозь дедлайны",
            Date: "12.04.2022",
            IsMain: true
        },
        {
            Src: "/fire.png",
            Name: "Хакатон",
            Date: "12.04.2022"
        },
        {
            Src: "/fire.png",
            Name: "Хакатон",
            Date: "12.04.2022"
        },
        {
            Src: "/fire.png",
            Name: "Хакатон",
            Date: "12.04.2022"
        },
        {
            Src: "/fire.png",
            Name: "Хакатон",
            Date: "12.04.2022"
        }
    ])
}
