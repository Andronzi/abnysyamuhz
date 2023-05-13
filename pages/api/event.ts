// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { events } from './data/event';
import { IEvent } from './models/event';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IEvent[]>
) {
  const { method } = req;
  switch(method) {
    case "GET":
      res.status(200).json(events);
      break;
    case "POST":
      const event = { ID: events.length + 1, ...req.body };
      events.push(event);
      res.status(200).json(event);
  }
}
