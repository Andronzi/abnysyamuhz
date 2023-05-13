import Image from "next/image";
import { FC } from "react";
import { convertDate } from "../helpers/getDate";
import { IEvent } from "../pages/api/models/event";

const EventCard: FC<IEvent> = ({ Title, Src, Place, Date, Price }) => (
  <>
    <p className="text-white text-2xl font-bold">{Title}</p>
    <img
      className="mt-2 object-cover h-44 w-full rounded-md"
      src={Src}
      alt="Картинка мероприятия"
    />
    <p className="text-white text-md mt-2 flex">
      <Image src="/place.svg" alt="Место проведения" width={20} height={20} />
      <span className="ml-2">{Place}</span>
    </p>
    <p className="text-white text-md flex">
      <Image src="/calendar.svg" alt="Дата проведения" width={20} height={20} />
      <span className="ml-2">{convertDate(Date)}</span>
    </p>
    <p className="text-white text-md flex">
      <Image src="/price.svg" alt="Приз" width={20} height={20} />
      <span className="ml-2">{Price}</span>
    </p>
    <button className="w-full py-1.5 mt-2 bg-coral text-white rounded-md font-medium">
      Принять участие
    </button>
  </>
);

export default EventCard;
