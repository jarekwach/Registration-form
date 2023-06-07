import React from 'react';
import FormField from '../components/FormField';
import Checkbox from '../components/Checkbox';

const Page3 = ({ formFields, onChange, inputValue, formErrors, onChecked }) => {
	const fields = formFields.map((field) => {
		const fieldError = formErrors.map((error) => {
			if (error.name === field.name) {
				return error.message;
			}
			return null;
		});

		if (field.type === 'checkbox') {
			return (
				<Checkbox
					key={field.name}
					label={field.label}
					name={field.name}
					onChecked={onChecked}
					inputValue={inputValue[field.name]}
					fieldError={fieldError}></Checkbox>
			);
		}

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
			<h2>Page 3</h2>
			{fields}
		</>
	);
};

export { Page3 };
