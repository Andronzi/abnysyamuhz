import Image from "next/image";
import { FC } from "react";
import { Task } from "../pages/api/models/task";

const TaskRow: FC<Task & { isAdmin: boolean }> = ({
  Name,
  Description,
  Reward,
  isAdmin,
}) => (
  <div className="flex justify-between items-center">
    <div>
      <p className="text-white text-lg">{Name}</p>
      <p className="text-gray-500 text-md">{Description}</p>
    </div>
    <div className="flex items-center">
      <p className="text-white">{Reward}</p>
      <Image
        className="ml-2"
        width={24}
        height={24}
        src="/coin.svg"
        alt="Иконка монетки"
      />
      {!!isAdmin && (
        <div className="flex gap-4 items-center ml-4">
          <button className="w-full py-1.5 bg-amber-500 text-white rounded-md font-medium p-3">
            Изменить
          </button>
          <button className="w-full py-1.5 bg-red-500 text-white rounded-md font-medium p-3">
            Удалить
          </button>
        </div>
      )}
    </div>
  </div>
);

export default TaskRow;
