import axios from "axios";
import { useEffect, useState } from "react";
import AchievementCard from "../components/AchievementCard";
import { Achievement } from "./api/models/achievement";

const Profile = () => {
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
    <div className="flex flex-row">
      <div className="basis-1/2">
        <img src="/avatar.svg" />
        <p className="font-bold">Обо мне</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
          eius itaque? Asperiores commodi voluptas et deserunt! Eveniet esse est
          corrupti, doloremque maiores similique culpa laborum quidem, vitae
          doloribus voluptates fuga.
        </p>
      </div>
      <div className="basis-1/2">
        <ul className="grid grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <li key={index}>
              <AchievementCard {...achievement} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
