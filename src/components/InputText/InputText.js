import React from 'react';
import { StyledInputText } from './InputText.styled';

const InputText = (props) => {
	const { type = 'text', label, name, onChange, inputValue } = props;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		onChange(name, value);
	};

	return (
		<StyledInputText
			name={name}
			type={type}
			placeholder={label}
			onChange={handleInputChange}
			value={inputValue}></StyledInputText>
	);
};

export default InputText;
