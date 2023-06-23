import React from 'react';

import ResetStyle from './styled/Reset';
import GlobalStyle from './styled/Global';
import MyForm from './components/MyForm';
import { ThemeProvider } from 'styled-components';
import theme from './styled/theme';

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
