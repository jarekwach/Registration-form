import React from 'react';
import { StyledArrowButton } from './ArrowButton.styled';

const ArrowButton = (props) => {
	const { variant, onClick, children, disabled, type } = props;
	return (
		<StyledArrowButton
			type={type}
			onClick={onClick}
			variant={variant}
			disabled={disabled}>
			{children}
		</StyledArrowButton>
	);
};

export default ArrowButton;
