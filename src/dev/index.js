import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import routes from './template-routes';

const App = () => (
  <div>
    <h1>
      <Link to="/">JunkMail</Link>
    </h1>

    <Route
      exact
      path="/"
      render={() => (
        <ul>
          {routes.map(route => (
            <li key={route.path}>
              <Link to={route.path}>{route.path}</Link>
            </li>
          ))}
        </ul>
      )}
    />

    <Switch>
      {routes.map(route => (
        <Route
          exact
          path={route.path}
          component={route.Component}
          key={route.path}
        />
      ))}
    </Switch>
  </div>
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
