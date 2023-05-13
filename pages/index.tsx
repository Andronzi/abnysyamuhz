/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import News from "../components/News";
import { useGetNewsQuery } from "../services/news/newsApi";

const Home: NextPage = () => {
  const { data } = useGetNewsQuery();
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
        {data?.map((news, index) => {
          if (!news.isMain) {
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
