import React from 'react';
import { SwitchContainer, SwitchLabel, Slider } from './Switch.styled';

const Switch = (props) => {
	const { onChange, isOn, children } = props;

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
