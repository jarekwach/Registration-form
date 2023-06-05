import React from 'react';
import FormField from '../components/FormField';

const Page1 = ({ formFields, onChange }) => {
	const fields = formFields.map((field) => (
		<FormField
			key={field.name}
			data={field}
			onChange={onChange}></FormField>
	));
	return (
		<>
			<h2>Page 1</h2>
			{fields}
		</>
	);
};

export { Page1 };
