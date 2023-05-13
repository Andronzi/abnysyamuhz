import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import AchievementCard from "../components/AchievementCard";
import { commonApi } from "../services/common/commponApi";
import { EmployeeObj } from "../services/common/types";
import { Achievement } from "./api/models/achievement";

const Profile = () => {
  const employee = commonApi(
    "employee",
    EmployeeObj,
    EmployeeObj,
    "Employee"
  ).useGetEntityQuery("12").data;
  const [achievements, setAchievements] = useState([] as Achievement[]);

  async function getAchievements() {
    const achievements = await axios.get(
      "http://localhost:3000/api/achievement"
    );
    setAchievements(achievements.data);
  }
  useEffect(() => {
    getAchievements();
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="absolute left-0 top-20 h-44 bg-cover bg-[url('/back.png')] w-full z-10"></div>
      <div className="flex flex-row mt-8 w-full">
        <div className="w-96 z-20">
          <img src="/avatar.png" className="w-full" />
          <div className="info bg-[#2D2D2D] p-4 pb-8">
            <p className="font-bold text-white text-lg">Обо мне</p>
            <p className="mt-4 text-white">
              Я имею высшее техническое образование и успешный опыт работы в
              различных проектах. Я прекрасно разбираюсь в программировании на
              Java и Python, а также владею английским языком на уровне
              Advanced. Стремлюсь к развитию своих навыков не только в
              направлении Backend, но и в направлении Machine Learning.
            </p>
          </div>
        </div>
        <div className="relative ml-8 mt-20 z-20 basis-full">
          <h2 className="text-white text-4xl">Ксения Носкова</h2>
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
              {achievements.map((achievement, index) => (
                <li key={index}>
                  <AchievementCard {...achievement} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
