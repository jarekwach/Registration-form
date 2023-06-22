import React from 'react';
import { StyledFormField } from './FormField.styled';
import Label from '../Label';
import InputText from '../InputText';
import FormError from '../FormError';

const FormField = ({ data, onChange, inputValue, fieldError }) => {
	const { name, label, type } = data;

	return (
		<StyledFormField>
			<Label label={name}>
				<InputText
					type={type}
					label={label}
					name={name}
					onChange={onChange}
					inputValue={inputValue}></InputText>
			</Label>
			<FormError>{fieldError.find((element) => element !== null)}</FormError>
		</StyledFormField>
	);
};

export default FormField;
