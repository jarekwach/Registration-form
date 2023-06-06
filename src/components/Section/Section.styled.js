import styled from 'styled-components';

const DefaultStyledSection = styled.section`
	height: 100vh;
	margin: 0 auto;
`;

const StyledSection = styled(DefaultStyledSection)`
	${({ darkTheme, theme }) => (darkTheme ? theme.darkTheme : null)}
`;

export { StyledSection };
