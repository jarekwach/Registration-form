import React from 'react';
import FormField from '../components/FormField';
import Checkbox from '../components/Checkbox';
import { getFieldError } from '../helpers';

const Consents = ({
	formFields,
	onChange,
	inputValue,
	formErrors,
	onChecked,
}) => {
	const fields = formFields.map((field) => {
		const fieldError = getFieldError(formErrors, field);

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
			<h2>Consents</h2>
			{fields}
		</>
	);
};

export { Consents };
