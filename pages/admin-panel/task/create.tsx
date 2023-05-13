import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";

const EventForm = () => {
  const [price, setPrice] = useState(150);

  const handlePriceChange = (event: { target: { value: any } }) => {
    setPrice(event.target.value);
  };
  return (
    <Card
      color="white"
      shadow={true}
      className="p-8 max-w-md mx-auto rounded-lg"
    >
      <Typography variant="h4" className="text-center mb-6">
        Add Task
      </Typography>
      <Typography className="text-center mb-8">
        Enter your details to add task.
      </Typography>
      <form className="flex flex-col gap-6">
        <label>
          Title
          <Input size="lg" placeholder="Enter Name" />
        </label>
        <label>
          Description
          <Input size="lg" placeholder="Enter Description" />
        </label>
        <label>
          Price: {price}
          <input
            type="range"
            min="0"
            max="300"
            step={10}
            onChange={handlePriceChange}
            className="w-full"
          />
        </label>
        <div>
          Deadline:
          <Input size="lg" type="date" placeholder="Enter Data" />
          <br></br>
          <Input size="lg" type="time" placeholder="Enter Time" />
        </div>
        <Button className="bg-blue-400">Add Task</Button>
      </form>
    </Card>
  );
};

export default EventForm;
