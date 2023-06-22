import React, { useState } from 'react';

import {
	StyledDropdownContainer,
	StyledDropdownButton,
	StyledDropdownMenu,
	StyledDropdownMenuItem,
} from './Dropdown.styled';
import FormError from '../FormError';

const Dropdown = ({ options, onSelect, fieldError, name, label, inputValue }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleDropdown = (e) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	const handleSelectOption = (option) => {
		onSelect(name, option);
		setIsOpen(false);
	};

	return (
		<StyledDropdownContainer>
			<StyledDropdownButton
				type='button'
				onClick={handleToggleDropdown}>
				{inputValue || label}
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
