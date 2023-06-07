import React from 'react';
import { StyledLabel } from './Label.styled';

const Label = ({ children, label }) => {
	return <StyledLabel htmlFor={label}>{children}</StyledLabel>;
};

export default Label;
