import styled from 'styled-components';

const StyledDropdownContainer = styled.div`
	position: relative;
	display: inline-block;
	width: 26rem;
	margin: 0rem auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const StyledDropdownButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 26rem;
	padding: 1.6rem 2rem;
	margin-bottom: 1rem;
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
`;

const StyledDropdownMenu = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;

	background-color: var(--color-button);
	list-style: none;
	border: none;
	box-shadow: var(--shadow);
	display: ${({ open }) => (open ? 'block' : 'none')};
	border-radius: 25px;
`;

const StyledDropdownMenuItem = styled.li`
	padding: 1rem 5rem;
	color: var(--color-text);
	border-radius: 25px;
	cursor: pointer;

	&:hover {
		background-color: var(--backgroundColor-hover);
		color: var(--color-hover);
	}
`;

export {
	StyledDropdownContainer,
	StyledDropdownButton,
	StyledDropdownMenu,
	StyledDropdownMenuItem,
};
