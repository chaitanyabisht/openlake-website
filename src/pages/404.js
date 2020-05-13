import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />

    <div
      style={{
        position: 'absolute',
        top: '50%',
        width: '100%',
        textAlign: 'center',
        transform: 'translateY(-50%)',
      }}
    >
      <h1>404 | Page Not Found</h1>
    </div>
  </Layout>
);

export default NotFoundPage;
