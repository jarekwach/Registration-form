import React, { useState } from 'react';
import {
	StyledCheckboxContainer,
	StyledHiddenCheckbox,
	StyledCheckbox,
	StyledCheckboxLabel,
} from './Checkbox.styled';

const Checkbox = ({ checked, onChange, label, name }) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleCheckboxChange = () => {
		const newChecked = !isChecked;
		setIsChecked(newChecked);

		onChange(name, newChecked);
	};

	return (
		<StyledCheckboxContainer>
			<StyledHiddenCheckbox />
			<StyledCheckbox
				checked={isChecked}
				onClick={handleCheckboxChange}
			/>
			{label && (
				<StyledCheckboxLabel onClick={handleCheckboxChange}>
					{label}
				</StyledCheckboxLabel>
			)}
		</StyledCheckboxContainer>
	);
};

export default Checkbox;
