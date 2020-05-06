import React from "react";
import PropTypes from "prop-types";

import { Button } from "@material-ui/core";
import { Link } from "gatsby";

function ButtonLink({ to, children }) {
  return (
    <Button color="inherit">
      <Link to={to} style={{ color: "currentColor" }}>
        {children}
      </Link>
    </Button>
  );
}

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
