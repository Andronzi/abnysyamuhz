import {
	Card,
	Input,
	Checkbox,
	Button,
	Typography,
} from "@material-tailwind/react";

const EventForm = () => {
	return (
		<Card color="white" shadow={true} className="p-8 max-w-md mx-auto rounded-lg">
			<Typography variant="h4" className="text-center mb-6">
				Add News
			</Typography>
			<Typography className="text-center mb-8">
				Enter your details to send news.
			</Typography>
			<form className="flex flex-col gap-6">
				<Input size="lg" color="blue" placeholder="Enter Name" />
				<Input size="lg" color="blue" placeholder="Enter Description" />
				<Input size="lg" color="blue" placeholder="Enter Place" />
				<Input size="lg" type="date" color="blue" placeholder="Enter Data" />
                <Input size="lg" type="time" color="blue" placeholder="Enter Time" />
				<Button size="lg" className="mt-6 bg-blue-400">
					Send News
				</Button>
			</form>
		</Card>
	);
};

export default EventForm;
