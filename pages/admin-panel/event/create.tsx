import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddEmployeeMutation } from "../../../services/event/eventApi";
import { IEvent } from "../../api/models/event";

const EventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEvent>();
  const [addEvent] = useAddEmployeeMutation();
  const onSubmit: SubmitHandler<IEvent> = async (data) => {
    try {
      await addEvent(data).unwrap();
      toast.success("Мероприятие успешно добавлено");
    } catch (err) {
      console.log(err);
      toast.error("Упс... Что-то пошло не так :(");
    }
  };

  return (
    <Card
      color="white"
      shadow={true}
      className="p-8 max-w-md mx-auto rounded-lg"
    >
      <Typography variant="h4" className="text-center mb-6">
        Add News
      </Typography>
      <Typography className="text-center mb-8">
        Enter your details to send news.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <Input
          size="lg"
          color="blue"
          placeholder="Введите название"
          {...register("Title")}
        />
        <Input
          size="lg"
          color="blue"
          placeholder="Добавьте ссылочку на изображение"
        />
        <Input
          size="lg"
          color="blue"
          placeholder="Введите описание"
          {...register("Description")}
        />
        <Input
          size="lg"
          color="blue"
          placeholder="Укажите место, где будет проходить мероприятие"
          {...register("Place")}
        />
        <Input
          size="lg"
          type="date"
          color="blue"
          placeholder="Enter Data"
          {...register("Date")}
        />
        {/* <Input size="lg" type="time" color="blue" placeholder="Enter Time" /> */}
        <Button type="submit" size="lg" className="mt-6 bg-blue-400">
          Send News
        </Button>
      </form>
    </Card>
  );
};

export default EventForm;
