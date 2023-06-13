import React from 'react';
import { StyledAlert, StyledAlertText } from './Alert.styled';
import Button from '../Button';

const Alert = ({ message, onClick, darkTheme }) => {
	return (
		<StyledAlert darkTheme={darkTheme}>
			<StyledAlertText>{message}</StyledAlertText>
			<Button onClick={onClick}>close</Button>
		</StyledAlert>
	);
};

export default Alert;
