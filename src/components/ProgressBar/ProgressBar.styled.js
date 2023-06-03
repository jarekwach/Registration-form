import styled from 'styled-components';

const StyledProgressBarContainer = styled.div`
	/* width: 100%; */
	height: 12px;
    margin: 10px;
	background-color: #f0f0f0;
	border-radius: 5px;
	box-shadow: var(--shadow);
`;

const StyledProgressBar = styled.div`
	height: 100%;
	border-radius: 15px;
	background-color: #05e8ba;
	background-image: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%);
	transition: width 0.3s ease-in-out;
`;

export { StyledProgressBar, StyledProgressBarContainer };
