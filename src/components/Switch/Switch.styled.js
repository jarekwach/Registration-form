import styled from 'styled-components';

const StyledSwitchContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 20px;
`;

const StyledSwitchLabel = styled.label`
	margin-right: 1rem;
	position: relative;
	display: inline-block;
	width: 45px;
	height: 24px;
`;

const StyledSlider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${({ isOn }) => (isOn ? '#2196F3' : '#ccc')};
	transition: 0.4s;
	border-radius: 20px;
	box-shadow: 8px 8px 10px #bdbdbd;

	&::before {
		position: absolute;
		content: '';
		height: 30px;
		width: 30px;
		left: -2px;
		bottom: -2px;
		background-color: #fff;
		transition: 0.4s;
		border-radius: 50%;
		transform: ${({ isOn }) => (isOn ? 'translateX(20px)' : 'translateX(0)')};
	}
`;

export { StyledSwitchContainer, StyledSwitchLabel, StyledSlider };
