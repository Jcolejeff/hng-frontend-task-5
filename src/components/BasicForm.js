import { useState } from "react";
import CustomInput from "./Input";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const BasicForm = () => {
	const { setUserInfo } = useGlobalContext();
	const Navigate = useNavigate();
	const [values, setValues] = useState({
		lenderName: "",
		amount: "",
		startDate: "",
		duration: "",
		receiverName: "",
		amountBack: "",
	});
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
		setUserInfo(values);
		Navigate("/");
	};

	const { receiverName, lenderName, amount, startDate, duration, amountBack } =
		values;
	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<div>
				<h2>Fill in the correct details</h2>
			</div>
			<section className="names">
				<CustomInput
					id="lenderName"
					type="text"
					placeholder="Enter lender's name"
					values={lenderName}
					handleChange={handleChange}
					name="lenderName"
					label="Lender's Name"
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
					id="amount"
					type="text"
					placeholder="Enter amount"
					values={amount}
					handleChange={handleChange}
					name="amount"
					label="Amount"
				/>
				<CustomInput
					id="startDate"
					type="text"
					placeholder="Enter Start Date"
					values={startDate}
					handleChange={handleChange}
					name="startDate"
					label="Start Date"
				/>
			</section>
			<section className="names">
				<CustomInput
					id="duration"
					type="text"
					placeholder="loan duration"
					values={duration}
					handleChange={handleChange}
					name="duration"
					label="Loan duration"
				/>
				<CustomInput
					id="amountBack"
					type="text"
					placeholder="Enter amount to be paid back"
					values={amountBack}
					handleChange={handleChange}
					name="amountBack"
					label="Amount to be paid Back"
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
