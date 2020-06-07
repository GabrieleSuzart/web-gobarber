import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './design-system/theme';

import { SignIn } from './pages/sign-in/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <SignIn />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
