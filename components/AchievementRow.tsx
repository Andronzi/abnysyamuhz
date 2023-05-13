import Image from "next/image";
import { FC } from "react";
import { convertDate } from "../helpers/getDate";
import { Achievement } from "../pages/api/models/achievement";

const AchievementRow: FC<Achievement> = ({ Src, Name, Date }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <Image
        className="mx-auto"
        src={Src}
        alt="Картинка достижения"
        width={26}
        height={26}
      />
      <p className="mt-1 text-center text-white font-medium text-lg">{Name}</p>
    </div>
    <p className="mt-1 text-center text-white text-md">{Date}</p>
  </div>
);

export default AchievementRow;
