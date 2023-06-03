import React from 'react';
import {
	StyledProgressBarContainer,
	StyledProgressBar,
} from './ProgressBar.styled';

const ProgressBar = (props) => {
	const { value } = props;

	return (
		<StyledProgressBarContainer>
			<StyledProgressBar style={{ width: `${value}%` }}></StyledProgressBar>
		</StyledProgressBarContainer>
	);
};

export default ProgressBar;
