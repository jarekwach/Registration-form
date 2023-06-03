import React from 'react';

import ResetStyle from './components/styled/Reset';
import GlobalStyle from './components/styled/Global';
import MyForm from './components/MyForm';
import { ThemeProvider } from 'styled-components';
import theme from './components/styled/theme';

const App = () => (
	<>
		<ResetStyle />
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<MyForm />
		</ThemeProvider>
	</>
);

export default App;
