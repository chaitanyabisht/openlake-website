/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { Button, Paper } from '@material-ui/core';

import Header from './header';
import './layout.css';

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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <Paper
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0 24px',
        }}
      >
        <h3>{data.site.siteMetadata.title}</h3>
        <div style={{ display: 'inherit' }}>
          <Button edge="end" href="#">
            Button
          </Button>
          <Button href="#">Button</Button>
          <Button href="#">Button</Button>
        </div>
      </Paper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
