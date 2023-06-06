import React, { useState } from 'react';

import {
	StyledDropdownContainer,
	StyledDropdownButton,
	StyledDropdownMenu,
	StyledDropdownMenuItem,
} from './Dropdown.styled';

const Dropdown = ({ options, onSelect }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	const handleToggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleSelectOption = (option) => {
		setSelectedOption(option);
		onSelect(option);
		setIsOpen(false);
	};

	return (
		<StyledDropdownContainer>
			<StyledDropdownButton onClick={handleToggleDropdown}>
				{selectedOption || 'Sex'}
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
		</StyledDropdownContainer>
	);
};

export default Dropdown;
