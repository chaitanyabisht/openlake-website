/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import {
  ThemeProvider,
  createMuiTheme,
  CssBaseline,
  useMediaQuery,
  Toolbar,
  AppBar,
  Button,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

import Header from "./header";
import "./layout.css";

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
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        style={{
          margin: `0 auto`,
          textAlign: "center",
        }}
      >
        <main>{children}</main>
      </div>

      <div style={{display: "flex", flexDirection: "row", backgroundColor : "#444" , color : "white"}}>
        <h3>Open Lake</h3>
        <div style={{display : "inherit"}}>
          <Button edge="end" href="#">
            Button
          </Button>
          <Button href="#">Button</Button>
          <Button href="#">Button</Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
