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
import HideOnScroll from './HideOnScroll';
import Logo from '../images/logo.png';

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
  logo: {
    maxWidth: 50,
    flexGrow: 1,
  },
  buttons : {
    marginLeft: 'auto',
  }
}));


const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Link to='/'>
            <img src={Logo} alt="OpenLake Logo" className={classes.logo} />
          </Link>
          <Hidden smDown implementation="css" className={classes.buttons}>
            {/* <DarkModeToggle /> */}
            <ButtonLink to="/">Home</ButtonLink>
            <ButtonLink to="/projects">projects</ButtonLink>
            <ButtonLink to="/community">community</ButtonLink>
          </Hidden>
          <Hidden mdUp implementation="css">
            <NavMenu />
          </Hidden>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
