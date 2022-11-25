import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { useGlobalContext } from "../context/context";

const BasicForm = () => {
	const { userInfo, setUserInfo } = useGlobalContext();
	const onSubmit = async (values, actions) => {
		console.log(values);
		console.log(actions);
		setUserInfo({ ...values });

		await new Promise((resolve) => setTimeout(resolve, 1000));
		actions.resetForm();
	};
	console.log("info", userInfo);
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
		},
		validationSchema: basicSchema,
		onSubmit,
	});

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<div>
				<h1>Fill in the correct details</h1>
			</div>
			<section className="names">
				<div>
					<label htmlFor="lender_name">First name</label>
					<input
						id="lender_name"
						type="text"
						placeholder="Enter lender's name"
						value={values.lender_name}
						onChange={handleChange}
						onBlur={handleBlur}
						className={
							errors.lender_name && touched.lender_name ? "input-error" : ""
						}
					/>
					{errors.lender_name && touched.lender_name && (
						<p className="error">{errors.lender_name}</p>
					)}
				</div>
				<div>
					<label htmlFor="last_name">Last name</label>
					<input
						id="last_name"
						type="text"
						placeholder="Enter your Last name"
						value={values.last_name}
						onChange={handleChange}
						onBlur={handleBlur}
						className={
							errors.last_name && touched.last_name ? "input-error" : ""
						}
					/>
					{errors.last_name && touched.last_name && (
						<p className="error">{errors.last_name}</p>
					)}
				</div>
			</section>

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

			<button disabled={isSubmitting} type="submit" id="btn__submit">
				Send message
			</button>
		</form>
	);
};
export default BasicForm;
