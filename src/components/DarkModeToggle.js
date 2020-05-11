import React from 'react';
import useDarkMode from 'use-dark-mode';
import { IconButton, Tooltip } from '@material-ui/core';
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
} from '@material-ui/icons';

const DarkModeToggle = () => {
  const darkMode = useDarkMode();

  return (
    <Tooltip title="Toggle theme">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={darkMode.toggle}
      >
        {darkMode.value ? <LightIcon /> : <DarkIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeToggle;
