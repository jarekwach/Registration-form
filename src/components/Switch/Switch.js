import React from 'react';
import { StyledSwitchContainer, StyledSwitchLabel, StyledSlider } from './Switch.styled';

const Switch = ({ onChange, isOn, children }) => {
	return (
		<StyledSwitchContainer>
			<StyledSwitchLabel>
				<input
					style={{ display: 'none' }}
					type='checkbox'
					checked={isOn}
					onChange={onChange}
				/>
				<StyledSlider isOn={isOn} />
			</StyledSwitchLabel>
			{children}
		</StyledSwitchContainer>
	);
};

export default Switch;
