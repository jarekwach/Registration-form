import React from 'react';
import FormField from '../components/FormField';
import Dropdown from '../components/Dropdown/Dropdown';
import { getFieldError } from '../helpers';

const UserForm = ({
	formFields,
	onChange,
	onSelect,
	inputValue,
	formErrors,
}) => {
	const fields = formFields.map((field) => {
		const fieldError = getFieldError(formErrors, field);

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
			<h2>User</h2>
			{fields}
		</>
	);
};

export { UserForm };
