import React from 'react';
import FormField from '../components/FormField';
import Dropdown from '../components/Dropdown/Dropdown';

const Page1 = ({ formFields, onChange, onSelect, inputValue, formErrors }) => {
	const fields = formFields.map((field) => {
		const fieldError = formErrors.map((error) => {
			if (error.name === field.name) {
				return error.message;
			}
			return null;
		});

		if (field.type === 'select') {
			return (
				<Dropdown
					key={field.name}
					name={field.name}
					label={field.label}
					options={field.options}
					onSelect={onSelect}
					inputValue={inputValue[field.name]}
					fieldError={fieldError}></Dropdown>
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
			<h2>Page 1</h2>
			{fields}
		</>
	);
};

export { Page1 };
