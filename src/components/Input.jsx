import React from "react";

const CustomInput = ({
	id,
	type,
	placeholder,
	values,
	handleBlur,
	handleChange,
	errors,
	touched,
	label,
}) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>

			<input
				id={id}
				type={type}
				placeholder={placeholder}
				value={values[id]}
				onChange={handleChange}
				onBlur={handleBlur}
				className={errors[id] && touched[id] ? "input-error" : ""}
			/>
			{errors[id] && touched[id] && <p className="error">{errors[id]}</p>}
		</div>
	);
};

export default CustomInput;
