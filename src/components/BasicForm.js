import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { useGlobalContext } from "../context/context";
import CustomInput from "./Input";

const BasicForm = () => {
	const { userInfo, setUserInfo } = useGlobalContext();
	const onSubmit = async (values, actions) => {
		console.log(values);
		console.log(actions);

		await new Promise((resolve) => setTimeout(resolve, 1000));
		actions.resetForm();
	};
	const {
		values,
		errors,
		touched,
		isSubmitting,
		handleBlur,
		handleChange,
		handleSubmit,
	} = useFormik({
		initialValues: {
			email: "",
			lender_name: "",
			last_name: "",
			message: "",
			acceptedTos: "",
			loan_receiver: "",
			lender_address: "",
			loan_receiver_address: "",
		},
		validationSchema: basicSchema,
		onSubmit,
	});

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<div>
				<h1>Fill in the correct details</h1>
			</div>
			{/* <section className="names">
				<CustomInput
					id="lender_name"
					type="text"
					placeholder="Enter lender's name"
					values={values}
					handleBlur={handleBlur}
					handleChange={handleChange}
					errors={errors}
					touched={touched}
					label="Lender's name"
				/>
				<CustomInput
					id="lender_address"
					type="text"
					placeholder="Enter lender's address"
					values={values}
					handleBlur={handleBlur}
					handleChange={handleChange}
					errors={errors}
					touched={touched}
					label="Lender's address"
				/>
			</section>

			<section className="names">
				<CustomInput
					id="loan_receiver"
					type="text"
					placeholder="Enter receiver's name"
					values={values}
					handleBlur={handleBlur}
					handleChange={handleChange}
					errors={errors}
					touched={touched}
					label="Loan receiver"
				/>
				<CustomInput
					id="loan_receiver_address"
					type="text"
					placeholder="Enter receiver's address"
					values={values}
					handleBlur={handleBlur}
					handleChange={handleChange}
					errors={errors}
					touched={touched}
					label="Loan receiver's address"
				/>
			</section> */}

			<label htmlFor="email">Email</label>
			<input
				value={values.email}
				onChange={handleChange}
				id="email"
				type="email"
				placeholder="yourname@email.com"
				onBlur={handleBlur}
				className={errors.email && touched.email ? "input-error" : ""}
			/>
			{errors.email && touched.email && <p className="error">{errors.email}</p>}

			<label htmlFor="message">Message</label>
			<textarea
				value={values.message}
				onChange={handleChange}
				id="message"
				rows="8"
				type="textarea"
				placeholder="Send me a message and I'll reply you as soon as possible..."
				onBlur={handleBlur}
				className={errors.message && touched.message ? "input-error" : ""}
			/>
			{errors.message && touched.message && (
				<p className="error">{errors.message}</p>
			)}

			{/* <label htmlFor="checkbox">hello</label> */}

			<button
				disabled={isSubmitting}
				onClick={handleSubmit}
				type="submit"
				id="btn__submit"
			>
				Send message
			</button>
		</form>
	);
};
export default BasicForm;
