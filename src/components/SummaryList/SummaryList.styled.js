import styled from 'styled-components';

const StyledSummaryList = styled.ul`
	min-height: 250px;
	min-width: 330px;
	margin: 0 auto;
	padding: 2rem 8rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	list-style: none;
	box-shadow: var(--shadow);
	border-radius: 25px;
`;

const StyledSummaryItem = styled.li`
	font-size: 1.8rem;
`;

export { StyledSummaryList, StyledSummaryItem };
