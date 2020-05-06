/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Header from "./header";
import "./layout.css";
import { blue } from "@material-ui/core/colors";
import { Toolbar, AppBar, Link, Button } from "@material-ui/core";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const preventDefault = event => event.preventDefault();

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: blue,
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="hero"
        style={{
          backgroundColor: "#4c4c4c",
          color: "white",
          display: "flex",
          height: "500px",
          boxSizing: "border-box",
          padding: "50px",
        }}
      >
        <h1>Welcome to Open Lake</h1>
      </div>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          textAlign: "center",
        }}
      >
        <main>{children}</main>
      </div>

      <div
        className="explore-projects"
        style={{
          textAlign: "center",
          backgroundColor: "#f2f2f2",
          padding: "3rem",
          color: "#444",
        }}
      >
        <h1>2,000 Projects and counting</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          rem id labore inventore, deserunt autem, ab expedita odio delectus
          ullam recusandae in eveniet eius at architecto vero esse! Modi,
          quisquam.
        </p>
      </div>

      <AppBar position="static" color="default">
        <Toolbar>
          <h3>Open Lake</h3>
          <div style={{ textAlign: "right" }}>
            <Button edge="end" href="#">Button</Button>
            <Button href="#">Button</Button>
            <Button href="#">Button</Button>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
