const CustomInput = ({
	id,
	type,
	placeholder,
	values,
	name,
	label,
	handleChange,
}) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>

			<input
				id={id}
				type={type}
				placeholder={placeholder}
				value={values}
				name={name}
				onChange={handleChange}
			/>
		</div>
	);
};

export default CustomInput;
