import React, { useState } from 'react';

import {
	StyledDropdownContainer,
	StyledDropdownButton,
	StyledDropdownMenu,
	StyledDropdownMenuItem,
} from './Dropdown.styled';
import FormError from '../FormError';

const Dropdown = ({ options, onSelect, fieldError, fieldName, inputValue }) => {
	const [isOpen, setIsOpen] = useState(false);
	// const [selectedOption, setSelectedOption] = useState(null);

	const handleToggleDropdown = (e) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	const handleSelectOption = (option) => {
		// setSelectedOption(option);
		onSelect(fieldName, option);
		setIsOpen(false);
	};

	return (
		<StyledDropdownContainer>
			<StyledDropdownButton onClick={handleToggleDropdown}>
				{inputValue || fieldName}
				<span>{isOpen ? '▲' : '▼'}</span>
			</StyledDropdownButton>
			<StyledDropdownMenu open={isOpen}>
				{options.map((option) => (
					<StyledDropdownMenuItem
						key={option}
						onClick={() => handleSelectOption(option)}>
						{option}
					</StyledDropdownMenuItem>
				))}
			</StyledDropdownMenu>
			<FormError>{fieldError}</FormError>
		</StyledDropdownContainer>
	);
};

export default Dropdown;
