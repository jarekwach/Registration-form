import React from 'react';
import {
	StyledCheckboxContainer,
	StyledHiddenCheckbox,
	StyledCheckbox,
	StyledCheckboxLabel,
} from './Checkbox.styled';
import FormError from '../FormError';

const Checkbox = ({ onChecked, label, name, inputValue, fieldError }) => {
	const handleCheckboxChange = () => {
		onChecked(name, !inputValue);
	};

	return (
		<>
			<StyledCheckboxContainer>
				<StyledHiddenCheckbox />
				<StyledCheckbox
					checked={inputValue}
					onClick={handleCheckboxChange}
				/>
				{label && (
					<StyledCheckboxLabel onClick={handleCheckboxChange}>
						{label}
					</StyledCheckboxLabel>
				)}
			</StyledCheckboxContainer>
			<FormError>{fieldError}</FormError>
		</>
	);
};

export default Checkbox;
