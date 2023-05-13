import { NextApiRequest, NextApiResponse } from "next";
import { Gift } from "./models/gift";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Gift[]>
  ) {
    const query = req.query;
    if (query.category === "Одежда") {
        res.status(200).json([{
            Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            Name: "Name",
            Price: 220
        },
        {
            Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            Name: "Name",
            Price: 220
        },
        {
            Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            Name: "Name",
            Price: 220
        },
        {
            Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            Name: "Name",
            Price: 220
        },
        {
            Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            Name: "Name",
            Price: 220
        },
        {
            Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            Name: "Name",
            Price: 220
        },
        {
            Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            Name: "Name",
            Price: 220
        },
        {
            Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            Name: "Name",
            Price: 220
        },
        {
            Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            Name: "Name",
            Price: 220
        },
        {
            Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            Name: "Name",
            Price: 220
        },
        {
            Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            Name: "Name",
            Price: 220
        },
        {
            Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            Name: "Name",
            Price: 220
        },
    ])
    } else if (query.category === "Техника") {
        res.status(200).json([
            {
                Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
                Name: "Name",
                Price: 180
            },
            {
                Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
                Name: "Name",
                Price: 180
            }
        ])
    } else if (query.category === "Сувениры") {
        res.status(200).json([
            {
                Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
                Name: "Name",
                Price: 160
            },
            {
                Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
                Name: "Name",
                Price: 160
            }
        ])
    } else {
        res.status(200).json([
            {
                Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
                Name: "Name",
                Price: 100
            },
            {
                Src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
                Name: "Name",
                Price: 100
            }
        ])
    }
}