import Image from "next/image";
import { useRouter } from "next/router";
import { useGetTasksQuery } from "../../services/tasks/taskRealApi";

const EventPage = () => {
  const router = useRouter();
  const tasks = useGetTasksQuery().data;
  return (
    <>
      <div className="relative">
        <img
          className="object-cover w-full h-[34rem] z-10"
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <h1 className="absolute text-coral text-6xl font-bold top-4 left-4">
          IT-REVOLUTION
        </h1>
      </div>
      <div className="flex flex-row justify-between">
        <div className="basis-2/5 z-20 -mt-32 ml-1">
          <button className="flex items-center relative text-white border-2 pl-10 py-3 pr-2 text-2xl rounded-full border-white mb-4">
            ЗАРЕГИСТРИРОВАТЬСЯ
            <Image src="/arrow.svg" className="ml-6" width={42} height={42} />
          </button>
          <p className="text-white">
            Участники получат возможность узнать : о последних тенденциях в
            IT-индустрии о новейших технологиях и инструментах для работы. Кроме
            того, они смогут провести время с коллегами из других отделов
            компании, обсудить свои проекты и получить ценные советы и
            рекомендации от опытных профессионалов.{" "}
          </p>
        </div>
        <div className="basis-3/5 z-20 -mt-12 ml-1">
          <p className="cringe-text text-transparent text-5xl font-bold text-right tracking-wider">
            Открытие новых горизонтов в мире технологий
          </p>
        </div>
      </div>
    </>
  );
};

export default EventPage;
