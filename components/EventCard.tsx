import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import toast from "react-hot-toast";
import { IEvent } from "../pages/api/models/event";
import { useDeleteEventMutation } from "../services/event/eventRealApi";
const EventCard: FC<IEvent & { isAdmin: boolean }> = ({
  ID,
  Name,
  ImageUrl,
  Place,
  Date,
  isAdmin,
  Price
}) => {
  const [deleteEvent] = useDeleteEventMutation();
  const router = useRouter();
  return (
    <>
      <p className="text-white text-2xl font-bold">{Name}</p>
      <img
        className="mt-2 object-cover h-44 w-full rounded-md"
        src={ImageUrl}
        alt="Картинка мероприятия"
      />
      <p className="text-white text-md mt-2 flex">
        <Image src="/place.svg" alt="Место проведения" width={20} height={20} />
        <span className="ml-2">{Place}</span>
      </p>
      <p className="text-white text-md flex">
        <Image
          src="/calendar.svg"
          alt="Дата проведения"
          width={20}
          height={20}
        />
        <span className="ml-2">{Date}</span>
      </p>
      <p className="text-white text-md flex">
        <Image src="/price.svg" alt="Приз" width={20} height={20} />
        <span className="ml-2">{Price}</span>
      </p>
      {!isAdmin && (
        <button className="w-full py-1.5 mt-2 bg-coral text-white rounded-md font-medium">
          Принять участие
        </button>
      )}
      {isAdmin && (
        <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
          <button
            className="w-full py-1.5 mt-2 bg-amber-500	 text-white rounded-md font-medium"
            onClick={() => {
              router.push({
                pathname: "/admin-panel/event/edit",
                query: {
                  id: ID,
                },
              });
            }}
          >
            Изменить
          </button>
          <button
            className="w-full py-1.5 mt-2 bg-red-500 text-white rounded-md font-medium"
            onClick={() => {
              try {
                deleteEvent(ID);
                toast.success("Мероприятие успешно удалено");
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
    </>
  );
};

export default EventCard;
