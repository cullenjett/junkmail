import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import routes from './template-routes';
import Hub from './Hub';

const App = () => (
  <div>
    <h1>
      <Link to="/">JunkMail</Link>
    </h1>

    <Switch>
      <Route exact path="/" component={Hub} />

      {routes.map(route => (
        <Route
          exact
          path={route.path}
          component={route.Component}
          key={route.filename}
        />
      ))}
    </Switch>
  </div>
);

export default App;
