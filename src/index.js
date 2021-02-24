import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import Theme from './assets/styles/Theme';

import GlobalStyles from './assets/styles/Global';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ Theme }>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);