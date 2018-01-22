import React from 'react';
import { Helmet } from 'react-helmet';

const Email = ({ title, children }) => (
  <div className="email">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    {children}
  </div>
);

export default Email;
