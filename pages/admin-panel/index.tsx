import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import EventCard from "../../components/EventCard";
import News from "../../components/News";
import Task from "../../components/Task";
import { useGetEventsQuery } from "../../services/event/eventApi";
import { useGetNewsQuery } from "../../services/news/newsApi";
import { useGetTasksQuery } from "../../services/tasks/taskApi";

const AdminPanel = () => {
  const news = useGetNewsQuery().data;
  const events = useGetEventsQuery().data;
  const tasks = useGetTasksQuery().data;
  const [newsOpen, setNewsOpen] = useState(1);
  const [eventsOpen, setEventsOpen] = useState(0);
  const [tasksOpen, setTasksOpen] = useState(0);

  const handleOpen = (value: number, openValue: number, changeOpen: any) => {
    changeOpen(openValue === value ? 0 : value);
  };

  return (
    <div className="mt-8">
      <p className="text-4xl text-white text-center">
        Приветствуем вас Administrator
      </p>
      <Accordion open={newsOpen === 1}>
        <AccordionHeader onClick={() => handleOpen(1, newsOpen, setNewsOpen)}>
          <p className="text-white">Новости компании</p>
        </AccordionHeader>
        <AccordionBody>
          <ul className="product-list grid grid-cols-3 gap-4">
            {news?.map((news, index) => {
              if (!news.IsMain) {
                return (
                  <li className="product-card mt-8" key={index}>
                    <News {...news} />
                  </li>
                );
              }
            })}
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={eventsOpen === 1}>
        <AccordionHeader
          onClick={() => handleOpen(1, eventsOpen, setEventsOpen)}
        >
          <p className="text-white">Мероприятия компании</p>
        </AccordionHeader>
        <AccordionBody>
          <ul className="product-list grid grid-cols-4 gap-6 pb-4">
            {events?.map((event, index) => (
              <li className="product-card mt-8" key={index}>
                <EventCard {...event} isAdmin={true} />
              </li>
            ))}
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={tasksOpen === 1}>
        <AccordionHeader onClick={() => handleOpen(1, tasksOpen, setTasksOpen)}>
          <p className="text-white">Задачи компании</p>
        </AccordionHeader>
        <AccordionBody>
          <ul className="pb-4">
            {tasks?.map((task, index) => (
              <li className="product-card mt-4" key={index}>
                <Task isAdmin={true} {...task} />
              </li>
            ))}
          </ul>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default AdminPanel;