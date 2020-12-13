import React from 'react';

const InputField = ({
	handleChange,
	label,
	type,
	name,
	handleBlur,
	values,
	errors,
	touched,
}) => {
	return (
		<div className='form-control'>
			<label
				className={`form-control__label ${
					errors[name] && touched[name] && errors[name] ? 'label-error' : null
				}`}
				htmlFor={name}>
				{label}
			</label>
			<input
				className={`form-control__field ${
					errors[name] && touched[name] && errors[name] ? 'field-error' : null
				}`}
				type={type}
				id={name}
				name={name}
				onChange={handleChange}
				onBlur={handleBlur}
				value={values[name]}
			/>
			<span className='form-error'>
				{errors[name] && touched[name] && errors[name]}
			</span>
		</div>
	);
};

export default InputField;
