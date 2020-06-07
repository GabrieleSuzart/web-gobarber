import { addDecorator } from '@storybook/react';
import { createElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './../src/design-system/theme';
import GlobalStyle from './../src/styles/global';

// Add ThemeProvider
addDecorator(storyFn =>
  createElement(
    ThemeProvider,
    { theme },
    createElement(GlobalStyle),
    createElement(storyFn as any), // to make hooks work
  ),
);
