/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import MuiRootWrapper from './mui-root-wrapper';

const Wrapper = ({ element }) => {
  return <MuiRootWrapper element={element} />;
};

export const wrapRootElement = Wrapper;
