import { FC } from "react";
import { News } from "../pages/api/models/news";

const NewsCard: FC<News & { isAdmin: boolean }> = ({
  ImageUrl,
  Title,
  Body,
  isAdmin,
}) => (
  <div className="cursor-pointer">
    <img
      className="object-cover h-44 w-full rounded-md"
      src={ImageUrl}
      alt="Картинка новости"
    />
    <div className="info py-2">
      <p className="text-xl text-white font-bold">{Title}</p>
      <p className="mt-3 text-white text-base font-regular h-20">{Body}</p>
      {!!isAdmin && (
        <div className="flex gap-4 items-center mt-2">
          <button className="w-full py-1.5 bg-amber-500 text-white rounded-md font-medium p-3">
            Изменить
          </button>
          <button className="w-full py-1.5 bg-red-500 text-white rounded-md font-medium p-3">
            Удалить
          </button>
        </div>
      )}
    </div>
  </div>
);
export default NewsCard;
