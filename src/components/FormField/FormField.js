import React from 'react';
import { StyledFormField } from './FormField.styled';
import Label from '../Label';
import InputText from '../InputText';

const FormField = ({ data, onChange }) => {
	const { name, label, required, pattern, type } = data;

	return (
		<StyledFormField>
			<Label for={label}>
				<InputText
					type={type}
					label={label}
					name={name}
					onChange={onChange}></InputText>
			</Label>
		</StyledFormField>
	);
};

export default FormField;
