import React from 'react';
import { StyledSummaryList, StyledSummaryItem } from './SummaryList.styled';

const SummaryList = ({ data }) => {
	const listItem = data.map((item) => {
		const { label, value } = item;

		if (label === 'Newsletter') {
			return (
				<StyledSummaryItem key={label}>
					{label}: {value ? 'Yes' : 'No'}
				</StyledSummaryItem>
			);
		}

		return (
			<StyledSummaryItem key={label}>
				{label}: {value ? value : 'none'}
			</StyledSummaryItem>
		);
	});

	return <StyledSummaryList>{listItem}</StyledSummaryList>;
};

export default SummaryList;
