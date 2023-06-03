import React from 'react';
import { StyledArrowButton } from './ArrowButton.styled';

const ArrowButton = (props) => {
	return (
		<StyledArrowButton variant={props.variant}>
			{props.children}
		</StyledArrowButton>
	);
};

export default ArrowButton;
