import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  makeStyles,
} from '@material-ui/core';

import ButtonLink from '../components/ButtonLink';
import DarkModeToggle from './DarkModeToggle';
import NavMenu from '../components/NavMenu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {},
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">{siteTitle}</Link>
          </Typography>

          <DarkModeToggle />
          <Hidden smDown implementation="css">
            <ButtonLink to="/">Home</ButtonLink>
            <ButtonLink to="/projects">projects</ButtonLink>
            <ButtonLink to="/community">community</ButtonLink>
          </Hidden>
          <Hidden mdUp implementation="css">
            <NavMenu />
          </Hidden>
        </Toolbar>
      </AppBar>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
