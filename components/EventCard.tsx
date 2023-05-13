import Image from "next/image";
import { FC } from "react";
import { IEvent } from "../pages/api/models/event";

const EventCard: FC<IEvent & { isAdmin: boolean }> = ({
  Name,
  ImageUrl,
  Place,
  Date,
  isAdmin,
}) => (
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
      <Image src="/calendar.svg" alt="Дата проведения" width={20} height={20} />
      <span className="ml-2">{Date}</span>
    </p>
    <p className="text-white text-md flex">
      <Image src="/price.svg" alt="Приз" width={20} height={20} />
      <span className="ml-2">1000</span>
    </p>
    {!isAdmin && (
      <button className="w-full py-1.5 mt-2 bg-coral text-white rounded-md font-medium">
        Принять участие
      </button>
    )}
    {isAdmin && (
      <div className="flex gap-4">
        <button className="w-full py-1.5 mt-2 bg-amber-500	 text-white rounded-md font-medium">
          Изменить
        </button>
        <button className="w-full py-1.5 mt-2 bg-red-500 text-white rounded-md font-medium">
          Удалить
        </button>
      </div>
    )}
  </>
);

export default EventCard;
