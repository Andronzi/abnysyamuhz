import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { toast } from "react-hot-toast";
import { Task } from "../pages/api/models/task";
import { useGetEmployeeQuery } from "../services/employee/employeeRealApi";
import { useDelTaskMutation } from "../services/tasks/taskRealApi";

const TaskRow: FC<Task & { isAdmin: boolean }> = ({
  ID,
  Name,
  Description,
  Reward,
  isAdmin,
}) => {
  const router = useRouter();
  const [delTask] = useDelTaskMutation();
  const employee = useGetEmployeeQuery("12").data;

  return (
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
            <Button
              className="w-full bg-amber-500 shadow-amber-500/20 hover:shadow-amber-500/40 text-white rounded-md font-medium py-3 px-6"
              onClick={() => {
                router.push({
                  pathname: "/admin-panel/task/edit",
                  query: {
                    id: ID,
                  },
                });
              }}
            >
              Изменить
            </Button>
            <Button
              className="w-full bg-red-500 shadow-red-500/20  hover:shadow-red-500/40 text-white rounded-md font-medium p-3 py-3 px-6"
              onClick={() => {
                try {
                  delTask(ID);
                  toast.success("Задача успешно удалена");
                } catch (err) {
                  console.log(err);
                  toast.error("Упс... Что-то пошло не так :(");
                }
              }}
            >
              Удалить
            </Button>
          </div>
        )}
        {!isAdmin &&
          !employee?.Tasks.filter((task) => task.ID === ID).length && (
            <Button className="ml-4">Приступить</Button>
          )}
      </div>
    </div>
  );
};

export default TaskRow;
