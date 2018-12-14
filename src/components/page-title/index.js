import React from 'react';

const PageTitle = ({ children, below }) => (
  <h1 className={`page-title${below ? ' page-title--below' : ''}`}>
    {children}
  </h1>
);

export default PageTitle;
