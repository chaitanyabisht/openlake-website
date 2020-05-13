/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

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
<<<<<<< HEAD

      {/* <Paper
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0 24px',
        }}
      >
        <h3 style={{ flex: 1 }}>{data.site.siteMetadata.title}</h3>
        <div style={{ display: 'inherit' }}>
          <Button href="#">Button</Button>
          <Button href="#">Button</Button>
          <Button href="#">Button</Button>
        </div>
      </Paper> */}
=======
>>>>>>> 62c0eeaee4a6da073e538c321795ca5eac2f9b10
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
