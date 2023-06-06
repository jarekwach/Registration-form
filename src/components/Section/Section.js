import React from 'react';
import { StyledSection } from './Section.styled';

const Section = ({ children, darkTheme }) => {
	return <StyledSection darkTheme={darkTheme}>{children}</StyledSection>;
};

export default Section;
