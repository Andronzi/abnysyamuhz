import { useRouter } from "next/router";
import { FC } from "react";
import toast from "react-hot-toast";
import { News } from "../pages/api/models/news";
import { useDeleteNewsMutation } from "../services/news/newsRealApi";

const NewsCard: FC<News & { isAdmin: boolean }> = ({
  ID,
  ImageUrl,
  Title,
  Body,
  isAdmin,
}) => {
  const router = useRouter();
  const [deleteNews] = useDeleteNewsMutation();
  return (
    <div className="cursor-pointer">
      <img
        className="object-cover h-44 w-full rounded-md"
        src={ImageUrl}
        alt="Картинка новости"
        onClick={() => { // @ts-ignore
            window.location = `https://samkokat.somnoynadno.ru/news/${ID}`}}
      />
      <div className="info py-2">
        <p className="text-xl text-white font-bold mb-6">{Title}</p>
        <p className="mt-3 text-white text-base font-regular h-20">{Body}</p>
        {isAdmin && (
          <div className="flex gap-4 items-center mt-2">
            <button
              className="w-full py-1.5 bg-amber-500 text-white rounded-md font-medium p-3"
              onClick={() => {
                router.push({
                  pathname: "/admin-panel/news/edit",
                  query: {
                    id: ID,
                  },
                });
              }}
            >
              Изменить
            </button>
            <button
              className="w-full py-1.5 bg-red-500 text-white rounded-md font-medium p-3"
              onClick={() => {
                try {
                  deleteNews(ID).unwrap();
                  toast.success("Новость успешно удалена");
                } catch (err) {
                  console.log(err);
                  toast.error("Упс... Что-то пошло не так :(");
                }
              }}
            >
              Удалить
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default NewsCard;
