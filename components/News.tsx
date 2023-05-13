import { FC } from "react";
import { News } from "../pages/api/models/news";

const News: FC<News> = ({ Src, Title, Description }) => (
  <div className="cursor-pointer">
    <img
      className="object-cover h-44 w-full rounded-md"
      src={Src}
      alt="Картинка новости"
    />
    <div className="info py-2">
      <p className="text-xl text-white font-bold">{Title}</p>
      <p className="mt-3 text-white text-base font-regular">{Description}</p>
    </div>
  </div>
);
export default News;
