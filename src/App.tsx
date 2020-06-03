import React from 'react';

import { SignIn } from './pages/sign-in/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
