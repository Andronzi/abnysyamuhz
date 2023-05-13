import Image from "next/image";
import { FC } from "react";
import { convertDate } from "../helpers/getDate";
import { Achievement } from "../pages/api/models/achievement";

const AchievementCard: FC<Achievement> = ({ src, name, date }) => (
  <div className="flex flex-col justify-center">
    <Image src={src} alt="Картинка достижения" width={128} height={128} />
    <p className="text-center text-white font-medium">{name}</p>
    <p className="text-center text-white">{convertDate(date)}</p>
  </div>
);

export default AchievementCard;
