import React from 'react';
import { SwitchContainer, SwitchLabel, Slider } from './Switch.styled';

const Switch = ({ onChange, isOn, children }) => {
	return (
		<SwitchContainer>
			<SwitchLabel>
				<input
					style={{ display: 'none' }}
					type='checkbox'
					checked={isOn}
					onChange={onChange}
				/>
				<Slider isOn={isOn} />
			</SwitchLabel>
			{children}
		</SwitchContainer>
	);
};

export default Switch;
