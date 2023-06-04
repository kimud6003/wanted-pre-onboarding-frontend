import React from 'react';
import GlobalStyle from './Styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme} />
      <div className='App'></div>
    </>
  );
}

export default App;
