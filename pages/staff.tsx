import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import {useGetUnitsQuery} from "../services/unit/unitApi";

const Staff = () => {
  const { data } = useGetUnitsQuery();

  const [openUnits, setOpen] = useState<number[]>([]);

  const isOpen = (value: number) => {
    return openUnits.indexOf(value) > -1;
  };
  const handleOpen = (value: number) => {
    const index = openUnits.indexOf(value);
    if (index > -1) {
      setOpen(openUnits.filter((item) => item !== value));
    } else {
      setOpen([...openUnits, value]);
    }
  };

  return (
    <div>
      <div className="m-6 flex flex-col gap-6">
        <Input size="lg" placeholder="Поиск" />
      </div>

      <div className="p-4 rounded-lg" style={{ backgroundColor: "#F2F2F7" }}>
        <Accordion open={isOpen(0)}>
          <AccordionHeader onClick={() => handleOpen(0)}>
            Офис г. Санкт-Петербург
          </AccordionHeader>
          <AccordionBody className={"p-2"}>Команда разработки</AccordionBody>
        </Accordion>
        <Accordion open={isOpen(1)}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Главный офис г. Москва
          </AccordionHeader>
          <AccordionBody className={"p-2"}>
            <Accordion open={isOpen(2)}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                Отдел разработки
              </AccordionHeader>
              <AccordionBody className={"p-2"}>
                Команда разработки фронтенда
                <br />
                Команда разработки бекенда
              </AccordionBody>
            </Accordion>
            <Accordion open={isOpen(3)}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                Отдел маркетинга
              </AccordionHeader>
              <AccordionBody className={"p-2"}>
                Команда маркетинга
              </AccordionBody>
            </Accordion>
            <Accordion open={isOpen(4)}>
              <AccordionHeader onClick={() => handleOpen(4)}>
                Отдел аналитики
              </AccordionHeader>
              <AccordionBody className={"p-2"}>Команда аналитики</AccordionBody>
            </Accordion>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default Staff;
