import {
	Card,
	Input,
	Button,
	Typography,
} from "@material-tailwind/react";

const EventForm = () => {
	var oldName = 'namename';
	var oldDescription = 'descdesc';
	var oldPrice = '10.99';


	return (
		<Card color="white" shadow={true} className="p-8 max-w-md mx-auto rounded-lg">
			<Typography variant="h4" className="text-center mb-6">
				Add News
			</Typography>
			<Typography className="text-center mb-8">
				Enter your details to send news.
			</Typography>
			<form className="flex flex-col gap-6">
				<Input size="lg" color="blue" placeholder="Enter Name" value={oldName}/>
				<Input size="lg" color="blue" placeholder="Enter Description" value={oldDescription}/>
				<Input size="lg" color="blue" placeholder="Enter Place" value={oldPrice}/>
				<Input size="lg" type="date" color="blue" placeholder="Enter Data"/>
				<Input size="lg" type="time" color="blue" placeholder="Enter Time"/>
				<Button size="lg" className="mt-6 bg-blue-400">
					Send News
				</Button>
			</form>
		</Card>
	);
};

export default EventForm;
