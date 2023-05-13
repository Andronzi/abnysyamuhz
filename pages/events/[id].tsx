import TaskRow from "../../components/Task";
import { useGetTasksQuery } from "../../services/tasks/taskApiStub";

const EventPage = () => {
  const tasks = useGetTasksQuery().data;
  return (
    <>
      <img
        className="object-cover w-full h-96 z-10"
        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <div className="flex flex-row">
        <div className="basis-1/2 z-20 -mt-16 ml-1">
          <p className="text-white text-5xl font-bold w-4/5">
            IT-REVOLUTION: Открытие новых горизонтов в мире технологий!
          </p>
          <p className="text-white">
            Участники получат возможность узнать : о последних тенденциях в
            IT-индустрии о новейших технологиях и инструментах для работы. Кроме
            того, они смогут провести время с коллегами из других отделов
            компании, обсудить свои проекты и получить ценные советы и
            рекомендации от опытных профессионалов.{" "}
          </p>
        </div>
        <ul className="ml-8 pb-4 basis-1/2">
          {tasks?.map((task, index) => (
            <li className="product-card mt-4" key={index}>
              <TaskRow isAdmin={false} {...task} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EventPage;
