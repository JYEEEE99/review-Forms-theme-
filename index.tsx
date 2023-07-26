import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
