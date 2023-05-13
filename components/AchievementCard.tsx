import Image from "next/image";
import { FC } from "react";
import { convertDate } from "../helpers/getDate";
import { Achievement } from "../pages/api/models/achievement";

const AchievementCard: FC<Achievement> = ({ Src, Name, Date }) => (
  <div className="flex flex-col justify-center">
    <Image
      className="mx-auto"
      src={Src}
      alt="Картинка достижения"
      width={128}
      height={128}
    />
    <p className="mt-1 text-center text-white font-medium">{Name}</p>
    <p className="mt-1 text-center text-white">{convertDate(Date)}</p>
  </div>
);

export default AchievementCard;
