/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import News from "../components/News";

const Home: NextPage = () => {
  const [news, setNews] = useState([] as News[]);

  async function getNews() {
    const news = await axios.get("http://localhost:3000/api/news");
    setNews(news.data);
  }

  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      <div className="flex flex-row mt-6">
        <div className="text-content basis-1/2">
          <h1 className="text-white text-6xl font-extrabold">
            Революционные перемены в работе коллектива уже здесь
          </h1>
          <p className="mt-6 text-white pr-48">
            Нам предоставят новое оборудование, которое поможет увеличить
            производительность и качество продукции. Мы будем проводить
            регулярные тренинги и семинары, чтобы повышать квалификацию и
            поддерживать наш уровень профессионализма.
          </p>
        </div>
        <div className="ml-4 image basis-1/2 rounded-xl overflow-hidden">
          <img
            className="basis-1/4"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80"
            alt="Презентационная картинка офиса"
          />
        </div>
      </div>
      <ul className="product-list grid grid-cols-3 gap-4">
        {news.map((news, index) => {
          if (!news.IsMain) {
            // if (news.description.length > 40) {
            //   console.log(news.description.substring(0, 40) + "...");
            //   news.description = news.description.substring(0, 40) + "...";
            // }
            return (
              <li className="product-card mt-8" key={index}>
                <News {...news} />
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default Home;
