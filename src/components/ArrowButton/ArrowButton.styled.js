import styled from 'styled-components';

const StyledArrowButton = styled.button`
	padding: 1.6rem 2.2rem;
	margin: 1rem;
	font-size: 14px;
	letter-spacing: 1.5px;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	outline: none;
	transition: all 0.3s ease 0s;
	background-color: var(--color-button);
	box-shadow: var(--shadow);

	&:hover {
		background-color: ${({ disabled }) =>
			disabled ? 'var(--color-button)' : 'var(--backgroundColor-hover)'};
		::after {
			border-color: ${({ disabled }) =>
				disabled ? 'var(--color-text)' : 'var(--color-hover)'};
		}
	}

	&:active {
		transform: translateY(3px);
	}

	&::after {
		content: '';
		border: solid var(--color-text);
		border-width: 0 2px 2px 0;
		display: inline-block;
		padding: 4px;
		position: relative;
		${({ theme, variant }) => variant && theme.arrowButton.variant[variant]}
	}

	${({ theme, disabled }) => (disabled ? theme.arrowButton.disabled : null)}
`;

export { StyledArrowButton };
