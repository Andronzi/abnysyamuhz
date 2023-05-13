import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "./models/product";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product[]>
  ) {
    const query = req.query;
    if (query.category === "Одежда") {
        res.status(200).json([{
            src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            name: "Name",
            price: 220
        },
        {
            src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            name: "Name",
            price: 220
        },
        {
            src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            name: "Name",
            price: 220
        },
        {
            src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            name: "Name",
            price: 220
        },
        {
            src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            name: "Name",
            price: 220
        },
        {
            src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            name: "Name",
            price: 220
        },
        {
            src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            name: "Name",
            price: 220
        },
        {
            src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            name: "Name",
            price: 220
        },
        {
            src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            name: "Name",
            price: 220
        },
        {
            src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            name: "Name",
            price: 220
        },
        {
            src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            name: "Name",
            price: 220
        },
        {
            src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
            name: "Name",
            price: 220
        },
    ])
    } else if (query.category === "Техника") {
        res.status(200).json([
            {
                src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
                name: "Name",
                price: 180
            },
            {
                src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
                name: "Name",
                price: 180
            }
        ])
    } else if (query.category === "Сувениры") {
        res.status(200).json([
            {
                src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
                name: "Name",
                price: 160
            },
            {
                src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
                name: "Name",
                price: 160
            }
        ])
    } else {
        res.status(200).json([
            {
                src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
                name: "Name",
                price: 100
            },
            {
                src: "https://producttoday.ru/wp-content/uploads/2020/12/mailservice.jpg",
                name: "Name",
                price: 100
            }
        ])
    }
}