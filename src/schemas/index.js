import * as yup from "yup";

export const basicSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Please enter your email"),
	lender_name: yup.string().required("Please enter lender's name"),
	last_name: yup.string().required("Please enter your last name"),
	message: yup.string().required("Please enter a message"),
	loan_receiver: yup.string().required("please enter receiver's name"),
	lender_address: yup.string().required("Please enter lenders address"),
	loan_receiver_address: yup
		.string()
		.required("Please enter receiver's address"),

	// .required("Please accept the terms of service"),
});
