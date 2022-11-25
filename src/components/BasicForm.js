import { useState } from "react";
import CustomInput from "./Input";

const BasicForm = () => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
		receiverName: "",
	});
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
	};

	const { receiverName } = values;
	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<div>
				<h1>Contact Me</h1>
				<p>Hi there,contact me to ask me about anything you have in mind.</p>
			</div>
			<section className="names">
				<CustomInput
					id="receiverName"
					type="text"
					placeholder="Enter receiver's name"
					values={receiverName}
					handleChange={handleChange}
					name="receiverName"
					label="Receiver's Name"
				/>
				<CustomInput
					id="receiverName"
					type="text"
					placeholder="Enter receiver's name"
					values={receiverName}
					handleChange={handleChange}
					name="receiverName"
					label="Receiver's Name"
				/>
			</section>
			<section className="names">
				<CustomInput
					id="receiverName"
					type="text"
					placeholder="Enter receiver's name"
					values={receiverName}
					handleChange={handleChange}
					name="receiverName"
					label="Receiver's Name"
				/>
				<CustomInput
					id="receiverName"
					type="text"
					placeholder="Enter receiver's name"
					values={receiverName}
					handleChange={handleChange}
					name="receiverName"
					label="Receiver's Name"
				/>
			</section>
			<section className="names">
				<CustomInput
					id="receiverName"
					type="text"
					placeholder="Enter receiver's name"
					values={receiverName}
					handleChange={handleChange}
					name="receiverName"
					label="Receiver's Name"
				/>
				<CustomInput
					id="receiverName"
					type="text"
					placeholder="Enter receiver's name"
					values={receiverName}
					handleChange={handleChange}
					name="receiverName"
					label="Receiver's Name"
				/>
			</section>
			<section className="names">
				<CustomInput
					id="receiverName"
					type="text"
					placeholder="Enter receiver's name"
					values={receiverName}
					handleChange={handleChange}
					name="receiverName"
					label="Receiver's Name"
				/>
				<CustomInput
					id="receiverName"
					type="text"
					placeholder="Enter receiver's name"
					values={receiverName}
					handleChange={handleChange}
					name="receiverName"
					label="Receiver's Name"
				/>
			</section>

			{/* <label htmlFor="checkbox">hello</label> */}

			<button type="submit" id="btn__submit">
				Send message
			</button>
		</form>
	);
};
export default BasicForm;
