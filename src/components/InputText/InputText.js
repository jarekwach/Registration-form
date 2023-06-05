import React from 'react';
import { StyledInputText } from './InputText.styled';

const InputText = (props) => {
	const { type = 'text', label, name, onChange } = props;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		onChange(name, value);
	};

	return (
		<StyledInputText
			name={name}
			type={type}
			placeholder={label}
			onChange={handleInputChange}></StyledInputText>
	);
};

export default InputText;
