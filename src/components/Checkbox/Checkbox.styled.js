import styled from 'styled-components';

const StyledCheckboxContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	position: relative;
	margin: 0 auto;
	width: 26rem;
`;

const StyledHiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	display: none;
`;

const StyledCheckbox = styled.div`
	display: inline-block;
	width: 30px;
	height: 30px;
	background-color: var(--color-button);
	box-shadow: ${({ checked }) =>
		checked ? 'var(--shadow-input)' : 'var(--shadow)'};
	border-radius: 50%;
	transition: all 0.3s;
	cursor: pointer;
	position: relative;

	&::after {
		content: '';
		display: block;
		position: absolute;
		top: 30%;
		left: 30%;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		border: 2px solid var(--color-text);
		background-color: ${({ checked }) =>
			checked ? 'var(--color-text)' : null};
	}
`;

const StyledCheckboxLabel = styled.label`
	margin-left: 8px;
	cursor: pointer;
`;

export {
	StyledCheckboxContainer,
	StyledHiddenCheckbox,
	StyledCheckbox,
	StyledCheckboxLabel,
};
