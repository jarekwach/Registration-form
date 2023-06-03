import styled from 'styled-components';

const DefaultStyledButton = styled.button`
	padding: 1.6rem 7rem;
	margin: 1rem;
	font-size: 14px;
	letter-spacing: 1.5px;
	border: none;
	border-radius: 45px;
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;

	color: var(--color-text);
	background-color: var(--color-button);
	box-shadow: var(--shadow);

	&:hover {
		background-color: var(--backgroundColor-hover);
		color: var(--color-hover);
	}

	&:active {
		transform: translateY(3px);
	}
`;

const StyledButton = styled(DefaultStyledButton)``;

export { StyledButton };
