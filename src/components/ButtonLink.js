import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import { Link } from 'gatsby';

function ButtonLink({ to, children }) {
  return (
    <Link to={to}>
      <Button color="inherit">{children}</Button>
    </Link>
  );
}

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
