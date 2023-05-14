import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	Input,
} from "@material-tailwind/react";
import { useState } from "react";
import {useGetUnitsQuery} from "../services/unit/unitRealApi";

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
				<Accordion open={isOpen(2)}>
					<AccordionHeader onClick={() => handleOpen(2)}>
						Офис г. Санкт-Петербург
					</AccordionHeader>
					<AccordionBody className={"p-2"}>
						<Accordion open={isOpen(22)}>
							<AccordionHeader onClick={() => handleOpen(22)}>
								Отдел разработки
							</AccordionHeader>

							<AccordionBody className={"p-2"}>

								<Accordion open={isOpen(221)}>
									<AccordionHeader onClick={() => handleOpen(221)}>
										Команда разработки фронтенда
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Иванов Иван Иванович
										<br/>
										Смирнова Анастасия Петровна
										<br/>
										Королева Екатерина Дмитриевна
									</AccordionBody>
								</Accordion>

								<Accordion open={isOpen(222)}>
									<AccordionHeader onClick={() => handleOpen(222)}>
										Команда разработки бэкенда
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Петров Петр Петрович
										<br/>
										Сидоров Сидор Сидорович
										<br/>
										Федоров Дмитрий Иванович
									</AccordionBody>
								</Accordion>

								<Accordion open={isOpen(223)}>
									<AccordionHeader onClick={() => handleOpen(223)}>
										Команда тестирования
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Новикова Анастасия Александровна
										<br/>
										Кузнецов Алексей Владимирович
										<br/>
										Соколова Ольга Игоревна
									</AccordionBody>
								</Accordion>

							</AccordionBody>
						</Accordion>

						<Accordion open={isOpen(4)}>
							<AccordionHeader onClick={() => handleOpen(4)}>
								Отдел дизайна
							</AccordionHeader>

							<AccordionBody className={"p-2"}>

								<Accordion open={isOpen(41)}>
									<AccordionHeader onClick={() => handleOpen(41)}>
										Команда дизайнеров интерфейсов
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Смирнова Елена Владимировна
										<br/>
										Попов Андрей Сергеевич
										<br/>
										Козлова Анна Максимовна
									</AccordionBody>
								</Accordion>

								<Accordion open={isOpen(42)}>
									<AccordionHeader onClick={() => handleOpen(42)}>
										Команда графических дизайнеров
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Ковалев Иван Сергеевич
										<br/>
										Михайлова Оксана Александровна
									</AccordionBody>
								</Accordion>

							</AccordionBody>
						</Accordion>

						<Accordion open={isOpen(5)}>
							<AccordionHeader onClick={() => handleOpen(5)}>
								Отдел продукта
							</AccordionHeader>

							<AccordionBody className={"p-2"}>

								<Accordion open={isOpen(51)}>
									<AccordionHeader onClick={() => handleOpen(51)}>
										Продуктовый менеджер
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Козлов Максим Сергеевич
									</AccordionBody>
								</Accordion>

								<Accordion open={isOpen(52)}>
									<AccordionHeader onClick={() => handleOpen(52)}>
										Команда аналитики
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Иванова Ольга Викторовна
										<br/>
										Соколов Сергей Андреевич
										<br/>
										Петрова Екатерина Дмитриевна
									</AccordionBody>
								</Accordion>

								<Accordion open={isOpen(53)}>
									<AccordionHeader onClick={() => handleOpen(53)}>
										Команда менеджмента продукта
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Сидорова Анастасия Ивановна
										<br/>
										Федорова Оксана Владимировна
									</AccordionBody>
								</Accordion>

							</AccordionBody>
						</Accordion>

						<Accordion open={isOpen(6)}>
							<AccordionHeader onClick={() => handleOpen(6)}>
								Отдел маркетинга
							</AccordionHeader>

							<AccordionBody className={"p-2"}>

								<Accordion open={isOpen(61)}>
									<AccordionHeader onClick={() => handleOpen(61)}>
										Команда маркетологов
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Никитина Анна Александровна
										<br/>
										Михайлов Игорь Васильевич
										<br/>
										Смирнов Денис Сергеевич
									</AccordionBody>
								</Accordion>

								<Accordion open={isOpen(62)}>
									<AccordionHeader onClick={() => handleOpen(62)}>
										Команда PR
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Кузнецова Елена Андреевна
										<br/>
										Попова Анна Сергеевна
									</AccordionBody>
								</Accordion>

							</AccordionBody>
						</Accordion>

						<Accordion open={isOpen(7)}>
							<AccordionHeader onClick={() => handleOpen(7)}>
								Отдел кадров
							</AccordionHeader>

							<AccordionBody className={"p-2"}>

								<Accordion open={isOpen(71)}>
									<AccordionHeader onClick={() => handleOpen(71)}>
										Специалисты по подбору персонала
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Иванова Екатерина Сергеевна
										<br/>
										Петрова Наталья Андреевна
									</AccordionBody>
								</Accordion>

								<Accordion open={isOpen(72)}>
									<AccordionHeader onClick={() => handleOpen(72)}>
										HR-менеджеры
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Соколова Анна Петровна
										<br/>
										Федорова Татьяна Ивановна
									</AccordionBody>
								</Accordion>

							</AccordionBody>
						</Accordion>

					</AccordionBody>
				</Accordion>

				<Accordion open={isOpen(5)}>
					<AccordionHeader onClick={() => handleOpen(5)}>
						Офис г. Томск
					</AccordionHeader>
					<AccordionBody className={"p-2"}>

						<Accordion open={isOpen(1001)}>
							<AccordionHeader onClick={() => handleOpen(1001)}>
								Отдел разработки
							</AccordionHeader>
							<AccordionBody className={"p-2"}>
								<Accordion open={isOpen(1011)}>
									<AccordionHeader onClick={() => handleOpen(1011)}>
										Команда разработки фронтенда
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Иван Арсеньев
										<br/>
										Андрей Радионов
									</AccordionBody>
								</Accordion>

								<Accordion open={isOpen(1012)}>
									<AccordionHeader onClick={() => handleOpen(1012)}>
										Команда разработки бэкенда
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Егор Шамов
										<br/>
										Александр Зоркин
									</AccordionBody>
								</Accordion>

							</AccordionBody>
						</Accordion>

						<Accordion open={isOpen(51)}>
							<AccordionHeader onClick={() => handleOpen(51)}>
								Отдел дизайна
							</AccordionHeader>
							<AccordionBody className={"p-2"}>
								<Accordion open={isOpen(511)}>
									<AccordionHeader onClick={() => handleOpen(511)}>
										Главный дизайнер
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Карина Шуман
									</AccordionBody>
								</Accordion>
							</AccordionBody>
						</Accordion>

					</AccordionBody>
				</Accordion>

				<Accordion open={isOpen(1)}>
					<AccordionHeader onClick={() => handleOpen(1)}>
						Главный офис г. Москва
					</AccordionHeader>
					<AccordionBody className={"p-2"}>
						<Accordion open={isOpen(12)}>
							<AccordionHeader onClick={() => handleOpen(12)}>
								Отдел разработки
							</AccordionHeader>

							<AccordionBody className={"p-2"}>

								<Accordion open={isOpen(121)}>
									<AccordionHeader onClick={() => handleOpen(121)}>
										Команда разработки фронтенда
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Иванов Иван Иванович
									</AccordionBody>
								</Accordion>

								<Accordion open={isOpen(122)}>
									<AccordionHeader onClick={() => handleOpen(122)}>
										Команда разработки бэкенда
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Петров Петр Петрович
										<br/>
										Сидоров Сидор Сидорович
									</AccordionBody>
								</Accordion>

								<Accordion open={isOpen(123)}>
									<AccordionHeader onClick={() => handleOpen(123)}>
										Команда тестирования
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Новикова Анастасия Александровна
										<br/>
										Кузнецов Алексей Владимирович
									</AccordionBody>
								</Accordion>

							</AccordionBody>
						</Accordion>

						<Accordion open={isOpen(13)}>
							<AccordionHeader onClick={() => handleOpen(13)}>
								Отдел дизайна
							</AccordionHeader>
							<AccordionBody className={"p-2"}>
								<Accordion open={isOpen(131)}>
									<AccordionHeader onClick={() => handleOpen(131)}>
									Команда дизайнеров интерфейсов
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Смирнова Елена Владимировна
										<br/>
										Попов Андрей Сергеевич
									</AccordionBody>
								</Accordion>
							</AccordionBody>
						</Accordion>

						<Accordion open={isOpen(14)}>
							<AccordionHeader onClick={() => handleOpen(14)}>
								Отдел продукта
							</AccordionHeader>
							<AccordionBody className={"p-2"}>

								<Accordion open={isOpen(141)}>
									<AccordionHeader onClick={() => handleOpen(141)}>
										Продуктовый менеджер
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Козлов Максим Сергеевич
									</AccordionBody>
								</Accordion>

								<Accordion open={isOpen(142)}>
									<AccordionHeader onClick={() => handleOpen(142)}>
										Команда аналитики
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Иванова Ольга Викторовна
										<br/>
										Соколов Сергей Андреевич
									</AccordionBody>
								</Accordion>

							</AccordionBody>
						</Accordion>

						<Accordion open={isOpen(15)}>
							<AccordionHeader onClick={() => handleOpen(15)}>
								Отдел маркетинга
							</AccordionHeader>
							<AccordionBody className={"p-2"}>

								<Accordion open={isOpen(151)}>
									<AccordionHeader onClick={() => handleOpen(151)}>
										Команда маркетологов
									</AccordionHeader>
									<AccordionBody className={"p-2"}>
										Никитина Анна Александровна
										<br/>
										Михайлов Игорь Васильевич
									</AccordionBody>
								</Accordion>

							</AccordionBody>
						</Accordion>
					</AccordionBody>
				</Accordion>
			</div>
		</div>
	);
};

export default Staff;
