import React from 'react';
import { StyledForm } from './Form.styled';

const Form = (props) => {
	return (
		<StyledForm
			onSubmit={props.onSubmit}
			noValidate>
			{props.children}
		</StyledForm>
	);
};

export default Form;
