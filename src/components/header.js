import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  makeStyles,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

import ButtonLink from "../components/ButtonLink";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Hidden mdUp implementation="css">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color: "currentColor" }}>
              {siteTitle}
            </Link>
          </Typography>
          <Hidden smDown implementation="css">
            <ButtonLink to="/projects/">projects</ButtonLink>
            <ButtonLink to="/community/">community</ButtonLink>
            <ButtonLink to="/about/">about</ButtonLink>
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
