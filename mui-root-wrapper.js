import React from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  colors,
  CssBaseline,
} from '@material-ui/core';

import useDarkMode from 'use-dark-mode';
import { Helmet } from 'react-helmet';

export default ({ element }) => {
  const darkMode = useDarkMode();

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: colors.blue,
          type: darkMode.value ? 'dark' : 'light',
        },
      }),
    [darkMode.value],
  );

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
};
