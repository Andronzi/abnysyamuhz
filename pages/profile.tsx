import Image from "next/image";
import AchievementCard from "../components/AchievementCard";
import AchievementRow from "../components/AchievementRow";
import { useGetEmployeeQuery } from "../services/employee/employeeRealApi";

const Profile = () => {
  const employee = useGetEmployeeQuery("12")?.data;

  return (
    <div className="overflow-hidden">
      <div className="absolute left-0 top-20 h-44 bg-cover bg-[url('/back.png')] w-full z-10"></div>
      <div className="flex flex-row mt-8 w-full">
        <div className="basis-2/5 z-20">
          <img src="/avatar.png" className="w-full" />
          <div className="info bg-[#2D2D2D] p-4 pb-8">
            <p className="font-bold text-white text-lg">Обо мне</p>
            <p className="mt-4 text-white">
              {employee?.About}
            </p>
          </div>
        </div>
        <div className="relative ml-8 mt-20 z-20 basis-full">
          <h2 className="text-white text-4xl">{employee?.Name}</h2>
          <div className="balance-block absolute flex items-center right-0 top-3">
            <Image
              src="/coin.svg"
              alt="Картинка монеты"
              width={32}
              height={32}
            />
            <p className="text-white">{employee?.Balance}</p>
          </div>
          <div className="profile-achievements w-full mt-10 p-4 rounded-lg bg-[#2D2D2D]">
            <ul className="grid grid-cols-5 gap-6">
              {employee?.Badges.map(
                (achievement, index) =>
                  achievement.IsMain && (
                    <li key={index}>
                      <AchievementCard key={index} {...achievement} />
                    </li>
                  )
              )}
            </ul>
            <ul>
              {employee?.Badges.map(
                (achievement, index) =>
                  !achievement.IsMain && (
                    <li className="mt-2" key={index}>
                      <AchievementRow {...achievement} />
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
