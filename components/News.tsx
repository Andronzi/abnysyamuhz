import { FC } from "react";
import { News } from "../pages/api/models/news";

const News: FC<News> = ({ src, title, description }) => (
  <div className="cursor-pointer">
    <img
      className="object-cover h-44 w-full rounded-md"
      src={src}
      alt="Картинка новости"
    />
    <div className="info py-2">
      <p className="text-xl text-white font-bold">{title}</p>
      <p className="mt-3 text-white text-base font-regular">{description}</p>
    </div>
  </div>
);
export default News;
