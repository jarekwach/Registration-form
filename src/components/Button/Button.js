import React from 'react';
import { StyledButton } from './Button.styled';

const Button = (props) => {
	return (
		<StyledButton
			type={props.type}
			onClick={props.onClick}>
			{props.children}
		</StyledButton>
	);
};

export default Button;
