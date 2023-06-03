import React from 'react';
import { StyledFormField } from './FormField.styled';

const FormField = (props) => {
	return <StyledFormField>{props.children}</StyledFormField>;
};

export default FormField;
