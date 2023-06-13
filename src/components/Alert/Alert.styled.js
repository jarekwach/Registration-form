import styled from 'styled-components';

const StyledAlert = styled.div`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 25px;
	padding: 20px;

	background-color: ${({ darkTheme }) =>
		darkTheme ? '#000' : 'var(--color-button)'};
	box-shadow: var(--shadow);
	color: ${({ darkTheme }) => (darkTheme ? '#fff' : 'var(--color-text)')};
`;

const StyledAlertText = styled.p`
	margin-bottom: 2rem;
	padding: 30px;
	text-align: center;
`;

export { StyledAlert, StyledAlertText };
