import React from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  colors,
  CssBaseline,
  useMediaQuery,
} from '@material-ui/core';

export default ({ element }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: colors.blue,
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
};
