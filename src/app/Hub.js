import React from 'react';
import { Link } from 'react-router-dom';

import routes from './template-routes';
import IFrameThumbnail from '../components/IFrameThumbnail';

const Hub = () => (
  <div className="hub">
    {routes.map(route => (
      <Link to={route.path} key={route.filename} className="hub__link">
        <IFrameThumbnail src={route.path} className="hub__thumbnail" />
        <h3 className="hub__link-text">{route.filename}</h3>
      </Link>
    ))}
  </div>
);

export default Hub;
