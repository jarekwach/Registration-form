import React from 'react';
import FormField from '../components/FormField';

const Page2 = ({ formFields, onChange, inputValue, formErrors }) => {
	const fields = formFields.map((field) => {
		const fieldError = formErrors.map((error) => {
			if (error.name === field.name) {
				return error.message;
			}
			return null;
		});

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
			<h2>Page 2</h2>
			{fields}
		</>
	);
};

export { Page2 };
