import Image from "next/image";
import { FC } from "react";
import { convertDate } from "../helpers/getDate";
import { Achievement } from "../pages/api/models/achievement";

const AchievementCard: FC<Achievement> = ({ src, name, date }) => (
  <div className="flex flex-col justify-center">
    <Image
      className="mx-auto"
      src={src}
      alt="Картинка достижения"
      width={128}
      height={128}
    />
    <p className="mt-1 text-center text-white font-medium">{name}</p>
    <p className="mt-1 text-center text-white">{convertDate(date)}</p>
  </div>
);

export default AchievementCard;
