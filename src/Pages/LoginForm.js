import React from 'react';
import FormField from '../components/FormField';
import { getFieldError } from '../helpers';

const LoginForm = ({ formFields, onChange, inputValue, formErrors }) => {
	const fields = formFields.map((field) => {
		const fieldError = getFieldError(formErrors, field);

		return (
			<FormField
				key={field.name}
				data={field}
				onChange={onChange}
				inputValue={inputValue[field.name]}
				fieldError={fieldError}></FormField>
		);
	});

	return (
		<>
			<h2>Login data</h2>
			{fields}
		</>
	);
};

export { LoginForm };
