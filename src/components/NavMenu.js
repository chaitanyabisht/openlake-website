import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreVert as MoreVertIcon } from '@material-ui/icons';
import { Link } from 'gatsby';

const ITEM_HEIGHT = 48;

const NavMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton color="inherit" aria-label="menu" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={menuOpen}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <Link to="/">
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to="/projects">
          <MenuItem onClick={handleClose}>Projects</MenuItem>
        </Link>
        <Link to="/community">
          <MenuItem onClick={handleClose}>Community</MenuItem>
        </Link>
      </Menu>
    </Fragment>
  );
};

NavMenu.propTypes = {};

export default NavMenu;
