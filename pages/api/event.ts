// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IEvent } from './models/event'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IEvent[]>
) {
  res.status(200).json([
    {
        Title: "IT-Hack",
        Src: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Place: "ТЦ Красное Знамя",
        Date: new Date(),
        Price: 2500
    },
    {
        Title: "Курсы питчера",
        Src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Place: "ТЦ Красное Знамя",
        Date: new Date(),
        Price: 1000
    },
    {
        Title: "Новый Skype",
        Src: "https://images.unsplash.com/photo-1612831820363-9b92f70109a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        Place: "ТЦ Красное Знамя",
        Date: new Date(),
        Price: 1000
    },
    {
        Title: "After Party",
        Src: "https://images.unsplash.com/photo-1563050860-87d45eaaeabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
        Place: "ТЦ Красное Знамя",
        Date: new Date(),
        Price: 1000
    }
  ])
}
