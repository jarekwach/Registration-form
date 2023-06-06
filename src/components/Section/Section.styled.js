import styled from 'styled-components';

const DefaultStyledSection = styled.section`
	height: 100vh;
	padding-top: 60px;
`;

const StyledSection = styled(DefaultStyledSection)`
	${({ darkTheme, theme }) => (darkTheme ? theme.darkTheme : null)}
`;

export { StyledSection };
